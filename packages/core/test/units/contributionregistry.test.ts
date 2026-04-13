import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/core/events', () => ({ publish: vi.fn() }));
vi.mock('../../src/core/di', () => ({ rootContext: { put: vi.fn() } }));

import { Signal } from '@lit-labs/signals';
import { publish } from '../../src/core/events';
import { contributionTargetMappingRegistry } from '../../src/core/contribution-mapping';
import {
  contributionRegistry,
  TOPIC_CONTRIBUTEIONS_CHANGED,
  type Contribution,
  type CommandContribution,
} from '../../src/core/contributionregistry';

describe('ContributionRegistry', () => {
  beforeEach(() => {
    vi.mocked(publish).mockClear();
    contributionTargetMappingRegistry.resetForTesting();
  });

  it('returns empty array for new target via getContributions', () => {
    const target = 'test-empty-' + Math.random();
    expect(contributionRegistry.getContributions(target)).toEqual([]);
  });

  it('registers and returns contributions in order', () => {
    const target = 'test-order-' + Math.random();
    const c1: Contribution = { label: 'First' };
    const c2: Contribution = { label: 'Second' };
    contributionRegistry.registerContribution(target, c1);
    contributionRegistry.registerContribution(target, c2);
    const list = contributionRegistry.getContributions<Contribution>(target);
    expect(list).toHaveLength(2);
    expect(list[0].label).toBe('First');
    expect(list[1].label).toBe('Second');
  });

  it('converts disabled function to Signal.Computed for CommandContribution', () => {
    const target = 'test-disabled-' + Math.random();
    const contribution: CommandContribution = {
      label: 'With disabled',
      command: 'test.cmd',
      disabled: () => true,
    };
    contributionRegistry.registerContribution(target, contribution);
    expect(contribution.disabled).toBeDefined();
    expect(contribution.disabled).not.toBeInstanceOf(Function);
    expect((contribution.disabled as { get(): boolean }).get()).toBe(true);
  });

  it('leaves existing Signal.Computed disabled unchanged for CommandContribution', () => {
    const target = 'test-computed-' + Math.random();
    const computed = new Signal.Computed(() => false);
    const contribution: CommandContribution = {
      label: 'Already computed',
      command: 'test.cmd',
      disabled: computed,
    };
    contributionRegistry.registerContribution(target, contribution);
    expect(contribution.disabled).toBe(computed);
    expect((contribution.disabled as { get(): boolean }).get()).toBe(false);
  });

  describe('contribution target remapping', () => {
    it('getContributions(slotB) returns contribution registered to slotA when remapped to slotB', () => {
      const slotA = 'test-remap-a-' + Math.random();
      const slotB = 'test-remap-b-' + Math.random();
      contributionTargetMappingRegistry.applyAppNameRemaps([
        { name: 'view.remapped', targets: [slotB] },
      ]);
      const contrib: Contribution = { name: 'view.remapped', label: 'Remapped', icon: 'icon' };
      contributionRegistry.registerContribution(slotA, contrib);

      const fromA = contributionRegistry.getContributions<Contribution>(slotA);
      const fromB = contributionRegistry.getContributions<Contribution>(slotB);

      expect(fromA).toHaveLength(0);
      expect(fromB).toHaveLength(1);
      expect(fromB[0].name).toBe('view.remapped');
      expect(fromB[0].label).toBe('Remapped');
    });

    it('getContributions returns contribution in both original and remapped slot when remap has multiple targets', () => {
      const slotA = 'test-fanout-a-' + Math.random();
      const slotB = 'test-fanout-b-' + Math.random();
      contributionTargetMappingRegistry.applyAppNameRemaps([
        { name: 'view.fanout', targets: [slotA, slotB] },
      ]);
      const contrib: Contribution = { name: 'view.fanout', label: 'Fanout' };
      contributionRegistry.registerContribution(slotA, contrib);

      const fromA = contributionRegistry.getContributions<Contribution>(slotA);
      const fromB = contributionRegistry.getContributions<Contribution>(slotB);

      expect(fromA).toHaveLength(1);
      expect(fromB).toHaveLength(1);
      expect(fromA[0]).toBe(fromB[0]);
    });

    it('getContributions returns contribution only in original slot when no remap and contribution has name', () => {
      const slotA = 'test-noremap-a-' + Math.random();
      const slotB = 'test-noremap-b-' + Math.random();
      const contrib: Contribution = { name: 'view.noremap', label: 'No remap' };
      contributionRegistry.registerContribution(slotA, contrib);

      expect(contributionRegistry.getContributions<Contribution>(slotA)).toHaveLength(1);
      expect(contributionRegistry.getContributions<Contribution>(slotB)).toHaveLength(0);
    });

    it('getContributions returns contribution only in original slot when contribution has no name', () => {
      const slotA = 'test-unnamed-a-' + Math.random();
      const slotB = 'test-unnamed-b-' + Math.random();
      contributionTargetMappingRegistry.applyAppNameRemaps([
        { name: 'view.other', targets: [slotB] },
      ]);
      const contrib: Contribution = { label: 'Unnamed' };
      contributionRegistry.registerContribution(slotA, contrib);

      expect(contributionRegistry.getContributions<Contribution>(slotA)).toHaveLength(1);
      expect(contributionRegistry.getContributions<Contribution>(slotB)).toHaveLength(0);
    });

    it('registerContribution publishes CONTRIBUTIONS_CHANGED for original target', () => {
      const slotA = 'test-publish-a-' + Math.random();
      const contrib: Contribution = { name: 'view.publish', label: 'Publish' };
      contributionRegistry.registerContribution(slotA, contrib);

      expect(publish).toHaveBeenCalledWith(TOPIC_CONTRIBUTEIONS_CHANGED, {
        target: slotA,
        contributions: [contrib],
      });
    });

    it('registerContribution publishes CONTRIBUTIONS_CHANGED for each effective target when remapped', () => {
      const slotA = 'test-remapPub-a-' + Math.random();
      const slotB = 'test-remapPub-b-' + Math.random();
      contributionTargetMappingRegistry.applyAppNameRemaps([
        { name: 'view.remapPublish', targets: [slotB] },
      ]);
      const contrib: Contribution = { name: 'view.remapPublish', label: 'Remap Publish' };
      contributionRegistry.registerContribution(slotA, contrib);

      const publishCalls = vi.mocked(publish).mock.calls.filter(
        ([topic]) => topic === TOPIC_CONTRIBUTEIONS_CHANGED
      );
      const targetsPublished = publishCalls.map(([, payload]) => (payload as { target: string }).target);
      expect(targetsPublished).toContain(slotA);
      expect(targetsPublished).toContain(slotB);
      const [, eventForB] =
        publishCalls.find(([, payload]) => (payload as { target: string }).target === slotB) ?? [];
      const eventPayload = eventForB as { target: string; contributions: Contribution[] } | undefined;
      expect(eventPayload?.contributions).toHaveLength(1);
      expect(eventPayload?.contributions[0].name).toBe('view.remapPublish');
    });

    it('getContributions aggregates from multiple original slots into one effective slot', () => {
      const slotA = 'test-agg-a-' + Math.random();
      const slotB = 'test-agg-b-' + Math.random();
      const slotOther = 'test-agg-other-' + Math.random();
      contributionTargetMappingRegistry.applyAppNameRemaps([
        { name: 'view.intoB', targets: [slotB] },
        { name: 'view.alsoIntoB', targets: [slotB] },
      ]);
      const contrib1: Contribution = { name: 'view.intoB', label: 'Into B 1' };
      const contrib2: Contribution = { name: 'view.alsoIntoB', label: 'Into B 2' };
      contributionRegistry.registerContribution(slotA, contrib1);
      contributionRegistry.registerContribution(slotOther, contrib2);

      const fromB = contributionRegistry.getContributions<Contribution>(slotB);
      expect(fromB).toHaveLength(2);
      expect(fromB.map((c) => c.name).sort()).toEqual(['view.alsoIntoB', 'view.intoB']);
    });
  });
});

import { test, expect, type Page } from '@playwright/test';

async function openAiConfigWithAuxOnAiAssistant(page: Page) {
    // Boot harness and wait for auxiliary strip.
    await page.goto('/');

    const layout = page.locator('docks-standard-layout');
    await expect(layout).toBeVisible({ timeout: 120_000 });

    const auxTabs = page.locator('docks-tabs#sidebar-auxiliary');
    await expect(auxTabs).toBeVisible({ timeout: 30_000 });

    // Tabs: AI Assistant (aiview), real coupled panel, decoy with wrong editor id.
    const aiAssistantTab = auxTabs.locator('wa-tab[panel="aiview"]');
    const coupledTab = auxTabs.locator('wa-tab[panel="e2e-coupled-ai-config"]');
    const coupledPanel = auxTabs.locator('wa-tab-panel[name="e2e-coupled-ai-config"]');
    const decoyTab = auxTabs.locator('wa-tab[panel="e2e-decoy-coupled-ai-config"]');
    const decoyPanel = auxTabs.locator('wa-tab-panel[name="e2e-decoy-coupled-ai-config"]');

    // Pin auxiliary UX to AI Assistant so later coupling is attributable to the editor, not tab-group defaulting.
    await expect(aiAssistantTab).toBeVisible({ timeout: 30_000 });
    await expect(decoyTab).toBeVisible({ timeout: 30_000 });
    await aiAssistantTab.click();
    await expect(aiAssistantTab).toHaveAttribute('aria-selected', 'true', { timeout: 10_000 });
    await expect(coupledTab).toHaveAttribute('aria-selected', 'false');
    await expect(decoyTab).toHaveAttribute('aria-selected', 'false');
    await expect(coupledPanel).not.toHaveAttribute('active');
    await expect(decoyPanel).not.toHaveAttribute('active');
    await expect(auxTabs.locator('wa-tab-group')).toHaveAttribute('active', 'aiview');

    // Open AI Config editor in the main area (the id the real tab couples to).
    const aiConfigButton = page.getByRole('button', { name: /AI Config/i });
    await expect(aiConfigButton).toBeVisible({ timeout: 30_000 });
    await aiConfigButton.click();

    const aiEditor = page.locator('docks-tabs#editor-area-main docks-ai-config-editor');
    await expect(aiEditor).toBeVisible({ timeout: 30_000 });

    return { auxTabs, coupledTab, coupledPanel, decoyTab, decoyPanel };
}

test.describe('Coupled editors (TabContribution.coupledEditors)', () => {
    test('auxiliary tab reveals when coupled AI config editor becomes active', async ({ page }) => {
        const { auxTabs, coupledTab, coupledPanel } = await openAiConfigWithAuxOnAiAssistant(page);

        // Tab group and panel should follow the contribution that matches the active editor.
        await expect(auxTabs.locator('wa-tab-group')).toHaveAttribute('active', 'e2e-coupled-ai-config', {
            timeout: 30_000,
        });

        await expect(coupledTab).toHaveAttribute('aria-selected', 'true', { timeout: 30_000 });
        await expect(coupledPanel).toHaveAttribute('active', '', { timeout: 30_000 });
        const coupledMarker = coupledPanel.getByTestId('e2e-coupled-panel-inner');
        await expect(coupledMarker).toBeVisible({ timeout: 10_000 });
    });

    test('decoy tab with mismatched coupledEditors stays inactive when AI config editor is active', async ({
        page,
    }) => {
        const { auxTabs, coupledTab, coupledPanel, decoyTab, decoyPanel } =
            await openAiConfigWithAuxOnAiAssistant(page);

        // Witness: coupling ran for the matching contribution (not a silent no-op).
        await expect(auxTabs.locator('wa-tab-group')).toHaveAttribute('active', 'e2e-coupled-ai-config', {
            timeout: 30_000,
        });
        await expect(coupledTab).toHaveAttribute('aria-selected', 'true');
        await expect(coupledPanel).toHaveAttribute('active', '');

        // Decoy lists a non-matching editor id; it must not activate alongside the real tab.
        await expect(decoyTab).toHaveAttribute('aria-selected', 'false');
        await expect(decoyPanel).not.toHaveAttribute('active');
        await expect(decoyPanel.getByTestId('e2e-coupled-panel-inner')).toBeHidden();
    });
});

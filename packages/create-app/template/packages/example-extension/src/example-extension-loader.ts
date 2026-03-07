import { html } from '@eclipse-lyra/core/externals/lit';
import { contributionRegistry, SIDEBAR_MAIN } from '@eclipse-lyra/core';
import type { TabContribution } from '@eclipse-lyra/core';

contributionRegistry.registerContribution(SIDEBAR_MAIN, {
  name: 'example-view',
  label: 'Example',
  icon: 'puzzle-piece',
  closable: true,
  toolbar: false,
  component: (_id: string) => html`
    <div style="padding: var(--wa-space-l);">
      <h2>Example extension</h2>
      <p>This view is contributed by the <code>example-extension</code> package to the left side panel.</p>
    </div>
  `,
} as TabContribution);

export default function exampleExtensionLoader() {}

import { contributionRegistry, workspaceService, editorRegistry } from '@eclipse-lyra/core';
import type { ExecutionContext } from '@eclipse-lyra/core';
import { CID_PROMPT_ENHANCERS } from './core/constants';
import type { PromptEnhancer, PromptEnhancerContribution } from './core/interfaces';

const appStateEnhancer: PromptEnhancer = {
    priority: 20,
    enhance: async (prompt: string, _context: ExecutionContext) => {
        try {
            const workspace = await workspaceService.getWorkspace();
            const activeEditor = editorRegistry.getEditorArea()?.getActiveEditor();
            const appState = {
                workspace: workspace?.getName() || null,
                activeEditor: activeEditor ? {
                    title: (activeEditor as any).input?.title || null,
                    editorId: (activeEditor as any).input?.editorId || null
                } : null
            };
            return `${prompt}\n\n***App's state:***\n${JSON.stringify(appState, null, 2)}`;
        } catch {
            return prompt;
        }
    }
};

contributionRegistry.registerContribution(CID_PROMPT_ENHANCERS, {
    label: 'App State Enhancer',
    enhancer: appStateEnhancer
} as PromptEnhancerContribution);

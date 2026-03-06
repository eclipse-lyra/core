import { createLogger } from '@eclipse-lyra/core';

const logger = createLogger('ToolDetector');

const GREETINGS = ['hello', 'hi', 'hey', 'thanks', 'thank you', 'bye', 'goodbye'];
const ACTION_KEYWORDS = [
    'create', 'open', 'delete', 'read', 'write', 'edit', 'save', 'rename',
    'move', 'copy', 'list', 'show', 'display', 'run', 'execute', 'build',
    'add', 'remove', 'update', 'modify', 'change', 'set', 'get', 'find',
    'search', 'filter', 'sort', 'install', 'uninstall', 'load', 'import',
    'export', 'generate', 'make', 'do', 'perform', 'call', 'invoke'
];
const CONTEXT_KEYWORDS = [
    'file', 'folder', 'directory', 'workspace', 'editor', 'map', 'layer',
    'command', 'tool', 'extension', 'script', 'code', 'project'
];

/**
 * Heuristic tool detection: decides whether to attach tools based on prompt content
 * only. Avoids a 60MB ML dependency; simple chat never triggers a large download.
 */
export class ToolDetector {
    needsTools(prompt: string): boolean {
        if (!prompt?.trim()) return false;

        const normalized = prompt.toLowerCase().trim();
        if (GREETINGS.some(g => normalized === g || normalized.startsWith(g + ' '))) return false;

        const hasAction = ACTION_KEYWORDS.some(k => prompt.includes(k));
        const hasContext = CONTEXT_KEYWORDS.some(k => prompt.includes(k));
        const needsTools = hasAction && (hasContext || prompt.length > 20);
        if (needsTools) logger.info(`Heuristic: needsTools=true (action+context or long prompt)`);
        return needsTools;
    }

    dispose(): void {}
}

export const toolDetector = new ToolDetector();

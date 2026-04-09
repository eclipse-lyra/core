import { contributionRegistry } from '@eclipse-docks/core';
import { CID_CHAT_PROVIDERS } from './core/constants';
import type { ChatProviderContribution } from './core/interfaces';

const providers: Array<{ label: string; name: string; model: string; chatApiEndpoint: string; apiKey: string; parameters?: Record<string, any> }> = [
    { label: 'Ollama (Local)', name: 'ollama', model: 'gemma3:12b', chatApiEndpoint: 'https://<your-server>/v1/chat/completions', apiKey: '' },
    { label: 'OpenWebUI (Self Hosted)', name: 'openwebui', model: 'gemma3:12b', chatApiEndpoint: 'https://<your-server>/api/v1/chat/completion', apiKey: '' },
    { label: 'OpenAI', name: 'openai', model: 'gpt-4.1', chatApiEndpoint: 'https://api.openai.com/v1/chat/completions', apiKey: '<your api key>' },
    { label: 'Groq', name: 'groq', model: 'llama-3.1-8b-instant', chatApiEndpoint: 'https://api.groq.com/openai/v1/chat/completions', apiKey: '<your api key>' },
    { label: 'Cerebras', name: 'cerebras', model: 'llama3.1-8b', chatApiEndpoint: 'https://api.cerebras.ai/v1/chat/completions', apiKey: '<your api key>' },
    { label: 'WebLLM', name: 'webllm', model: 'gemma-2-9b-it-q4f16_1-MLC', chatApiEndpoint: '', apiKey: '', parameters: { context_window_size: 4096 } },
    { label: 'Mistral', name: 'mistral', model: 'mistral-large-latest', chatApiEndpoint: 'https://api.mistral.ai/v1/chat/completions', apiKey: '<your api key>' },
    { label: 'LiteLLM', name: 'litellm', model: 'gpt-3.5-turbo', chatApiEndpoint: 'https://<your-server>/v1/chat/completions', apiKey: '<your api key>' },
];

for (const { label, ...provider } of providers) {
    contributionRegistry.registerContribution<ChatProviderContribution>(CID_CHAT_PROVIDERS, {
        target: CID_CHAT_PROVIDERS,
        label,
        provider
    });
}

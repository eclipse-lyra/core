import { appSettings } from "@eclipse-lyra/core";
import type { ChatProvider } from "../core/types";
import type { AIService } from "../service/ai-service";
import { KEY_AI_CONFIG } from "../core/constants";
import { ProviderFactory } from "../providers/provider-factory";

export interface AIViewSettings {
    requireToolApproval?: boolean;
    toolApprovalAllowlist?: string[];
}

export interface ModelInfo {
    id: string;
    name?: string;
}

const VIEW_SETTINGS_KEY = 'aiViewChat';

export class ProviderManager {
    private providers: ChatProvider[] = [];
    private selectedProvider?: ChatProvider;
    private availableModels: ModelInfo[] = [];
    private loadingModels = false;

    private providerFactory = new ProviderFactory();

    constructor(private aiService: AIService) {}

    async initialize(): Promise<void> {
        this.providers = await this.aiService.getProviders() || [];
        const defaultProvider = await this.aiService.getDefaultProvider();
        if (defaultProvider) {
            this.selectedProvider = defaultProvider;
        }
    }

    getProviders(): ChatProvider[] { return this.providers; }
    getSelectedProvider(): ChatProvider | undefined { return this.selectedProvider; }
    setSelectedProvider(provider: ChatProvider): void { this.selectedProvider = provider; }
    getAvailableModels(): ModelInfo[] { return this.availableModels; }
    isLoadingModels(): boolean { return this.loadingModels; }

    async saveSettings(providerName: string, model: string, apiKey?: string, requireToolApproval?: boolean, toolApprovalAllowlist?: string[]): Promise<void> {
        const current: AIViewSettings = await appSettings.get(VIEW_SETTINGS_KEY) || {};
        const settings: AIViewSettings = { ...current };
        if (requireToolApproval !== undefined) settings.requireToolApproval = requireToolApproval;
        if (toolApprovalAllowlist !== undefined) settings.toolApprovalAllowlist = toolApprovalAllowlist;
        await appSettings.set(VIEW_SETTINGS_KEY, settings);

        const provider = this.providers.find(p => p.name === providerName);
        if (provider) {
            const updated = { ...provider, model, ...(apiKey !== undefined && { apiKey }) };
            this.selectedProvider = updated;
            await this.updateProviderInAIConfig(providerName, { model, ...(apiKey !== undefined && { apiKey }) });
            await this.aiService.setDefaultProvider(providerName);
        }
    }

    private async updateProviderInAIConfig(providerName: string, updates: { model?: string; apiKey?: string }): Promise<void> {
        const aiConfig = await appSettings.get(KEY_AI_CONFIG) || {};
        if (!aiConfig.providers || !Array.isArray(aiConfig.providers)) return;
        const idx = aiConfig.providers.findIndex((p: any) => p.name === providerName);
        if (idx >= 0) {
            aiConfig.providers[idx] = { ...aiConfig.providers[idx], ...updates };
            await appSettings.set(KEY_AI_CONFIG, aiConfig);
        }
    }

    async loadToolApprovalAllowlist(): Promise<string[]> {
        const settings: AIViewSettings = await appSettings.get(VIEW_SETTINGS_KEY) || {};
        return settings.toolApprovalAllowlist || [];
    }

    async fetchModels(providerName: string): Promise<void> {
        const provider = this.providers.find(p => p.name === providerName);
        if (!provider) return;

        this.loadingModels = true;
        this.availableModels = [];

        try {
            const baseProvider = this.providerFactory.getProvider(provider);
            this.availableModels = await baseProvider.getAvailableModels?.(provider) ?? [];
        } finally {
            this.loadingModels = false;
        }
    }
}

import { appSettings } from "@eclipse-lyra/core";
import type { ChatMessage } from "../core/types";

export interface Session {
    id: string;
    history: ChatMessage[];
    title: string;
    createdAt: number;
    updatedAt: number;
}

export class SessionManager {
    private activeSession: Session | null = null;
    private pastSessions: Session[] = [];

    async load(): Promise<void> {
        const saved = await appSettings.get('aiChatSessions') as any;
        if (!saved) return;

        if (saved.active && Array.isArray(saved.history)) {
            this.activeSession = saved.active;
        } else if (saved.activeSessionId && Array.isArray(saved.sessions)) {
            this.activeSession = saved.sessions.find((s: Session) => s.id === saved.activeSessionId) || null;
            this.pastSessions = saved.sessions.filter((s: Session) => s.id !== saved.activeSessionId);
        } else if (Array.isArray(saved.all)) {
            const [first, ...rest] = (saved.all as Session[]).sort((a, b) => b.updatedAt - a.updatedAt);
            this.activeSession = first || null;
            this.pastSessions = rest;
        }
    }

    async persist(): Promise<void> {
        const all: Session[] = [];
        if (this.activeSession) all.push(this.activeSession);
        all.push(...this.pastSessions);

        await appSettings.set('aiChatSessions', {
            all,
            activeSessionId: this.activeSession?.id || null
        });
    }

    createSession(): Session {
        const session: Session = {
            id: `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            history: [],
            title: 'New Chat',
            createdAt: Date.now(),
            updatedAt: Date.now()
        };
        if (this.activeSession) {
            this.pastSessions.unshift(this.activeSession);
        }
        this.activeSession = session;
        this.persist();
        return session;
    }

    getActiveSession(): Session | null {
        return this.activeSession;
    }

    getActiveSessionId(): string {
        return this.activeSession?.id || '';
    }

    switchToSession(sessionId: string): boolean {
        if (this.activeSession?.id === sessionId) return true;

        const idx = this.pastSessions.findIndex(s => s.id === sessionId);
        if (idx === -1) return false;

        const [target] = this.pastSessions.splice(idx, 1);
        if (!target) return false;

        if (this.activeSession) this.pastSessions.unshift(this.activeSession);
        this.activeSession = target;

        this.persist();
        return true;
    }

    getPastSessions(): Session[] {
        return this.pastSessions;
    }

    deletePastSession(sessionId: string): boolean {
        const idx = this.pastSessions.findIndex(s => s.id === sessionId);
        if (idx === -1) return false;
        this.pastSessions.splice(idx, 1);
        this.persist();
        return true;
    }

    addMessage(message: ChatMessage): void {
        if (!this.activeSession) return;
        this.activeSession.history.push(message);
        this.activeSession.updatedAt = Date.now();
        this.persist();
    }

    setTitle(title: string): void {
        if (!this.activeSession) return;
        this.activeSession.title = title;
        this.persist();
    }

    generateTitle(prompt: string): string {
        const trimmed = prompt.trim();
        if (!trimmed) return 'New Chat';
        return trimmed.length <= 30 ? trimmed : trimmed.substring(0, 30).trim() + '...';
    }

    deleteActiveAndSwitchToFirst(): void {
        if (!this.activeSession) return;
        this.activeSession = this.pastSessions.shift() || null;
        if (!this.activeSession) {
            this.createSession();
        }
        this.persist();
    }
}

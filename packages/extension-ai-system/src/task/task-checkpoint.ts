import { appSettings } from "@eclipse-docks/core";
import { TaskWorkspace } from "../workspace/workspace";

const CHECKPOINT_KEY_PREFIX = "ai_task_checkpoint_";
const REGISTRY_KEY = "ai_task_checkpoint_registry";

export class TaskCheckpointService {
    async save(workspace: TaskWorkspace): Promise<void> {
        const key = `${CHECKPOINT_KEY_PREFIX}${workspace.taskId}`;
        await appSettings.set(key, workspace.toJSON());
    }

    async restore(taskId: string): Promise<TaskWorkspace | null> {
        const key = `${CHECKPOINT_KEY_PREFIX}${taskId}`;
        const data = await appSettings.get(key);
        if (!data) return null;
        return TaskWorkspace.fromJSON(data);
    }

    async delete(taskId: string): Promise<void> {
        const key = `${CHECKPOINT_KEY_PREFIX}${taskId}`;
        await appSettings.set(key, undefined);
    }

    async listCheckpoints(): Promise<string[]> {
        return this.getRegistry();
    }

    async registerCheckpoint(taskId: string): Promise<void> {
        const registry = await this.getRegistry();
        if (!registry.includes(taskId)) {
            registry.push(taskId);
            await appSettings.set(REGISTRY_KEY, registry);
        }
    }

    async unregisterCheckpoint(taskId: string): Promise<void> {
        const registry = await this.getRegistry();
        await appSettings.set(REGISTRY_KEY, registry.filter(id => id !== taskId));
    }

    private async getRegistry(): Promise<string[]> {
        return (await appSettings.get(REGISTRY_KEY)) || [];
    }
}

export const taskCheckpointService = new TaskCheckpointService();

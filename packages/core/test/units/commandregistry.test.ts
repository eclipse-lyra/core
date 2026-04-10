import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../src/core/events', () => ({ publish: vi.fn() }));
vi.mock('../../src/core/di', () => ({ rootContext: { put: vi.fn() } }));
vi.mock('../../src/core/appstate', () => ({
    activePartSignal: { get: vi.fn(() => null) },
    activeEditorSignal: { get: vi.fn(() => null) },
}));

import { publish } from '../../src/core/events';
import {
    commandRegistry,
    Command,
    TOPIC_COMMAND_REGISTERED,
    type Handler,
    type ExecutionContext,
} from '../../src/core/commandregistry';

const TEST_ID = 'test.commandregistry.cmd';

describe('CommandRegistry', () => {
    beforeEach(() => {
        vi.mocked(publish).mockClear();
    });

    describe('registerCommand / getCommand / hasCommand', () => {
        it('stores command and returns it via getCommand', () => {
            const cmd = new Command(TEST_ID + '.get', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            expect(commandRegistry.hasCommand(cmd.id)).toBe(true);
            expect(commandRegistry.getCommand(cmd.id)).toBe(cmd);
        });

        it('publishes TOPIC_COMMAND_REGISTERED when registering', () => {
            const cmd = new Command(TEST_ID + '.publish', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            expect(publish).toHaveBeenCalledWith(TOPIC_COMMAND_REGISTERED, cmd);
        });

        it('hasCommand returns false for unknown id', () => {
            expect(commandRegistry.hasCommand('nonexistent.id')).toBe(false);
        });
    });

    describe('registerHandler / execute', () => {
        it('throws when executing command with no handlers', async () => {
            const cmd = new Command(TEST_ID + '.nohandler', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            await expect(commandRegistry.execute(cmd.id, {})).rejects.toThrow('No handlers registered');
        });

        it('runs handler and returns result', async () => {
            const cmd = new Command(TEST_ID + '.run', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            const handler: Handler = { execute: (ctx: ExecutionContext) => ctx.params?.x };
            commandRegistry.registerHandler(cmd.id, handler);
            const result = await commandRegistry.execute(cmd.id, { params: { x: 42 } });
            expect(result).toBe(42);
        });

        it('awaits async handler and returns resolved value', async () => {
            const cmd = new Command(TEST_ID + '.async', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            commandRegistry.registerHandler(cmd.id, {
                execute: async () => Promise.resolve({ ok: true }),
            });
            const result = await commandRegistry.execute(cmd.id, {});
            expect(result).toEqual({ ok: true });
        });

        it('uses first handler that canExecute', async () => {
            const cmd = new Command(TEST_ID + '.canExecute', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            commandRegistry.registerHandler(cmd.id, {
                canExecute: () => false,
                execute: () => 'first',
            });
            commandRegistry.registerHandler(cmd.id, {
                execute: () => 'second',
            });
            const result = await commandRegistry.execute(cmd.id, {});
            expect(result).toBe('second');
        });

        it('sorts handlers by ranking and uses highest first', async () => {
            const cmd = new Command(TEST_ID + '.ranking', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            commandRegistry.registerHandler(cmd.id, { execute: () => 'low', ranking: 0 });
            commandRegistry.registerHandler(cmd.id, { execute: () => 'high', ranking: 10 });
            const result = await commandRegistry.execute(cmd.id, {});
            expect(result).toBe('high');
        });

        it('rethrows when handler execute throws', async () => {
            const cmd = new Command(TEST_ID + '.throw', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            commandRegistry.registerHandler(cmd.id, {
                execute: () => { throw new Error('handler error'); },
            });
            await expect(commandRegistry.execute(cmd.id, {})).rejects.toThrow('handler error');
        });
    });

    describe('createExecutionContext', () => {
        it('returns context with params and app state', () => {
            const ctx = commandRegistry.createExecutionContext({ foo: 'bar' });
            expect(ctx.params).toEqual({ foo: 'bar' });
            expect(ctx).toHaveProperty('activePart');
            expect(ctx).toHaveProperty('activeEditor');
        });
    });

    describe('listCommands', () => {
        it('returns all commands when called without context', () => {
            const cmd = new Command(TEST_ID + '.list', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            const list = commandRegistry.listCommands();
            expect(list[cmd.id]).toBe(cmd);
        });

        it('filters by canExecute when context provided', () => {
            const cmd = new Command(TEST_ID + '.listFilter', 'Name', 'Desc');
            commandRegistry.registerCommand(cmd);
            commandRegistry.registerHandler(cmd.id, {
                canExecute: (ctx: ExecutionContext) => ctx.params?.allow === true,
                execute: () => undefined,
            });
            const allowed = commandRegistry.listCommands({ params: { allow: true } });
            const denied = commandRegistry.listCommands({ params: { allow: false } });
            expect(allowed[cmd.id]).toBeDefined();
            expect(denied[cmd.id]).toBeUndefined();
        });
    });

    describe('createAndRegisterCommand', () => {
        it('registers command and handler together', async () => {
            const id = TEST_ID + '.createAndRegister';
            const handler: Handler = { execute: () => 'done' };
            commandRegistry.createAndRegisterCommand(id, 'N', 'D', [], handler);
            expect(commandRegistry.hasCommand(id)).toBe(true);
            expect(await commandRegistry.execute(id, {})).toBe('done');
        });
    });
});

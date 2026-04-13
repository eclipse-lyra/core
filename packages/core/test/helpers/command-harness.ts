import { vi } from 'vitest';

export type RegisteredCommand = {
  command: { id: string };
  handler?: { execute: (context: any) => Promise<unknown> | unknown };
};

export function createCommandHarness() {
  const registerAllMock = vi.fn();
  const toastErrorMock = vi.fn();

  return {
    registerAllMock,
    toastErrorMock,
    getRegistered(commandId: string): RegisteredCommand {
      for (const [registration] of registerAllMock.mock.calls) {
        if (registration?.command?.id === commandId) {
          return registration as RegisteredCommand;
        }
      }
      throw new Error(`Command not registered: ${commandId}`);
    },
  };
}

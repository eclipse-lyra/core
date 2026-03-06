import { signal } from '@lit-labs/signals';
import { LyraPart } from "../parts/part";

export const EMPTY_SIGNALPORT = {} as any

export const activePartSignal = signal<LyraPart>(null as unknown as LyraPart)
export const activeEditorSignal = signal<LyraPart>(null as unknown as LyraPart)

export const partDirtySignal = signal<LyraPart>(null as unknown as LyraPart)

export const activeTasksSignal = signal<number>(0)

export const activeSelectionSignal = signal<any>(undefined)

export const perspectiveSwitchedSignal = signal<{name: string, timestamp: number}>({name: '', timestamp: 0})
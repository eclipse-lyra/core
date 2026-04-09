import { signal } from '@lit-labs/signals';
import { DocksPart } from "../parts/part";

export const EMPTY_SIGNALPORT = {} as any

export const activePartSignal = signal<DocksPart>(null as unknown as DocksPart)
export const activeEditorSignal = signal<DocksPart>(null as unknown as DocksPart)

export const partDirtySignal = signal<DocksPart>(null as unknown as DocksPart)

export const activeTasksSignal = signal<number>(0)

export const activeSelectionSignal = signal<any>(undefined)

export const perspectiveSwitchedSignal = signal<{name: string, timestamp: number}>({name: '', timestamp: 0})
import { editorRegistry, File, type EditorInput } from '@eclipse-docks/core';
import { html } from '@eclipse-docks/core/externals/lit';
import './sql-editor';

export default function activate() {
  editorRegistry.registerEditorInputHandler({
    editorId: 'system.sqleditor',
    label: 'SQL Editor',
    icon: 'database',
    canHandle: (input: unknown) =>
      input instanceof File && input.getName().toLowerCase().endsWith('.sql'),
    ranking: 900,
    handle: async (input: File) => {
      const editorInput: EditorInput = {
        title: input.getWorkspacePath(),
        data: input,
        key: input.getWorkspacePath(),
        icon: 'database',
        state: {},
        component: () => null as any,
      };
      editorInput.component = (id: string) =>
        html`<docks-sql-editor id="${id}" .input=${editorInput}></docks-sql-editor>`;
      return editorInput;
    },
  });
}


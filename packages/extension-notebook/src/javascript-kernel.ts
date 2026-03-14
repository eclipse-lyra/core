import { createJsRuntime, type JsRuntime } from '@eclipse-lyra/core';
import type { NotebookExecutionResult, NotebookKernel, NotebookKernelContribution } from './notebook-kernel-api';

class JavaScriptNotebookKernel implements NotebookKernel {
  readonly id = 'javascript';
  readonly label = 'JavaScript';
  readonly language = 'javascript';

  private runtime: JsRuntime | null = null;

  private getRuntime(): JsRuntime {
    if (!this.runtime) {
      this.runtime = createJsRuntime();
    }
    return this.runtime;
  }

  async getVersion(): Promise<string> {
    return 'JavaScript';
  }

  async execute(code: string): Promise<NotebookExecutionResult> {
    try {
      const result = await this.getRuntime().execute(code);
      if (result === undefined || result === null) {
        return {};
      }
      return { data: String(result) };
    } catch (err) {
      return { error: err instanceof Error ? err.message : String(err) };
    }
  }

  close(): void {
    if (this.runtime) {
      this.runtime.close();
      this.runtime = null;
    }
  }
}

export const javascriptKernelContribution: NotebookKernelContribution = {
  id: 'javascript',
  label: 'JavaScript',
  language: 'javascript',
  loadKernel: async (): Promise<NotebookKernel> => new JavaScriptNotebookKernel(),
};

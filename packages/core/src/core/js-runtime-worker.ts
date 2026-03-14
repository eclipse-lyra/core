/**
 * Worker entry for JsRuntime: receives code, evaluates in global scope, posts result or error.
 */
self.onmessage = async function (e: MessageEvent<string>) {
  const code = e.data;
  try {
    const fn = new Function(code);
    let value = fn();
    if (value != null && typeof (value as Promise<unknown>).then === 'function') {
      value = await (value as Promise<unknown>);
    }
    try {
      self.postMessage({ type: 'result', value });
    } catch {
      self.postMessage({
        type: 'result',
        value: value === undefined ? undefined : String(value),
      });
    }
  } catch (err) {
    self.postMessage({
      type: 'error',
      message: err instanceof Error ? err.message : String(err),
    });
  }
};

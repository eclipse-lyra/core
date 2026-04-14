import { CereusDB } from '@cereusdb/standard';
import wasmUrl from '@cereusdb/standard/wasm?url';
import { runCereusWorker } from './cereusdb-worker-runtime';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});

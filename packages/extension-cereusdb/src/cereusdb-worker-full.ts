import { CereusDB } from '@cereusdb/full';
import wasmUrl from '@cereusdb/full/wasm?url';
import { runCereusWorker } from './cereusdb-worker-runtime';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});

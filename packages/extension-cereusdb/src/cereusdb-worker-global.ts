import { CereusDB } from '@cereusdb/global';
import wasmUrl from '@cereusdb/global/wasm?url';
import { runCereusWorker } from './cereusdb-worker-runtime';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});

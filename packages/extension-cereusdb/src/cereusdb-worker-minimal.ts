import { CereusDB } from '@cereusdb/minimal';
import wasmUrl from '@cereusdb/minimal/wasm?url';
import { runCereusWorker } from './cereusdb-worker-runtime';

runCereusWorker(async () => {
  return (await CereusDB.create({ wasmUrl })) as Awaited<
    ReturnType<typeof CereusDB.create>
  >;
});

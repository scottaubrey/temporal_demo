import {
  NativeConnection, Worker, Runtime, DefaultLogger,
} from '@temporalio/worker';
import * as activities from './activities';

process.title = "Temporal worker";

async function run() {
  const connection = await NativeConnection.connect();

  const worker = await Worker.create({
    connection,
    taskQueue: 'demo',
    workflowsPath: require.resolve('./workflows'),
    activities,
    maxCachedWorkflows: 0,
    maxConcurrentActivityTaskExecutions: 1,
    maxConcurrentWorkflowTaskExecutions: 1,
    maxConcurrentLocalActivityExecutions: 1
  });

  await worker.run();
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

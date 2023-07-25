import { condition, defineQuery, proxyActivities, setHandler, sleep } from '@temporalio/workflow';
import type * as activities from './activities';
import { defineSignal } from '@temporalio/workflow';

const { sayMessage } = proxyActivities<typeof activities>({
  startToCloseTimeout: '30 seconds',
});







/*
 * Simple Workflow with a couple of activities to demo interrupting the services
 */
export const monologue = async () => {
  console.log('say hello');
  await sayMessage('Hello there! Whats your name?');

  console.log('sleep for 10 seconds');
  await sleep('10 seconds');

  console.log('ask why there is no response');
  await sayMessage('Why are you not talking to me?');

  console.log('all done!');
};











/*
 * Workflow that is queryable and awaits external signal
 */
const currentQuestionQuery = defineQuery<string | null>('currentQuestion');
const respondSignal = defineSignal<[string]>('respond');

export const conversation = async () => {
  let question: string | null = null;
  let answer: string | null = null;

  setHandler(currentQuestionQuery, () => question);
  setHandler(respondSignal, (message: string) => {
    answer = message
  });

  question = 'Hello there! Whats your name?';
  await sayMessage('Hello there! Whats your name?');

  await condition(() => typeof answer === 'string');

  question = null;
  await sayMessage(`Nice to meet you ${answer}`);
};

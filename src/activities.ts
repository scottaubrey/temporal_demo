import { execSync } from 'child_process';


export const sayMessage = async (message: string) => {
  execSync(`./script/say.sh ${message}`);
  return message;
};

export const useMemoryAndSleep = async () => {
  const a = [];
  for (let i = 0; i < 100000000; i++) {
    a.push(i)
  }

  execSync('sleep 20');
}

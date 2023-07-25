import { execSync } from 'child_process';


export const sayMessage = async (message: string) => {
  execSync(`./script/say.sh ${message}`);
  return message;
};

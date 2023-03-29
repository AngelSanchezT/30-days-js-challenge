import { doTask1, doTask2, doTask3 } from "./tasks";

export function runCode() {
  const strings = [];
  return new Promise(async (resolve) => {
    let rta = await doTask1();
    strings.push(rta);
    rta = await doTask2();
    strings.push(rta);
    rta = await doTask3();
    strings.push(rta);

    resolve(strings);
  });
}

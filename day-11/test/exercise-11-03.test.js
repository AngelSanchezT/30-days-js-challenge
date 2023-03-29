import chai, { expect } from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { runCode } from "../exercise-11-03";
import { doTask1, doTask2, doTask3 } from "../tasks";

describe('🌐 Day 11-03 - Solve the hell callback using async/await', function () {

  // aumenta el tiempo limite a 10000ms
  this.timeout(10000);

  it("should return a array with 3 elements", async () => {
    const rta = await runCode();
    expect(rta).to.be.an("array").with.lengthOf(3);
    expect(rta[0]).to.equal("Task 1");
    expect(rta[1]).to.equal("Task 2");
    expect(rta[2]).to.equal("Task 3");
  });

  it("should call setTimeout 3 times", async () => {
    // Restore the original setTimeout function
    global.setTimeout.restore();
    // create a spy for the method setTimeout
    const spy = sinon.spy(global, "setTimeout");
    const rta = await runCode();

    expect(rta).to.be.an("array").with.lengthOf(3);
    spy.restore(); // Restore the original function after the test
    expect(spy.calledThrice).to.be.true;
  });

  it("should doTask1, doTask2, doTask3 be a Promise", async () => {
    await runCode();
    expect(doTask1()).to.be.a("promise");
    expect(doTask2()).to.be.a("promise");
    expect(doTask3()).to.be.a("promise");
  });

});

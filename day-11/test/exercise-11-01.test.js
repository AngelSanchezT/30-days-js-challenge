import assert from "assert";
import { expect } from "chai";
import chai from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

import { sendEmail } from "../exercise-11-01";

describe("🌐 Day 11 - Create a Promise to Send Emails", function () {
  // aumenta el tiempo limite a 5000ms
  this.timeout(10000);
  it("should call setTimeout with 2s", async () => {
    // create a spy for the method setTimeout
    const spy = sinon.spy(global, "setTimeout");

    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "Test Body";
    const startTime = performance.now();
    // Call the method
    const rta = await sendEmail(email, subject, body);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    console.log(`sendEmail took ${executionTime}ms to complete`);

    // We check that the method of the object has been called exactly once
    // and that the last call was made with a function and a numeric
    // argument equal to 2000.
    expect(spy.calledOnce).to.be.true;
    // expect(spy.lastCall.args).to.eql([expect.any(sendEmail), 2000]);
    expect(spy.lastCall.args[1]).to.be.a("number").and.equal(2000);
    expect(rta).to.eql({ email, subject, body });
  });

  it("should resolve with email information after 2 seconds", async () => {
    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "Test Body";
    const emailInfo = await sendEmail(email, subject, body);

    expect(emailInfo).to.eql({ email, subject, body });
  });

  it("should reject if email is missing", async () => {
    const email = "";
    const subject = "Test Subject";
    const body = "Test Body";

    await expect(sendEmail(email, subject, body)).to.be.rejectedWith(Error, "Error email is missing");
  });

  it("should reject if subject is missing", async () => {
    const email = "user@example.com";
    const subject = "";
    const body = "Test Body";

    await expect(sendEmail(email, subject, body)).to.be.rejectedWith(Error, "Error subject is missing");
  });

  it("should reject if body is missing", async () => {
    const email = "user@example.com";
    const subject = "Test Subject";
    const body = "";

    await expect(sendEmail(email, subject, body)).to.be.rejectedWith(Error, "Error body is missing");
  });
});

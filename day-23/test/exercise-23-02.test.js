import { Newsletter } from "../exercise-23-02";
import { Subscriber } from "../Subscriber";
import { expect } from 'chai';
import sinon from 'sinon';

describe("🌐 Day 23-02 - Implementation of Observer in Newsletter", () => {
  let newsletter;

  beforeEach(() => {
    newsletter = new Newsletter();
  });

  it("should not has subscribers", () => {
    expect(newsletter.subscribers).to.eql([]);
  });

  it("should can add a subscriber", () => {
    const subscriber = new Subscriber("leo@example.com");
    newsletter.subscribe(subscriber);
    expect(newsletter.subscribers).to.include(subscriber);
  });

  it("should can remove a subscriber", () => {
    const subscriber = new Subscriber("email@example.com");
    newsletter.subscribe(subscriber);
    newsletter.unsubscribe("email@example.com");
    expect(newsletter.subscribers).to.not.include(subscriber);
  });

  it("should send an article to all subscribers", () => {
    const subscriber = new Subscriber("email@example.com");
    const spy = sinon.spy(subscriber, "receive");
    newsletter.subscribe(subscriber);
    newsletter.post({ title: "Título de prueba" });
    expect(spy).to.have.been.calledWith({ title: "Título de prueba" });
  });

  it("should can receive an email", () => {
    const subscriber = new Subscriber("email@example.com");
    const spy = sinon.spy(console, "log");
    subscriber.receive({ title: "Título de prueba" });
    expect(spy).to.have.been.called;
  });
});
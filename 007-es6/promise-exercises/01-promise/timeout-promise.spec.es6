import timeoutPromiseFactory from './timeout-promise';

describe('TimeoutPromise', () => {

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 150;

  describe('je definována jako funkce', () => {

    it('se dvěma parametry', () => {
      expect(timeoutPromiseFactory.length).toBe(2);
    });

    it("která vrací promise (TODO 1.1)", () => {

      const timeout = timeoutPromiseFactory(1, () => {});
      expect(timeout instanceof Promise).toBe(true);
    });

  });

  it("hodnota je stejná jako návratová hodnota conditionFunction (TODO 1.2)", (done) => {

    const conditionFunction = () => {
      return 42;
    };

    const timeout = timeoutPromiseFactory(1, conditionFunction);

    timeout.then(function(value) {
      expect(value).toBe(42);
      done();
    });
  });

  it("pokud funkce vrátí null je promise rejected (TODO 1.3)", (done) => {
    const conditionFunction = () => {
      return null;
    };

    const timeout = timeoutPromiseFactory(1, conditionFunction);

    timeout.catch(function(value) {
      expect(value).toBe(null);
      done();
    });
  });

  describe("conditionFunction", () => {

    beforeEach(() => jasmine.clock().install());

    afterEach(() => jasmine.clock().uninstall());

    it("je volána s definovaným zpožděním (TODO 1.4)", () => {

      let wasCalled = false;

      const conditionFunction = () => wasCalled = true;

      const timeout = timeoutPromiseFactory(100, conditionFunction);

      expect(wasCalled).toBe(false);

      jasmine.clock().tick(99);

      expect(wasCalled).toBe(false);

      jasmine.clock().tick(10);

      expect(wasCalled).toBe(true);

    });

  })

});

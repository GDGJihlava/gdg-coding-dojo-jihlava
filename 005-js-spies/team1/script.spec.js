describe("Spy function", function() {

  it("is defined", function() {
    expect(Spy).toBeDefined();
  });

  it("returns object with count property", function() {
    var result = Spy(console, 'error');
    expect(result.count).toBe(0);
  });

  it("is counting", function() {
    var result = Spy(console, 'error');
    console.error("ahoj pando");
    expect(result.count).toBe(1);
  });

  describe("properties", function() {
    var fakeObj, original, result;

    beforeEach(function() {
      fakeObj = jasmine.createSpyObj('fakeObj', ['spyTest']);
      original = fakeObj.spyTest;

      result = Spy(fakeObj, 'spyTest');
      fakeObj.spyTest("ahoj pando");
    });

    it("calls original implementation", function() {

      expect(original).toHaveBeenCalled();
    });

    it("calls original implementation with _arguments", function() {

      expect(original).toHaveBeenCalledWith("ahoj pando");
    });

    it("stores last called _arguments", function() {
      expect(JSON.stringify(fakeObj.spyTest._arguments)).toEqual(JSON.stringify({0: "ahoj pando"}));
    });

  });

  it("result properties are also function properties", function() {
    var fakeObj = {
      spyTest: function() {
      }
    };

    var result = Spy(fakeObj, 'spyTest');
    fakeObj.spyTest("ahoj pando");

    expect(result.count).toEqual(fakeObj.spyTest.count);
    expect(result._arguments).toEqual(fakeObj.spyTest._arguments);
  });

  it("result has method for args check", function() {
    var fakeObj = {
      spyTest: function() {
      }
    };

    Spy(fakeObj, 'spyTest');
    fakeObj.spyTest("ahoj pando");

    expect(fakeObj.spyTest.checkArgs("ahoj pando")).toEqual(true);
    expect(JSON.stringify([1, 3, 4])).toEqual(JSON.stringify([1, 3, 4]));
  });




});

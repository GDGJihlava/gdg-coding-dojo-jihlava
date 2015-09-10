describe('calculator', function() {

  function getOperation(operationName) {
    var operations = {
      sum: {
        reducer: function(accumulator, current) {
          return accumulator + current;
        },
        initValue: 0
      },
      product: {
        reducer: function(accumulator, current) {
          return accumulator * current;
        },
        initValue: 1
      }

    };

    if(!(operations.hasOwnProperty(operationName))){
      throw new TypeError("operation does not exist");
    }

    return operations[operationName];
  }

  var calculator = function(operationName) {

    var numbers = Array.prototype.slice.call(arguments, 1);

    var floatNumber = numbers.map(parseFloat);

    var errors = floatNumber.filter(isNaN);
    if (errors.length > 0) {
      throw new TypeError("arguments must be number");
    }

    var operation = getOperation(operationName);

    return floatNumber.reduce(operation.reducer, operation.initValue);

  };

  describe('sum', function() {
    it('should be 0', function() {
      expect(calculator('sum')).toBe(0);
    });
    it('one param should be same as input value', function() {
      expect(calculator('sum', 10)).toBe(10);
    });

    it('two params should be sum of values', function() {
      expect(calculator('sum', 10, 10)).toBe(20);
    });

    it('two params should be sum of values', function() {
      expect(calculator('sum', "10", 10)).toBe(20);
    });

    it('should return sum of all params', function() {
      expect(calculator('sum', 10, 10, 10, 10)).toBe(40);
    });

    it('should throw error for invalid parameter', function() {
      expect(function() {
        calculator('sum', "ahoj")
      }).toThrow();

    });

  });

  describe("product", function() {

    it('should return 1 if args are 1 and 1', function() {
      expect(calculator("product", 1, 1)).toBe(1);
    });

    it('should throw error for unknown operation', function() {
      expect(function(){calculator("WUT", 1, 1)}).toThrowError("operation does not exist");
    });
  });

  it('should be function', function() {
    expect(typeof calculator).toBe("function");
  });

});

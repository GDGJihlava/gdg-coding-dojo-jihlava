

var Calculator = function() {

  this.operations = {};
  this.addOperation = function(name, operation) {
    this.operations[name] = operation;
  };

  this.calculate = function(typeOfOperation) {
    var numbers = [];
    for (var index = 1; index < arguments.length; index++) {
      numbers[index - 1] = arguments[index];
    }

    var operation = this.operations[typeOfOperation];

    result = operation.apply(null, numbers);

    if (isNaN(result)) {
      throw new TypeError();
    }

    return result;
  }

};

var calc = new Calculator();
calc.addOperation("mult", mult);
calc.addOperation("sum", sum);

console.log(calc.calculate("sum", 1,2,3));

var calculator = calc.calculate.bind(calc);

function sum() {
  var result = 0;
  for (var index = 0; index < arguments.length; index++) {
    result += parseInt(arguments[index]);

  }
  return result;
}

function mult() {
  var result = 1;
  for (var index = 0; index < arguments.length; index++) {
    result *= parseInt(arguments[index]);
  }
  return result;
}
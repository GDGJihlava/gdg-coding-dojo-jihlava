
var Spy = function(object, methodName) {

  var savedMethod = object[methodName];

  var result = function spyFunction() {
    result.count++;
    result._arguments = arguments;
    savedMethod.apply(null, arguments);
  };

  result.count = 0;
  result._arguments = [];
  result.checkArgs = function(args) {
    return JSON.stringify(result._arguments) == JSON.stringify(arguments);
  };

  object[methodName] = result;

  return result;

};

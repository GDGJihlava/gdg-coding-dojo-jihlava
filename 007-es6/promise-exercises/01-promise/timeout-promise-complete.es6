const timeoutPromiseFactory = (delay, conditionFunction) => {

  let executor = function(resolve, reject) {
    setTimeout(function(){
      var value = conditionFunction();
      if (value) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  };

  // TODO 1 - Vytvoření promise
  return new Promise(executor)
};

export default timeoutPromiseFactory;

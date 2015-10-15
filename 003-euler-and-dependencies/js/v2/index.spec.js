describe('getDependenciesWithVersion', function() {

  var dependencies = {
    "optimist": {
      "version": "0.3.7"
    },
    "inflection": {
      "version": "1.2.6"
    }
  };

  it('should return array of dependencies with version numbers', function() {
    expect(getDependenciesWithVersion(dependencies)).toEqual(["optimist@0.3.7","inflection@1.2.6"]);
  });

})

describe('getDependencies', function() {

  var package = {
    "name": "lorem-ipsum",
    "version": "0.1.1",
    "dependencies": {
      "optimist": {
        "version": "0.3.7",
        "dependencies": {
          "wordwrap": {
            "version": "0.0.2"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  };

  it('should return array of ALL dependencies with version numbers', function() {
    expect(getDependencies(package).sort()).toEqual([ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2']);
  });

})


;
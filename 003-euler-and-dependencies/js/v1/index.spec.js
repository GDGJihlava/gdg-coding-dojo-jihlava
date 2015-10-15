describe('getDependencies', function() {

  it('should be a function', function() {
    expect(typeof getDependencies).toBe("function");
  });


  it('for one package return emptzy array', function() {
    var package = {
      name: "inflection",
      version: "1.2.6"
    };
    expect(getDependencies(package)).toEqual([]);
  });

  it('should return array of dependency if package contains dependency', function() {
    var package = {
      name: "inflection",
      version: "1.2.6",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    };
    expect(getDependencies(package)).toEqual(["wordwrap"]);
  });

  var package = {
    name: "inflection",
    version: "1.2.6",
    "dependencies": {
      "wordwrap": {
        "version": "0.0.2",
        "dependencies": {
          "optimist": {
            "version": "0.3.7"
          }
        }
      },
      "inflection": {
        "version": "1.2.6"
      }
    }
  };

  it('should return lower level dependencies', function() {
    expect(getDependencies(package).sort())
        .toEqual(["wordwrap", "inflection", "optimist"].sort());
  });



})
;


describe('calculator', function() {

  describe('sum', function(){
    it('shold sum numbers', function(){
      expect(sum(1,2)).toBe(3);
    });
  });

  describe('mult', function(){
    it('shold multiply numbers', function(){
      expect(mult(1,2)).toBe(2);
    });
  });

  it('should multiple numbers', function() {
    expect(calculator("mult", 2, 3)).toBe(6);
  });

  it('should calculate sum of multiple numbers', function() {
    expect(calculator("sum", 2, 3, 4, 5)).toBe(14);
  });

  it('should be function', function() {
    expect(typeof calculator).toBe("function");

  });

  it('should trow exception if argument is string', function() {
    function shouldThrow() {
      console.log(calculator("sum", "a"));
    }

    expect(shouldThrow).toThrowError(TypeError);
  });

  it('should suport sum and return 0 if no arguments', function() {
    expect(calculator("sum")).toBe(0);
  });

  it('should calculate sum', function() {
    expect(calculator("sum", 2, 3)).toBe(5);
  });

  it('should calculate sum from strings', function() {
    expect(calculator("sum", "2", "3")).toBe(5);
  });

});
function Spy(obj, metoda) {
    this.count = 0;
    var original = obj[metoda];

    obj[metoda] = function () {
        ++this.count;
        return original.apply(original, arguments)
    }.bind(this)
}

describe("Spy", function () {
    it("is defined", function () {
        expect(Spy).toBeDefined();
    });

    it("has 2 arguments", function () {
        expect(Spy.length).toBe(2);
    });

    it("has count property", function () {
        expect(new Spy(console, 'error').count).toBeDefined();
    });

    it("count is zero upon initialization", function () {
        var spy = new Spy(console, 'error');
        expect(spy.count).toBe(0);
    });

    it("counts calls", function () {
        var spy = new Spy(console, 'error');
        console.error('test');
        expect(spy.count).toBe(1);
    });

    it("test call again", function () {
        var spy = new Spy(Math, 'pow');
        expect(Math.pow(2, 2)).toBe(4);
        expect(spy.count).toBe(1);
    });

    it("test call again", function () {
        var testObject = {
                addThreeParameters: function (x, y, z) {
                    return x + y + z;
                }
        }

        var spy = new Spy(testObject, 'addThreeParameters');
        expect(testObject.addThreeParameters(2, 2, 2)).toBe(6);
        expect(spy.count).toBe(1);
    });
});

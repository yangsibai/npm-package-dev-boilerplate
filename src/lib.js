;(function (global) {

    function Foo(a, b) {
        return a + b;
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Foo = Foo;
    } else {
        global.Foo = Foo;
    }
}(this));

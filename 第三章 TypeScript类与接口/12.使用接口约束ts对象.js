{
    var b = {
        name: 'baidu',
        // age: 123,
        info: function () {
            return "".concat(this.name, "-").concat(this.age, "}");
        }
    };
    console.log(b);
}

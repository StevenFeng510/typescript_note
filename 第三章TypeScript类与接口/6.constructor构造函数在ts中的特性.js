var User1 = /** @class */ (function () {
    // 加上public 可以结合声明name的步骤
    function User1(name) {
        this.name = name;
        this.name = this.initName(name);
    }
    User1.prototype.initName = function (name) {
        return "".concat(name, "-site");
    };
    return User1;
}());
var bh = new User1('Steven');
console.log(bh.name);

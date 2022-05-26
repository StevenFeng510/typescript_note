// 约束class的类型
{
    var User = /** @class */ (function () {
        function User(n, a) {
            this.name = n;
            this.age = a;
        }
        User.prototype.info = function () {
            return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age);
        };
        return User;
    }());
    var bh = new User('steven', 2);
    var bh1 = new User('steven', 222);
    // console.log(bh.info());
    // console.log(bh1.name);
    for (var key in bh1) {
        if (bh1.hasOwnProperty(key)) {
            console.log(bh1[key]);
        }
    }
}

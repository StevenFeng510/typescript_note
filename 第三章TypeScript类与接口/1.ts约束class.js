// 约束class的类型
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
console.log(bh.info());
var users = [];
users.push(bh);
console.log(users);

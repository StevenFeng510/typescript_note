var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 约束class的类型
{
    var Person1 = /** @class */ (function () {
        function Person1() {
            this.site = 'google.com';
        }
        Person1.prototype.info = function () {
            return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age, ",\u6765\u81EA\u4E8E").concat(this.site);
        };
        Person1.prototype.getInfo = function () {
            return this.info();
        };
        return Person1;
    }());
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        // public 表示属性公开 protected 表示属性保护 外部无法访问
        function User(n, a) {
            var _this = _super.call(this) || this;
            _this.name = n;
            _this.age = a;
            return _this;
        }
        User.prototype.show = function () {
            return this.info();
        };
        User.prototype.info = function () {
            return "".concat(this.name, "\u7684\u5E74\u9F84\u662F").concat(this.age, ",\u6765\u81EA\u4E8E").concat(this.site);
        };
        return User;
    }(Person1));
    var bh = new User('steven', 2);
    console.log(bh.show());
}

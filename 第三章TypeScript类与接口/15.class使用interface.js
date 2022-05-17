{
    var User = /** @class */ (function () {
        function User(user) {
            this._info = user;
        }
        Object.defineProperty(User.prototype, "info", {
            get: function () {
                return this._info;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var b = new User({ name: 'steven', age: 19 });
    console.log(b.info);
}

{
    var User = /** @class */ (function () {
        function User(_user) {
            this._user = _user;
        }
        User.prototype.get = function () {
            return this._user;
        };
        return User;
    }());
    var obj = new User({ name: 'baidu', age: 18 });
    console.log(obj);
}

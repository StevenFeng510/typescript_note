// readonly 表示只可读
{
    var Axios = /** @class */ (function () {
        function Axios(site) {
            this.site = 'baidu.com';
            this.site = site || this.site;
        }
        Axios.prototype.get = function (url) {
            console.log("\u8BF7\u6C42\u7684\u662F".concat(this.site, "/").concat(url));
            return [];
        };
        return Axios;
    }());
    var instance = new Axios('www.google.com');
    instance.get('users');
}

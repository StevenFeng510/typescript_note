{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
        }
        Axios.getSite = function () {
            return Axios.site;
        };
        //  静态属性 只能通过构造方法访问
        Axios.site = 'baidu.com';
        return Axios;
    }());
    var instance = new Axios_1();
    console.log(Axios_1.getSite());
}

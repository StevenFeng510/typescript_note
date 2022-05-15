{
    var Axios_1 = /** @class */ (function () {
        function Axios() {
            // console.log('构造函数');
        }
        // 将构造函数封装, 不用每次实例化都生成构造函数
        Axios.make = function () {
            if (Axios.instance == null) {
                console.log('创建axios实例');
                Axios.instance = new Axios();
            }
            return Axios.instance;
        };
        // 单例模式
        Axios.instance = null;
        return Axios;
    }());
    var instance = Axios_1.make();
    var instance2 = Axios_1.make();
    var instance3 = Axios_1.make();
    // console.log(instance);
}

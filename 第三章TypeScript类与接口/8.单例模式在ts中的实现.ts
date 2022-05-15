{
    class Axios {
        // 单例模式
        private static instance: Axios | null = null;
        private constructor() {
            // console.log('构造函数');
        }
        // 将构造函数封装, 不用每次实例化都生成构造函数
        static make(): Axios {
            if (Axios.instance == null) {
                console.log('创建axios实例');
                Axios.instance = new Axios();
            }
            return Axios.instance;
        }
    }

    const instance = Axios.make();
    const instance2 = Axios.make();
    const instance3 = Axios.make();
    // console.log(instance);
}

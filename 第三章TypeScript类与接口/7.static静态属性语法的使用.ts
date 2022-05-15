{
    class Axios {
        //  静态属性 只能通过构造方法访问
        static site: string = 'baidu.com';
        public static getSite(): string {
            return Axios.site;
        }
    }
    const instance = new Axios();
    console.log(Axios.getSite());
}

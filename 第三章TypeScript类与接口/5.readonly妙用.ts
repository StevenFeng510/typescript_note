// readonly 表示只可读
{
    class Axios {
        public readonly site: string = 'baidu.com';

        public constructor(site?: string) {
            this.site = site || this.site;
        }

        public get(url: string): any[] {
            console.log(`请求的是${this.site}/${url}`);
            return [];
        }
    }
    const instance = new Axios('www.google.com');
    instance.get('users');
}

// 约束class的类型
{
    class Person1 {
        public name: string;
        protected age: number;
        public site: string = 'google.com';
        public info(): string {
            return `${this.name}的年龄是${this.age},来自于${this.site}`;
        }
        private getInfo(): string {
            return this.info();
        }
    }
    class User extends Person1 {
        // public 表示属性公开 protected 表示属性保护 外部无法访问
        constructor(n: string, a: number) {
            super();
            this.name = n;
            this.age = a;
        }
        public show() {
            return this.info();
        }
        public info(): string {
            return `${this.name}的年龄是${this.age},来自于${this.site}`;
        }
    }

    const bh = new User('steven', 2);
    console.log(bh.show());
}

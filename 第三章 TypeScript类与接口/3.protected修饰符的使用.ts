// 约束class的类型
{
    class Person {
        protected name: string;
        public age: number;
        protected info(): string {
            return `${this.name}的年龄是${this.age}`;
        }
    }
    class User extends Person {
        // public 表示属性公开 protected 表示属性保护 外部无法访问

        constructor(n: string, a: number) {
            super();
            this.name = n;
            this.age = a;
        }
        public show() {
            return this.info();
        }
    }

    const bh = new User('steven', 2);
    console.log(bh.age);
}

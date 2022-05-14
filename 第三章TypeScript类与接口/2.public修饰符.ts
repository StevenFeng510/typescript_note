// 约束class的类型
{
    class User {
        // public 表示属性公开
        public name: string;
        public age: number;
        constructor(n: string, a: number) {
            this.name = n;
            this.age = a;
        }
        public info(): string {
            return `${this.name}的年龄是${this.age}`;
        }
    }

    const bh = new User('steven', 2);
    const bh1 = new User('steven', 222);

    // console.log(bh.info());
    // console.log(bh1.name);
    for (const key in bh1) {
        if (bh1.hasOwnProperty(key)) {
            console.log(bh1[key]);
        }
    }
}

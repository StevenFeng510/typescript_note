{
    // 接口约束ts对象 对象中一定要包含name age info()
    interface UserInterface {
        name: string;
        age?: number;
        info(): string;
        [key: string]: any;
    }
    let b: UserInterface = {
        name: 'baidu',
        // age: 123,
        info() {
            return `${this.name}-${this.age}}`;
        },
    };
    console.log(b);
}

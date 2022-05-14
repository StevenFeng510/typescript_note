// 约束class的类型
class User {
    name: string;
    age: number;
    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }
    info(): string {
        return `${this.name}的年龄是${this.age}`;
    }
}

const bh = new User('steven', 2);

console.log(bh.info());

const users: User[] = [];
users.push(bh);
console.log(users);

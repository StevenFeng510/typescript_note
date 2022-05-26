{
    // 接口合并
    interface User {
        name: string;
    }
    interface User {
        age: number;
    }
    const b: User = {
        name: 'steven',
        age: 20,
    };

    class Person implements User {
        age: number = 23;
        name: string = 'baidu';
    }

    // type 不允许定义同名来合并
    type User1 = {
        name: string;
    };

    type User2 = {
        age: number;
    };

    // 手动合并
    type People = User1 & User2;

    const t: People = {
        name: 'steven',
        age: 20,
    };

    // type 可以将 type 和 interface合并

    type P = User1 & User;
    const a: P = {
        name: 'yu',
        age: 18,
    };
}

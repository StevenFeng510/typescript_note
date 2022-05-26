{
    type IsAdmin = boolean;
    type Sex = 'boy' | 'girl';

    type User = {
        name: string;
        age: number;
        isAdmin: IsAdmin;
        sex: Sex;
        show(): string;
        [key: string]: any; // 任意类型
    };

    // interface User {
    //     name: string;
    //     age: number;
    //     show(): string;
    // }

    const b: User = {
        name: 'STeven',
        age: 23,
        isAdmin: true,
        sex: 'girl',
        show: () => 'baidu',
        city: '北京',
    };

    console.log(b);
}

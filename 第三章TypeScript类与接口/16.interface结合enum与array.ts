{
    // 结合枚举
    enum SexType {
        BOY,
        GRIL,
    }

    // 接口在class中的应用
    interface UserInterface {
        name: string;
        age: number;
        sex: SexType;
    }

    const user: UserInterface = {
        name: 'Steven',
        age: 18,
        sex: SexType.GRIL,
    };

    const user2: UserInterface = {
        name: 'junb',
        age: 11,
        sex: SexType.BOY,
    };

    const users: UserInterface[] = [user, user2];
    console.log(users);
}

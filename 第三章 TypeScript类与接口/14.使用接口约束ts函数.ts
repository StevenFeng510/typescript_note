{
    // 接口约束函数
    interface UserInterface {
        name: string;
        age: number;
        isLock: boolean;
    }

    const user: UserInterface = {
        name: 'Steven',
        age: 18,
        isLock: false,
    };

    function isLock1(user: UserInterface, lock: boolean): UserInterface {
        user.isLock = lock;
        return user;
    }

    isLock1(user, true);
}

{
    // 接口在class中的应用
    interface UserInterface {
        name: string;
        age: number;
    }

    class User {
        _info: UserInterface;
        constructor(user: UserInterface) {
            this._info = user;
        }
        get info(): UserInterface {
            return this._info;
        }
    }

    const b = new User({ name: 'steven', age: 19 });
    console.log(b.info);
}

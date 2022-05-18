{
    class User<T> {
        public constructor(private _user: T) {}
        public get(): T {
            return this._user;
        }
    }

    interface UserInterface {
        name: string;
        age: number;
    }

    const obj = new User<UserInterface>({ name: 'baidu', age: 18 });
    console.log(obj);
}

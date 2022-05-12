// 相当于结构体??
type useType = { name: string; age: number; sex?: string | number };
// 函数返回值修饰
let addUser = (user: useType): void => {
    console.log('添加用户');
};

addUser({ name: 'baidu', age: 18 });

// 函数返回值修饰
let updateUser = (user: useType): void => {
    console.log('更新用户');
};

updateUser({ name: 'google', age: 25, sex: '1' });

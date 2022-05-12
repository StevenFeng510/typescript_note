// 函数结构定义
// let func: (a: number, b: number) => number;
// func = (x: number, y: number): number => {
//     return x + y;
// };

// console.log(func(1, 1));

type useType = { name: string; age: number };

// 定义函数结构
type userAddFun = (user: useType) => boolean;

let addUser: userAddFun = (user: useType): boolean => {
    console.log('添加用户');
    return true;
};

// addUser = (u: useType): boolean => {
//     return true;
// };

addUser({ name: 'google', age: 12 });

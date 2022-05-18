// 泛型
let a: string = 'baiduciom';

console.log(a);

// 使用泛型  类型作为参数传递
function dump<T>(arg: T): T {
    return arg;
}

let b = dump<string>('google');

let abc = dump<boolean>(true);

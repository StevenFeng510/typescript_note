// 剩余参数用...接收在限定类型
// function sum(...args: number[]): number {
//     return args.reduce((s, n) => s + n, 0);
// }

// console.log(sum(1, 2, 3, 4, 5));

function push(arr: any[], ...args: any[]): any[] {
    arr.push(...args);
    return arr;
}

let b = ['bug'];

console.log(push(b, 'baidu', '123'));

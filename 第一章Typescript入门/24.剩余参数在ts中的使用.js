// 剩余参数用...接收在限定类型
// function sum(...args: number[]): number {
//     return args.reduce((s, n) => s + n, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));
function push(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    arr.push.apply(arr, args);
    return arr;
}
var b = ['bug'];
console.log(push(b, 'baidu', '123'));

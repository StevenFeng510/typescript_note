function ti() {
    var a = 'baidu.com';
    var b = function (x, y) { return x + y; };
    // 在返回值的时候断言 得到元组
    return [a, b];
}
var _a = ti(), n = _a[0], m = _a[1];
// const [n, m] = ti() as [string, (x: number, y: number) => number];
// as断言
console.log(m(1, 18));
console.log(m(12, 10));

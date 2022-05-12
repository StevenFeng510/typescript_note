// 函数返回值修饰
function sum(a, b) {
    return "\u7ED3\u679C:".concat(a + b);
}
console.log(sum(1, 3));
function msg() {
    console.log('baidu');
}
var sum1 = function (a, b) {
    return "\u7ED3\u679C:".concat(a + b);
};
console.log(sum1(1, 5));

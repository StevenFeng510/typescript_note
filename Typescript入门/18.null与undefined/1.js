var hd = undefined;
hd = null;
console.log(hd);
//void 用于指定没有明确返回值的 返回值仅限null 和 undefined
function run() {
    return 'baidu';
}
console.log(run());
// never 完全没有值返回 比如 抛出异常
function miss() {
    throw new Error('错误');
}
miss();

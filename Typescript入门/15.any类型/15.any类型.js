"use strict";
// let b: any[] = [];
// b.push('baidu.com', 23, null, {});
// console.log(b);
// let b: Array<any> = [];
// b.push('baidu.com', 23, null, {});
// console.log(b);
// 开启 noImplicitAny 选项 不允许使用any类型
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2));

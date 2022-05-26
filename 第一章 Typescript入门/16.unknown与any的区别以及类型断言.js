var a = 'baidu.com';
var b = a;
console.log(a);
var hd = 'google';
// as 类型断言
var c = hd;
// any 是任何类型 unknown 是不知道什么类型 unknown赋值会报错
var d = '123';
// 借用unknown 转换 值类型
var abc = d;
console.log(typeof abc);

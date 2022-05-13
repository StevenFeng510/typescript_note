var a = 'google.com'; // 宽泛类型
var b1 = 1233;
// <const>  as const 同一种效果
var st = [a, b1];
var f = st[1];
f = 99;
console.log(f);

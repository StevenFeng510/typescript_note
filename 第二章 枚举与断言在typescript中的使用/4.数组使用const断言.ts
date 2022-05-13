let a = 'google.com'; // 宽泛类型
let b1 = 1233;
// <const>  as const 同一种效果
let st = <const>[a, b1];
let f = st[1];
f = 99;
console.log(f);

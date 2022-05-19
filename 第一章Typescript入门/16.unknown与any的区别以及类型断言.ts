let a: any = 'baidu.com';

let b: string = a;

console.log(a);

let hd: unknown = 'google';
// as 类型断言
let c: string = hd as string;

// any 是任何类型 unknown 是不知道什么类型 unknown赋值会报错

let d: string = '123';
// 借用unknown 转换 值类型
let abc: number = d as unknown as number;

console.log(typeof abc);

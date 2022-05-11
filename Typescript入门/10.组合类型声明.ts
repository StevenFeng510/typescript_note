let b: string | number;
b = 'google.com';

b = 18;
console.log(b);

let b1: (string | number | boolean)[];
b1 = [1, 2, 3, 'shu'];
console.log(b1);

// 泛型
let hd: Array<string | number | object>;
hd = ['google.com', 'baidu'];
console.log(hd);

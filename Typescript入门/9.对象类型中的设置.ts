let b: object;

b = [];
b = {};

// ?表示0或1 可以有值也可以没有
let person: { name: string; age: number; url?: string };
person = { name: 'baidu', age: 18, url: 'google.com' };
console.log(person);

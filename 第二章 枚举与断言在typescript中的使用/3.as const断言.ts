let a = 'google.com'; // 宽泛类型

const c = 'abc'; // 值类型

// let b: 'steven' = '123';

let b = 77 as const; // 断言为const 不能更改

// b = 'steven';

// as const 会转换为元组 (只读)
const arr = [a, b, 99, 'steven.com', true] as const;

const obj = {
    name: b,
} as const;

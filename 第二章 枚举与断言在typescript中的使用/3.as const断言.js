var a = 'google.com'; // 宽泛类型
var c = 'abc'; // 值类型
// let b: 'steven' = '123';
var b = 77; // 断言为const 不能更改
// b = 'steven';
// as const 会转换为元组 (只读)
var arr = [a, b, 99, 'steven.com', true];
var obj = {
    name: b
};

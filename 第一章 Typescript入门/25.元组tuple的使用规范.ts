// tuple 限制数组里面位置与类型必须对应, 否则编译失败
// let arr: (string | number | boolean)[] = ['baidu', 2030, false];
// arr[0] = true;
// console.log(arr);

let tuple: [string, number, boolean] = ['baidu', 2030, false];
tuple[0] = true;
console.log(tuple);

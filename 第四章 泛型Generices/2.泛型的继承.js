// 泛型中的继承 T动态接受类型
// 相当于 type T = {length:number}
// type array = { length: number; shift(): number }
// T约束参数类型
/* function getLength<T extends string | any[]>(arg: T): number {
    return arg.length;
} */
// T约束数组中参数的类型
function getLength(arg) {
    return arg.length;
}
// console.log(getLength('google.com'));
console.log(getLength(['steven', 'hui']));
// console.log(getLength(18));

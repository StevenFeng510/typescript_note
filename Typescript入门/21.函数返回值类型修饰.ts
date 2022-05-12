// 函数返回值修饰
function sum(a: number, b: number): string {
    return `结果:${a + b}`;
}
console.log(sum(1, 3));

function msg(): void {
    console.log('baidu');
}

let sum1 = (a: number, b: number): string => {
    return `结果:${a + b}`;
};

console.log(sum1(1, 5));

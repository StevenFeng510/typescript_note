function ti() {
    let a = 'baidu.com';
    let b = (x: number, y: number): number => x + y;
    // 在返回值的时候断言 得到元组
    return [a, b] as const;
}

const [n, m] = ti();
// const [n, m] = ti() as [string, (x: number, y: number) => number];
// as断言
console.log((m as Function)(1, 18));
console.log(m(12, 10));

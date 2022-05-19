// ? 表示可选参数
function sum(a: number, b: number, radio?: number) {
    radio = radio || 0.6;
    return (a + b) * radio;
}

console.log(sum(1, 3, 4));

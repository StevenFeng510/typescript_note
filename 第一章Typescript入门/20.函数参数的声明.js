// ? 表示可选参数
function sum(a, b, radio) {
    radio = radio || 0.6;
    return (a + b) * radio;
}
console.log(sum(1, 3, 4));

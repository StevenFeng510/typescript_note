function test(arg: boolean): string | number {
    return arg ? 'wojiugan' : 2030;
}

let res = test(false) as string;
res = '123';
console.log(typeof res);

{
    var hu = 'baidu';
    // 开启 "strictNullChecks": true,   严格检查赋值为null的语句
    hu = undefined;
    // const el: HTMLDivElement = document.querySelector('.st') as HTMLDivElement;
    // ! 表示非空断言 没有null值
    var el = document.querySelector('.st');
    console.log(el.innerHTML);
}

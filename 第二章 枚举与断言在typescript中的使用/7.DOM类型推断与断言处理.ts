// Dom 类型推断
let body = document.querySelector('body') as HTMLBodyElement;
let div = document.querySelector('.st') as HTMLDivElement;
let div1 = document.querySelector('.st')!;

console.log(div.innerHTML);

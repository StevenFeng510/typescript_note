// Dom 类型推断
// let body = document.querySelector('body') as HTMLBodyElement;
// let div = document.querySelector('.st') as HTMLDivElement;

// let aLink = document.querySelector('#bh') as HTMLLinkElement;

// console.log(aLink.href);

class huiyu {
    el: HTMLDivElement;
    constructor(el: HTMLDivElement) {
        this.el = el;
    }
    html() {
        return this.el.innerHTML;
    }
}

// 强制断言 实例化的时候输入的值也要类型匹配
const el = document.querySelector('.ji') as HTMLDivElement;
new huiyu(el);

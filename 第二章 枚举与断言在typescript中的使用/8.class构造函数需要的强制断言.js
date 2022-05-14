// Dom 类型推断
// let body = document.querySelector('body') as HTMLBodyElement;
// let div = document.querySelector('.st') as HTMLDivElement;
// let aLink = document.querySelector('#bh') as HTMLLinkElement;
// console.log(aLink.href);
var huiyu = /** @class */ (function () {
    function huiyu(el) {
        this.el = el;
    }
    huiyu.prototype.html = function () {
        return this.el.innerHTML;
    };
    return huiyu;
}());
// 强制断言 实例化的时候输入的值也要类型匹配
var el = document.querySelector('.ji');
new huiyu(el);

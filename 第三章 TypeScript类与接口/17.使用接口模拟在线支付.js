{
    var AliPay_1 = /** @class */ (function () {
        function AliPay() {
        }
        AliPay.prototype.handle = function (price) {
            console.log("\u652F\u4ED8\u5B9D\u4ED8\u6B3E".concat(price, "\u5143"));
        };
        return AliPay;
    }());
    var WePay_1 = /** @class */ (function () {
        function WePay() {
        }
        WePay.prototype.handle = function (price) {
            console.log("\u5FAE\u4FE1\u4ED8\u6B3E".concat(price, "\u5143"));
        };
        return WePay;
    }());
    function payTest(type, price) {
        var pay;
        switch (type) {
            case 'alipay':
                pay = new AliPay_1();
                break;
            case 'wepay':
                pay = new WePay_1();
                break;
        }
        pay.handle(price);
    }
}

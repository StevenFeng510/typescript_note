// 没使用泛型
/* class CollectionNumber {
    data: number[] = [];
    public push(...items: number[]) {
        this.data.push(...items);
    }

    public shift(): number {
        return this.data.shift();
    }
}

const numberCollection = new CollectionNumber();
numberCollection.push(1, 2, 3, 4, 5);

console.log(numberCollection.shift()); */
// 使用泛型
var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.push = function () {
        var _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, items);
    };
    Collection.prototype.shift = function () {
        return this.data.shift();
    };
    return Collection;
}());
var user = { name: 'steven', age: 13 };
var collections = new Collection();
collections.push(user);
// collections.push(1, 2, 3, 4, 5);
console.log(collections.shift());

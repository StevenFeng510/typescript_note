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
class Collection<T> {
    data: T[] = [];
    public push(...items: T[]) {
        this.data.push(...items);
    }

    public shift(): T {
        return this.data.shift();
    }
}
type User = { name: string; age: number };
const user: User = { name: 'steven', age: 13 };

const collections = new Collection<User>();
collections.push(user);
// collections.push(1, 2, 3, 4, 5);
console.log(collections.shift());

class User1 {
    // 加上public 可以结合声明name的步骤
    constructor(public name: string) {
        this.name = this.initName(name);
    }
    private initName(name: string) {
        return `${name}-site`;
    }
}

const bh = new User1('Steven');
console.log(bh.name);

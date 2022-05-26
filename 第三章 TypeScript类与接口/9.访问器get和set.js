{
    // class User {
    //     public _name: string;
    //     constructor(n: string) {
    //         this._name = n;
    //     }
    //     public get name(): string {
    //         return this._name;
    //     }
    //     public set name(name: string) {
    //         this._name = name;
    //     }
    // }
    // const bh = new User('steven');
    // bh.name = 'baidu';
    // console.log(bh.name);
    var Article = /** @class */ (function () {
        function Article() {
            this._lists = [];
        }
        Object.defineProperty(Article.prototype, "articles", {
            get: function () {
                return this._lists.map(function (article) {
                    article.title = article.title.substr(0, 2);
                    return article;
                });
            },
            set: function (lists) {
                this._lists = lists;
            },
            enumerable: false,
            configurable: true
        });
        return Article;
    }());
    var bh = new Article();
    bh.articles = [{ title: 'Steven' }, { title: 'google' }];
    console.log(bh.articles);
}

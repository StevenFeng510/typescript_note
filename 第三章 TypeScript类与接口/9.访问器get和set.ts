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

    class Article {
        private _lists: any[] = [];
        public get articles(): any[] {
            return this._lists.map((article) => {
                article.title = article.title.substr(0, 2);
                return article;
            });
        }
        public set articles(lists: any[]) {
            this._lists = lists;
        }
    }

    const bh = new Article();
    bh.articles = [{ title: 'Steven' }, { title: 'google' }];
    console.log(bh.articles);
}

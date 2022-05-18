{
    interface ArticleInterface<B, C> {
        title: string;
        isLock: B;
        comments: C[];
    }

    type CommentType = {
        content: string;
        author?: string;
    };

    const b: ArticleInterface<Boolean, CommentType> = {
        title: 'ts',
        isLock: true,
        comments: [{ content: 'pinglun', author: 'baidu' }],
    };
}

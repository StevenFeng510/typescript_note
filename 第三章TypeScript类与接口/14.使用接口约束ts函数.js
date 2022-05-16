{
    var user = {
        name: 'Steven',
        age: 18,
        isLock: false
    };
    function isLock1(user, lock) {
        user.isLock = lock;
        return user;
    }
    isLock1(user, true);
}

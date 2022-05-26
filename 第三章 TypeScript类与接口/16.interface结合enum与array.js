{
    // 结合枚举
    var SexType = void 0;
    (function (SexType) {
        SexType[SexType["BOY"] = 0] = "BOY";
        SexType[SexType["GRIL"] = 1] = "GRIL";
    })(SexType || (SexType = {}));
    var user = {
        name: 'Steven',
        age: 18,
        sex: SexType.GRIL
    };
    var user2 = {
        name: 'junb',
        age: 11,
        sex: SexType.BOY
    };
    var users = [user, user2];
    console.log(users);
}

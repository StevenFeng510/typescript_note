var user = {
    name: 'baidu',
    age: 13,
    open: true,
    lesson: [
        {
            title: 'linux'
        },
        {
            title: 'ts'
        },
    ]
};
user.age = 30;
user.lesson.push({ title: 'css' });
console.log(user);

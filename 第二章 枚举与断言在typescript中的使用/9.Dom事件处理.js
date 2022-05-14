var bt = document.querySelector('#bt');
bt.addEventListener('click', function (e) {
    e.preventDefault();
    var body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<h2>STeven欢迎</h2>');
});

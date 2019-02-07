window.addEventListener('load', () => {
    new Vue({
        el: '#app',
        data: {
            message: 'Hello World!',
           // message: '<h1>Hello World!</h1>',
            isLoggedIn: true,
            username: 'Aytach'
        }
    });
});
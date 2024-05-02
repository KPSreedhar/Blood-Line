document.addEventListener('DOMContentLoaded', function() {
    var homeLink = document.getElementById('home');
    var donateLink = document.getElementById('donate');
    var needLink = document.getElementById('need');
    var registerForm = document.querySelector('.register-form');
    var needForm = document.querySelector('.need-blood-form');
    var signInButton = document.getElementById('signin');
    var signInForm = document.querySelector('.signin-form');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.remove('show');
        needForm.classList.remove('show');
    });

    donateLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.add('show');
        needForm.classList.remove('show');
    });

    needLink.addEventListener('click', function(event) {
        event.preventDefault();
        registerForm.classList.remove('show');
        needForm.classList.add('show');
    });

    signInButton.addEventListener('click', function() {
        signInForm.classList.toggle('show');
    });
});

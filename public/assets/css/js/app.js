var modalElement = document.querySelector('.modal');

// Navbar btn
var registerNavBarBtn = document.getElementById('header__navber-btn-register');
var loginNavBarBtn = document.getElementById('header__nav-btn-login');


//Form Đăng ký & Đăng nhập
var registerElement = document.getElementById('auth-form-register');
var loginElement = document.getElementById('auth-fomr-login');

//Btn trong form Đăng Kí 
var registerBtnBack = document.getElementById('auth-form__register-back');
var registerBtnRegister = document.getElementById('auth-form__controls-register');
var registerBtnLogin = document.getElementById('auth-form__header-btn-login');


//Btn tỏng form Đăng nhập
var loginBtnBack = document.getElementById('auth-form__login-back');
var loginBtnRegister = document.getElementById('auth-form__header-btn-register');
var loginBtnLogin = document.getElementById('auth-form__controls-login');



//Form Đăng nhập
loginNavBarBtn.onclick = function() {
    modalElement.style = ' /*display: none;*/';
    loginElement.style = ' /*display: none;*/';
}

loginBtnBack.onclick = function() {
    modalElement.style = ' display: none;';
    loginElement.style = ' display: none;';
}

loginBtnRegister.onclick = function() {
    registerElement.style = ' /*display: none;*/';
    loginElement.style = ' display: none;';
}

loginBtnLogin.onclick = function() {
    alert('Hệ thống chỉ mới xây dựng Front-End tới đây thôi!');
}


//Form Đăng ký
registerNavBarBtn.onclick = function() {
    modalElement.style = ' /*display: none;*/';
    registerElement.style = ' /*display: none;*/';
}

registerBtnBack.onclick = function() {
    modalElement.style = ' display: none;';
    registerElement.style = ' display: none;';
}

registerBtnRegister.onclick = function() {
    alert('Hệ thống chỉ mới xây dựng Front-End tới đây thôi!');
}

registerBtnLogin.onclick = function() {
    registerElement.style = ' display: none;';
    loginElement.style = ' /*display: none;*/';
}




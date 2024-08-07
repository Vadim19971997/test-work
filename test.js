
const cancelBtns = document.querySelectorAll('.cancelbtn');
const authorization1 = document.querySelector('.authorization');
const registration1 = document.querySelector('.registration');
const accountLinks = document.querySelectorAll('.account__link');
const alertMessage = document.querySelector('.alert');
const regBtn = document.querySelector('.registration button');

const password = document.querySelector('.psw');
const recovery = document.querySelector('.recovery');


cancelBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        authorization1.classList.add('none');
        registration1.classList.add('block');
        recovery.classList.remove('block');
    });
})

accountLinks.forEach((link) => {
    link.addEventListener('click', () => {
        authorization1.classList.remove('none');
        registration1.classList.remove('block');
        recovery.classList.remove('block');
    });
});

document.querySelector('.alert-close').addEventListener('click', function(){
  alertMessage.classList.remove('active');
});

password.addEventListener('click', () => {
    authorization1.classList.add('none');
    recovery.classList.add('block');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
  // button.classList.add('loading');
  e.preventDefault();
  showMessage('Форма успешно отправлена!');
  // button.classList.remove('loading');
});

document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementsByClassName('form-alert')[0].textContent = '';
  var form = document.getElementById('register-form');
  var new_pwd = form.getElementsByClassName('account__input-password-1');
  var repeat_pwd = form.getElementsByClassName('account__input-password-2');

  if ( new_pwd[0].value != repeat_pwd[0].value ) {
    document.getElementsByClassName('form-alert')[0].textContent = 'Пароли не совпадают!';
    return;
  }
  
  showMessage('Форма успешно отправлена!');
});

document.getElementById('recovery-form').addEventListener('submit', (e) => {
  e.preventDefault();
  showMessage('Форма успешно отправлена!');
});

function showMessage( message ) {
  alertMessage.classList.add('active');
  alertMessage.querySelector('span').textContent = message;
}










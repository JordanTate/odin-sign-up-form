const passwordInput = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');

passwordConfirm.addEventListener('input', () => {
        if (passwordConfirm.value !== passwordInput.value){
            passwordInput.classList.add('error')
            passwordConfirm.classList.add('error');
        } else {
            passwordInput.classList.remove('error')
            passwordConfirm.classList.remove('error');
        }
});

const signUpButton = document.querySelector('#sign-up-btn');

signUpButton.addEventListener('click', () => {
    if (passwordConfirm.classList.contains('error')){
        alert('Passwords do not match');
    } 
});
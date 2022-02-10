const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const errorMessage = document.getElementById('error');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInput();
    
});

function checkInput(){
    if(password.value !== confirmPassword.value){
        errorMessage.innerHTML = "*Password don't match!"
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }
    else{
        errorMessage.innerHTML="";
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
    }
}
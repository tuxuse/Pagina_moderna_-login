const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// Botão "Registrar-se"
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

// Botão "Login"
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});
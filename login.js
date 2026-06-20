//Ambil elemen div utama yg nampung form login& register
const container = document.querySelector('.container');

//Ambil tombol "Register" / "Sing up"
const registerBtn = document.querySelector('.register-btn');

//Ketika tombol Register di klik maka yg muncul adalah form Register
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  container.classList.add('active');
});

//ketika tombol Login di klik maka yg muncul adalah form Login
loginBtn.addEventListener('click', () => {
  container.classList.remove('active');
});
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
// import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
// import { doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';
import { onNavigate } from '../main.js';
import {
  LoginByEmailPassword,
  createAccountByGoogle,
} from '../Firebase/auth.js';
import { createElements } from '../util.js';
import { PasswordInput } from './PasswordInput.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.id = 'login-wrapper';
  loginDiv.className = 'view-wrappers';

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.id = 'go-landing-button';
  goLandingButton.className = 'back-button';

  goLandingButton.innerHTML = `
    <i class="fa-solid fa-circle-left go-back-icon"></i>
  `;

  goLandingButton.addEventListener('click', () => onNavigate('/'));

  loginDiv.appendChild(goLandingButton);

  // logo and image

  const [
    logo,
    mainImg,
    textLogin,
  ] = createElements('img', 'img', 'h2');

  logo.src = 'imagenes/logo.png';
  logo.id = 'login-logo';
  logo.className = 'logo';

  mainImg.src = 'imagenes/login-img.png';
  mainImg.id = 'login-img';

  textLogin.textContent = 'Ingresar';
  textLogin.id = 'login-h2';

  loginDiv.append(logo, mainImg, textLogin);

  const [
    inputContainer,
    mailInput,
    loginButton,
  ] = createElements(
    'form',
    'input',
    'button',
  );

  inputContainer.id = 'form-login';

  mailInput.type = 'email';
  mailInput.id = 'mail-input';
  mailInput.className = 'inputs-style';
  mailInput.type = 'email';
  mailInput.placeholder = 'Correo electrónico';

  // Validacion de correo con regex
  mailInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    // Function that performs regex validation should go here
    if (!inputValue.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g)) {
      alert('Correo inválido - Verifica tu dirección de correo');
    }
  });

  const passwordInput = PasswordInput({
    placeholder: 'Contraseña',
    id: 'password-input',
  });

  loginButton.textContent = 'Iniciar sesion';
  loginButton.id = 'login-btn';
  loginButton.className = 'submit-buttons';

  inputContainer.append(
    mailInput,
    passwordInput,
    loginButton,
  );

  loginDiv.appendChild(inputContainer);

  // Intento de ingresar con correo y contraseña
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const password = passwordInput.querySelector('input');
    const userId = LoginByEmailPassword(mailInput.value, password.value);
    console.log(userId);
    // sessionStorage.setItem('uid', userId.uid);
    // onNavigate('/Feed');
  });

  const [
    lineContainer,
    line1,
    orParagraph,
    line2,
  ] = createElements('div', 'div', 'p', 'div');

  lineContainer.id = 'line-container';

  line1.className = 'solid-line';
  line1.id = 'line1';

  orParagraph.id = 'line-p';
  orParagraph.textContent = 'O';

  line2.className = 'solid-line';

  lineContainer.append(line1, orParagraph, line2);
  loginDiv.appendChild(lineContainer);

  // container botones ingreso, botones
  const [
    loginButtons,
    gmailLogin,
  ] = createElements('div', 'button');

  loginButtons.id = 'login-btn-container';

  // via gmail
  gmailLogin.id = 'gmail-login';
  gmailLogin.className = 'button-gmail';
  gmailLogin.textContent = 'Ingresar con Gmail';

  gmailLogin.addEventListener('click', () => {
    createAccountByGoogle();
  });

  // add botones al container, container a div global
  loginButtons.appendChild(gmailLogin);
  loginDiv.appendChild(loginButtons);

  // No tienes cuenta
  const [
    container2,
    resetPassword,
    noAccount,
    noAccountRegister,
  ] = createElements('div', 'a', 'p', 'a');

  container2.id = 'container2';

  resetPassword.textContent = '¿Olvidaste tu contraseña?';
  resetPassword.href = '/ForgotPasword';
  resetPassword.id = 'a-reset-password';

  noAccount.textContent = '¿No tienes cuenta?';
  noAccount.id = 'p-no-account';

  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  noAccountRegister.id = 'no-acc-register';

  container2.append(resetPassword, noAccount, noAccountRegister);
  loginDiv.appendChild(container2);

  return loginDiv;
};

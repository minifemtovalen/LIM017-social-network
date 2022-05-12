/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { CreateAccount, createAccountByGoogle } from '../Firebase/auth.js';
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';
import { store } from '../Firebase/firestore.js';
import { PasswordInput } from './PasswordInput.js';

// registro
export const SignUp = () => {
  const registerDiv = document.createElement('div');
  registerDiv.id = 'register-wrapper';
  registerDiv.className = 'view-wrappers';

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.id = 'go-landing-button1';
  goLandingButton.className = 'back-button';
  goLandingButton.innerHTML = `
    <i class="fa-solid fa-circle-left go-back-icon"></i>
    `;

  goLandingButton.addEventListener('click', () => onNavigate('/'));

  registerDiv.appendChild(goLandingButton);

  const [logo, mainImg, registerH2] = createElements('img', 'img', 'h2');

  logo.src = 'imagenes/logo.png';
  logo.id = 'register-logo';
  logo.className = 'logo';

  mainImg.src = 'imagenes/register-img.png';
  mainImg.id = 'register-img';

  registerH2.textContent = 'Registrarse';
  registerH2.id = 'register-h2';

  registerDiv.append(logo, mainImg, registerH2);

  const [inputContainer, registerEmail, submitBtn] = createElements(
    'form',
    'input',
    'button',
  );

  inputContainer.id = 'form-register';

  registerEmail.id = 'register-email';
  registerEmail.className = 'inputs-style';
  registerEmail.type = 'email';

  registerEmail.placeholder = 'Correo electrónico';

  // Validacion de correo con regex
  registerEmail.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    // Function that performs regex validation should go here
    if (!inputValue.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/g)) {
      alert('Correo inválido - Verifica tu dirección de correo');
    }
  });

  const registerPassword = PasswordInput({
    placeholder: 'Ingresa tu contraseña',
    id: 'register-password',
  });

  const confirmPassword = PasswordInput({
    placeholder: 'Confirma tu contraseña',
    id: 'confirm-password',
  });

  submitBtn.textContent = 'Crear cuenta';
  submitBtn.id = 'submit-btn';
  submitBtn.className = 'submit-buttons';

  inputContainer.append(
    registerEmail,
    registerPassword,
    confirmPassword,
    submitBtn,
  );
  registerDiv.appendChild(inputContainer);

  // Evento de registrar al usuario
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const password = registerPassword.querySelector('input');
    const password1 = confirmPassword.querySelector('input');
    if (password.value === password1.value) {
      store({ email: registerEmail.value }, 'users');
      CreateAccount(registerEmail.value, password.value);

      window.location.href = '/Login';
    } else {
      alert('Las contraseñas no coinciden');
    }
  });

  // Linea y contenedor OR
  const [lineContainer, line3, orParagraph, line4] = createElements(
    'div',
    'div',
    'p',
    'div',
  );

  lineContainer.id = 'line-container1';

  line3.className = 'solid-line';
  line3.id = 'line3';

  orParagraph.id = 'line-p1';
  orParagraph.textContent = 'O';

  line4.className = 'solid-line';

  lineContainer.append(line3, orParagraph, line4);
  registerDiv.appendChild(lineContainer);

  // container botones registro
  const [signUpButtons, gmailSignUp] = createElements('div', 'button');

  signUpButtons.id = 'register-btn-container';

  // via gmail
  gmailSignUp.id = 'gmail-signup';
  gmailSignUp.className = 'button-gmail';
  gmailSignUp.textContent = 'Registrarse con Gmail';

  gmailSignUp.addEventListener('click', () => {
    createAccountByGoogle();

    // setTimeout(2000, window.location.href = '/Feed');
  });

  // add botones al container, container a div global
  signUpButtons.appendChild(gmailSignUp);
  registerDiv.appendChild(signUpButtons);

  // Already have and account
  const [container, yesAccount, betterLogin] = createElements('div', 'p', 'a');

  container.id = 'container';

  yesAccount.textContent = '¿Ya tienes cuenta?';
  yesAccount.id = 'p-yes-account';

  betterLogin.textContent = 'Ingresa';
  betterLogin.href = '/Login';
  betterLogin.id = 'better-login';

  container.append(yesAccount, betterLogin);
  registerDiv.appendChild(container);

  return registerDiv;
};

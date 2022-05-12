/* eslint-disable import/no-cycle */
import { createElements } from '../util.js';
import { onNavigate } from '../main.js';

export const ResetPassword = () => {
  const recoveryDiv = document.createElement('div');
  recoveryDiv.id = 'recovery-wrapper';
  recoveryDiv.className = 'view-wrappers';

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.id = 'go-landing-button2';
  goLandingButton.className = 'back-button';
  goLandingButton.innerHTML = `
    <i class="fa-solid fa-circle-left go-back-icon"></i>
  `;

  goLandingButton.addEventListener('click', () => onNavigate('/'));

  recoveryDiv.appendChild(goLandingButton);

  const [
    petsImg,
    passRecoveryH2,
    passRecoveryH4,
  ] = createElements(
    'img',
    'h2',
    'h4',
  );

  petsImg.src = 'imagenes/forgot-img.png';
  petsImg.id = 'reset-pass-img';

  passRecoveryH2.textContent = '¿Olvidaste tu contraseña?';
  passRecoveryH2.id = 'recovery-h2';

  passRecoveryH4.textContent = 'Ingresa tu correo electrónico para recuperar tu contraseña';
  passRecoveryH4.id = 'recovery-h4';

  recoveryDiv.append(petsImg, passRecoveryH2, passRecoveryH4);

  const [
    inputContainer,
    recoveryInput,
    passwordRecoveryBtn,
  ] = createElements(
    'form',
    'input',
    'button',
  );

  inputContainer.id = 'form-reset';

  recoveryInput.type = 'email';
  recoveryInput.id = 'recovery-pass-input';
  recoveryInput.className = 'inputs-style';
  recoveryInput.placeholder = 'Correo electrónico';

  passwordRecoveryBtn.textContent = 'Enviar';
  passwordRecoveryBtn.id = 'reset-btn';
  passwordRecoveryBtn.className = 'submit-buttons';

  inputContainer.append(
    recoveryInput,
    passwordRecoveryBtn,
  );

  recoveryDiv.appendChild(inputContainer);

  // Validacion de correo con regex
  recoveryInput.addEventListener('blur', (event) => {
    const inputValue = event.target.value;

    // Function that performs regex validation should go here
    if (!inputValue.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g)) {
      alert('Correo inválido - Verifica tu dirección de correo');
    }
  });

  return recoveryDiv;
};

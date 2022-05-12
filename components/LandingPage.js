/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

export const LandingView = () => {
  const landingDiv = document.createElement('div');
  landingDiv.id = 'landing-div-global';

  const imgLogo = `
    <img id="landing-logo" src="imagenes/logo.png" alt="">
    <img class="img-bienvenida" src="imagenes/landing-img.png" alt="">
  `;

  landingDiv.insertAdjacentHTML('beforeend', imgLogo);

  // Botones de acceso
  const [
    containerLandingBtn,
    buttonRegister,
    buttonLogin,
  ] = createElements('div', 'button', 'button');

  containerLandingBtn.className = 'btn-container';

  buttonRegister.id = 'btn-register';
  buttonRegister.className = 'btns-landing';
  buttonRegister.textContent = 'Regístrate';

  buttonRegister.addEventListener('click', () => onNavigate('/Register'));

  buttonLogin.id = 'btn-login';
  buttonLogin.className = 'btns-landing';
  buttonLogin.textContent = 'Ingresa';

  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  containerLandingBtn.append(buttonRegister, buttonLogin);
  landingDiv.appendChild(containerLandingBtn);

  return landingDiv;
};

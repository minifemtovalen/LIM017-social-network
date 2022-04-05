/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { createElements } from '../util.js';

export const LandingView = () => {
  const landingDiv = document.createElement('div');
  landingDiv.setAttribute('class', 'landing-Div');
  const imagenLogo = `
      <img class="logo" src="imagenes/DuckyPets.png" alt="">
      <img class="imgBienvenida" src="imagenes/married-couple-with-dog.jpg" alt="">
      `;
  landingDiv.insertAdjacentHTML('beforeend', imagenLogo);

  // Botones de acceso
  const [buttonRegister, buttonLogin] = createElements('button', 'button');
  buttonRegister.setAttribute('id', 'btnRegister');
  buttonRegister.textContent = 'Registrate';
  buttonRegister.addEventListener('click', () => onNavigate('/Register'));

  buttonLogin.setAttribute('id', 'btnLogin');
  buttonLogin.textContent = 'Iniciar Sesion';
  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  landingDiv.append(buttonRegister, buttonLogin);

  return landingDiv;
};

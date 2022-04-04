/* eslint-disable import/no-cycle */
import { signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';
import { onNavigate } from '../main.js';
import { auth, provider } from '../Firebase/init.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  const logo = document.createElement('img');
  logo.src = 'imagenes/DuckyPets.png';
  const textLogin = document.createElement('h2');
  textLogin.textContent = 'Iniciar Sesion';
  loginDiv.append(logo, textLogin);

  // container botones ingreso
  const loginButtons = document.createElement('div');

  // via gmail
  const gmailLogin = document.createElement('button');
  gmailLogin.setAttribute('id', 'gmail-login');
  gmailLogin.textContent = 'Ingresar con Gmail';
  gmailLogin.addEventListener('click', () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log('Me loggie');

        // const token = credential.accessToken;
        // // The signed-in user info.
        // const user = result.user;
        // // ...
      }); // catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  });

  // via facebook
  const fbLogin = document.createElement('button');
  fbLogin.setAttribute('id', 'fb-login');
  fbLogin.textContent = 'Ingresar con Facebook';

  // via correo
  const mailLogin = document.createElement('button');
  mailLogin.setAttribute('id', 'mail-login');
  mailLogin.textContent = 'Ingresar con correo';
  mailLogin.addEventListener('click', () => onNavigate('/MainLogin'));

  // add botones al container, container a div global
  loginButtons.append(gmailLogin, fbLogin, mailLogin);
  loginDiv.appendChild(loginButtons);

  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = '¿Olvidaste tu contraseña?';
  forgotPassword.href = '/ForgotPasword';
  loginDiv.appendChild(forgotPassword);

  // No tienes cuenta
  const noAccount = document.createElement('p');
  noAccount.textContent = '¿No tienes cuenta?';
  const noAccountRegister = document.createElement('a');
  noAccountRegister.textContent = 'Registrate';
  noAccountRegister.href = '/Register';
  loginDiv.append(noAccount, noAccountRegister);

  // Boton de regresar a la bienvenida
  const goLandingButton = document.createElement('button');
  goLandingButton.textContent = 'Regresar al inicio';

  goLandingButton.addEventListener('click', () => onNavigate('/'));
  loginDiv.appendChild(goLandingButton);

  return loginDiv;
};

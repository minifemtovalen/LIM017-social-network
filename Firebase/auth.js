import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from './Firebase-util.js';

import { app, firestore } from './init.js';

export const auth = getAuth(app);

// ---------Creación de cuenta con Gmail auth--------------

export const provider = new GoogleAuthProvider();
auth.languageCode = 'es';

export const createAccountByGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log(token);
      const user = result.user;
      sessionStorage.setItem('username', user.reloadUserInfo.displayName);
      sessionStorage.setItem('uid', user.uid);
      window.location.href = '/Feed';
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      console.log(errorCode);
      const errorMessage = error.message;

      // The email of the user's account used.
      const email = error.email;
      console.log(email);
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(credential);
    // ...
    });
};

// -------------Crear cuenta con correo Email--------------------

export const CreateAccount = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in

      // window.location.href = '/Feed';
      // console.log(user.email);
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
};

// ---------------Ingresar con correo y contraseña--------

export const LoginByEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      sessionStorage.setItem('uid', user.uid);
      sessionStorage.setItem('username', user.email);
      window.location.href = '/Feed';

    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // console.log(errorCode);
      const errorMessage = error.message;

      // console.log(errorMessage);
      /* const paragraphErrorLogin = document.querySelector('#errorLogin');

      if (errorCode === 'auth/user-not-found') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = 'Usuario no registrado';
      } else if (errorCode === 'auth/wrong-password') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = 'Contraseña inválida.';
      } else if (errorCode === 'auth/internal-error') {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = '';
      } else if (errorCode === true) {
        paragraphErrorLogin.classList.add('showParagraphError');
        paragraphErrorLogin.innerText = errorMessage;

      }
      */
    });
};

// ----------Send Email------------------------------------------------
export const sendEmailVerification1 = () => sendEmailVerification(auth.currentUser);

export const logOut = () => {
  signOut(auth).then(() => {
    // console.log('cerraste sesión');
    // Sign-out successful.
  }).catch((error) => {
    // const callAlertParagraph = document.querySelector('#error');
    if (error === true) {
      // callAlertParagraph.textContent = 'Error al cerrar sesión';
    }
    // An error happened.
  });
};

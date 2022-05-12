/* eslint-disable import/no-unresolved */
import
{ initializeApp }
  from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';

import {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  sendEmailVerification,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js';

import {
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js';

export { initializeApp };

export {
  getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  sendEmailVerification,
};

export {
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  collection,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
};

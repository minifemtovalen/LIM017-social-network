import {
  createAccountByGoogle,
  CreateAccount, /*
  signInWithPopup,
  LoginByEmailPassword, */
} from '../../src/Firebase/auth';
import { signInWithEmailAndPassword } from '../../src/Firebase/Firebase-util';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Autenticar', () => {
  it('debería ser una funciónn que crea cuenta con google', () => {
    expect(typeof createAccountByGoogle).toBe('function');
  });
  it('debería crear una cuenta con email', () => {
    expect(typeof CreateAccount).toBe('function');
  });
});

describe('', () => {
  it('Muestra un mensaje de error', () => {
    const signUpInWithEmailAndPassword = jest.fn();
    signUpInWithEmailAndPassword.mockRejectedValue({ error: 'password/mismatch' });
  });
});


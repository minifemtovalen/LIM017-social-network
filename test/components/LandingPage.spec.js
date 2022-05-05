import { LandingView } from '../../src/components/LandingPage.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Prueba para el landing page', () => {
  it('deberia cargar el landing', () => {
    const pruebaDeLanding = LandingView();
    const registerButton = pruebaDeLanding.querySelector('#btn-register');
    expect(registerButton.innerHTML).toBe('Regístrate');
  });
});

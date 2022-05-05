import { ResetPassword } from '../../src/components/ForgotPassword.js';

jest.mock('../../src/Firebase/Firebase-util.js');

describe('Test on Forgot Password Module', () => {
  it('should create a div ', () => {
    const testForgotP = ResetPassword();
    const btnReset = testForgotP.querySelector('#reset-btn');
    expect(btnReset.className).toBe('submit-buttons');
  });
});

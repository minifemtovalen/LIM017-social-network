/* eslint-disable import/no-cycle */
import { LandingView } from './LandingPage.js';
import { SignUp } from './Register.js';
import { Login } from './Login.js';
import { ResetPassword } from './ForgotPassword.js';
import { Feed } from './Feed.js';

const routes = {
  '/': LandingView,
  '/Register': SignUp,
  '/Login': Login,
  '/ForgotPasword': ResetPassword,
  '/Feed': Feed,
};

export { routes };

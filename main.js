/* eslint-disable import/no-cycle */
import { routes } from './components/Router.js';

export const onNavigate = (pathname) => {
  const rootDiv = document.getElementById('root');
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.addEventListener('DOMContentLoaded', () => {
  const rootDiv = document.getElementById('root');
  const component = routes[window.location.pathname];
  window.onpopstate = () => {
    rootDiv.appendChild(component());
  };
  rootDiv.appendChild(component());
});

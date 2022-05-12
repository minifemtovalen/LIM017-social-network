import { createElements } from '../util.js';

export function PasswordInput(atts) {
  const [
    inputContainer,
    passwordInput,
    eyeContainer,
  ] = createElements('div', 'input', 'div');

  inputContainer.className = 'password-container';

  eyeContainer.id = 'eye-container';

  passwordInput.placeholder = atts.placeholder;
  passwordInput.id = atts.id;
  passwordInput.type = 'password';

  const eyes = `
    <i class="fa-solid fa-eye" id="show-password"></i>
  `;

  inputContainer.append(passwordInput, eyeContainer);
  eyeContainer.insertAdjacentHTML('beforeend', eyes);
  eyeContainer.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeContainer.innerHTML = `
        <i class="fa-solid fa-eye-slash" id="hide-password"></i>
      `;
    } else {
      passwordInput.type = 'password';
      eyeContainer.innerHTML = `
      <i class="fa-solid fa-eye" id="show-password"></i>
    `;
    }
  });
  return inputContainer;
}

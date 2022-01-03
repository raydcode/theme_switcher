import * as variables from './variables.js';

export const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  variables.toggleText.textContent = 'Light';
  localStorage.setItem('darkMode', 'dark');
};

export const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  variables.toggleText.textContent = 'Dark';
  localStorage.setItem('darkMode', null);
};

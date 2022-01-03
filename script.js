import * as variables from './utils/variables.js';
import * as fun from './utils/functions.js';

let darkMode = localStorage.getItem('darkMode');

if (darkMode === 'dark') {
  fun.enableDarkMode();
}

variables.toggleDarkMode.addEventListener('click', () => {
  let theme = localStorage.getItem('darkMode');

  if (theme !== 'dark') {
    fun.enableDarkMode();
  } else {
    fun.disableDarkMode();
  }
});

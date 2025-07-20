'use strict';

const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

/**
 * Theme toggle
 */
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode'); 
})
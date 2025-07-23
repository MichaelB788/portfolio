'use strict';

// theme toggle variables
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

/**
 * Theme toggle
 */
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('light-mode'); 
})

/**
 * Clock
 */

// FIX: timeString assumes the locale string will be five characters long, however this is not the case with 
// times of the form 0H:MM
function updateClock() {
  const currentTime = Temporal.Now.plainTimeISO();
  const timeString = currentTime.toLocaleString().slice(0, 5);
  document.getElementById("clock").textContent = timeString;

  // This improves accuracy by having updateClock() correct itself each time it is called
  const msUntilNextSecond = 1000 - currentTime.millisecond;
  setTimeout(updateClock, msUntilNextSecond);
}

updateClock();
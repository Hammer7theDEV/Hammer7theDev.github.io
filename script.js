"use strict";
const qForeground = document.querySelector("#foreground");
const colors = ["color-red", "color-green", "color-blue", "color-yellow", "color-orange", "color-pink", "color-black", "color-white"];

function pickColorAtRandom() {
  const newColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Remove previous colors
  if (/color-/.test(qForeground.className)) {
    const oldClass = qForeground.className.match(/color-\w+/);
    qForeground.classList.remove(oldClass);
  }
  qForeground.classList.add(newColor);
}

setInterval(pickColorAtRandom, 200);

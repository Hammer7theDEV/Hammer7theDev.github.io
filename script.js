(function() {
  "use strict";
  var qForeground = document.querySelector("#foreground");
  var colors = ["color-red", "color-green", "color-blue", "color-yellow", "color-orange", "color-pink", "color-black", "color-white"];

  function pickColorAtRandom() {
    var newColor = colors[Math.floor(Math.random() * colors.length)];

    // Remove previous colors
    if (/color-/.test(qForeground.className)) {
      var oldClass = qForeground.className.match(/color-\w+/);
      qForeground.classList.remove(oldClass);
    }
    qForeground.classList.add(newColor);
  }

  setInterval(pickColorAtRandom, 200);
}());

window.onload = function() {
    document.getElementById("moosick").play();
}

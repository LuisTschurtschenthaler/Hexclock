const clock = document.getElementById("clock");
const background = document.getElementById("background");

function format(input) {
  if (input <= 9) return "0" + input;
  return input;
}

function getTime() {
  let date = new Date();
  let hours = format(date.getHours());
  let minutes = format(date.getMinutes());
  let seconds = format(date.getSeconds());

  let color = "#" + hours + minutes + seconds;

  clock.innerHTML = color;
  background.style.backgroundColor = color;
}

setInterval(getTime, 1);

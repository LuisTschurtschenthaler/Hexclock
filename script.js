const clock = document.getElementById("clock");
const hexclock = document.getElementById("hexclock");
const background = document.getElementById("background");

function format(input) {
  if (input <= 9) return "0" + input;
  return input;
}

function updateTime() {
  let date = new Date();
  let hours = format(date.getHours());
  let minutes = format(date.getMinutes());
  let seconds = format(date.getSeconds());

  let color = "#" + hours + minutes + seconds;

  clock.innerHTML = hours + " : " + minutes + " : " + seconds;
  hexclock.innerHTML = color;
  document.body.bgColor = color;
}

setInterval(updateTime, 1000);

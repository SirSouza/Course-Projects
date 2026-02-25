const digital = document.querySelector(".digital");
const secPointer = document.querySelector(".p_s");
const minPointer = document.querySelector(".p_m");
const hourPointer = document.querySelector(".p_h");

function updateClock() {
  const now = new Date();

  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  // Digital
  digital.textContent = `${fixZero(hour)}:${fixZero(minutes)}:${fixZero(seconds)}`;

  // Analógico
  let secDeg = (360 / 60) * seconds - 90;
  let minDeg = (360 / 60) * minutes - 90;
  let hourDeg = (360 / 12) * hour - 90;
  secPointer.style.transform = `rotate(${secDeg}deg)`;
  minPointer.style.transform = `rotate(${minDeg}deg)`;
  hourPointer.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(updateClock, 1000);

function fixZero(time) {
  return time < 10 ? `0${time}` : time;
}
updateClock();

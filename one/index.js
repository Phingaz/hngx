const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();

const dayElement = document.getElementById("day");
dayElement.innerText = weekday[d.getDay()];

const timeElement = document.getElementById("time");

setInterval(() => {
  const d = Date.now();
  timeElement.innerText = d;
}, 1000);

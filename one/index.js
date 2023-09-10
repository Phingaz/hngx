const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = new Date().getUTCDay();
const dayElement = document.querySelector(
  '[ data-testid="currentDayOfTheWeek"]'
); 

dayElement.innerText = weekday[day];

const timeElement = document.querySelector('[ data-testid="currentUTCTime"]');

setInterval(() => {
  const d = Date.now();
  timeElement.innerText = d;
}, 1);

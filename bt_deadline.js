const calendar = [
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
];

function calcDeadline(manday, calendar) {
  for (let i = 0; i < calendar.length; i++) {
    if (!calendar[i]) {
      manday--;
      if (manday === 0) {
        return i + 1;
      }
    }
  }
  return false;
}

console.log(calcDeadline(7, calendar));

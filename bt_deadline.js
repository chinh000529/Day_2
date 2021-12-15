const calendar1 = [
  false, // tương đương với ngày 0
  false, // tương đương với ngày 1
  true, // tương đương với ngày 2
  true, // tương đương với ngày 3
  false, // tương đương với ngày 4
  false, // tương đương với ngày 5
  true, // tương đương với ngày 6
  false, // tương đương với ngày 7
];

function calcDeadline(manday, calendar) {
  const arr = calendar.filter((c) => {
    if (c === true) return c;
  });
  return manday + arr.length;
}

console.log(calcDeadline(5, calendar1));

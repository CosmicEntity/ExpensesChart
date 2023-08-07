const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");

const mon_expense = document.getElementById("expense-mon");
const tue_expense = document.getElementById("expense-tue");
const wed_expense = document.getElementById("expense-wed");
const thu_expense = document.getElementById("expense-thu");
const fri_expense = document.getElementById("expense-fri");
const sat_expense = document.getElementById("expense-sat");
const sun_expense = document.getElementById("expense-sun");

const total = document.getElementById("total");

let max = -Infinity;
let days = new Array(mon, tue, wed, thu, fri, sat, sun);
let expense = new Array(
  mon_expense,
  tue_expense,
  wed_expense,
  thu_expense,
  fri_expense,
  sat_expense,
  sun_expense
);
let expenditure = new Array(
  parseInt(mon.dataset.value),
  parseInt(tue.dataset.value),
  parseInt(wed.dataset.value),
  parseInt(thu.dataset.value),
  parseInt(fri.dataset.value),
  parseInt(sat.dataset.value),
  parseInt(sun.dataset.value)
);
let sum = 0;
for (let i = 0; i < 7; i++) {
  if (expenditure[i] > max) max = expenditure[i];
  sum += expenditure[i];
}

for (let i = 0; i < 7; i++) {
  days[i].style.height = `${(days[i].dataset.value / max) * 70}%`;
}

for (let i = 0; i < 7; i++) {
  expense[i].innerText = `$${expenditure[i]}`;
  days[i].addEventListener("mouseover", () => {
    expense[i].style.opacity = "1";
  });
  days[i].addEventListener("mouseleave", () => {
    expense[i].style.opacity = "0";
  });
}

total.innerText = `$${sum}`;

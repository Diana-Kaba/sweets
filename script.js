"use strict";
let count = prompt("Сколько у Вас есть конфет в коробке?");
let n = count / 2;
while (count > 0) {
  let q = confirm("Еще конфету?");
  if (q) {
    count--;
    alert("Была съедена еще одна конфета.");
  } else {
    break;
  }
  if (q > n) {
    alert("Конфет еще много.");
  } else if (q < n && q > 3) {
    alert("Конфет маловато...");
  } else if (q < n && q < 3) {
    alert("Конфеты заканчиваются!");
  }
  if (count == 0) {
    alert("Пора покупать другую коробку…");
  }
}

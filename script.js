"use strict";
let count = prompt("Сколько у Вас есть конфет в коробке?");
while (count > 0) {
  count--;
  let q = confirm("Еще конфету?");
  if (q == true) {
    count--;
    alert("Была съедена еще одна конфета.");
  } else {
    break;
  }
  if (count === 0) {
    alert("Пора покупать другую коробку…");
  }
}
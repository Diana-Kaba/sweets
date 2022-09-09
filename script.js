"use strict";
let count = prompt('Сколько у Вас есть конфет?');
while() {
    count--;
    let q = confirm('Еще конфету?');
    if(q == true) {
        count--;
    } else {
        break;
    }
}
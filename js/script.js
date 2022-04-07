'use strict'


const input = document.querySelector('.input');
const button = document.querySelector('.button');
const total = document.querySelector('.total');

function init(num) {

  let arr = num.split('-');

  let preFinal = '';

  for (let i = arr[0]; i <= arr[1]; i++) {

    preFinal += i + ';';

  }

  let final = preFinal.substring(0, preFinal.length - 1);

  return total.textContent = final;

}

button.addEventListener('click', () => {
  init(input.value);
});
'use strict'

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const divka = document.querySelector('.div');

function numMaker(numbers) {

  let arr = numbers.split(' ');

  let obj = Object.assign({}, arr);

  for (let key in obj) {

    init(obj[key]);

  }

}

function init(num) {

  let arr = num.split('-');

  let preFinal = '';

  for (let i = arr[0]; i <= arr[1]; i++) {

    preFinal += i + ';';

  }

  let final = preFinal.substring(0, preFinal.length - 1);

  adder(final);

}

function adder(final) {

  let p = document.createElement('p');
  p.className = 'total';
  p.innerHTML = final;

  divka.append(p);
}

button.addEventListener('click', () => {

  while (divka.firstChild) {
    divka.removeChild(divka.firstChild);
  }

  numMaker(input.value);

})
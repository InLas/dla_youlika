'use strict'

window.onload = function () {
  document.addEventListener('click', documentActions);

  const DIVKA = document.querySelector('.content__div');

  function documentActions(e) {
    const TARGET_ELEMENT = e.target;

    if (TARGET_ELEMENT.classList.contains('content__button')) {
      while (DIVKA.firstChild) {
        DIVKA.removeChild(DIVKA.firstChild);
      }

      const INPUT = document.querySelector('.content__input');

      if (INPUT.value === '') {
        return adderError('Введено не корректное значение!');
      }

      dividerNums(INPUT.value);
    }
  }

  let dividerNums = (years) => {
    const INPUT_YEARS = years.split(' ');

    INPUT_YEARS.map((currentYear) => {
      checkIsNumber(currentYear)
    });
  }

  let checkIsNumber = (currentYear) => {
    const CURRENT_YEARS = currentYear.split('-');

    let nan = CURRENT_YEARS.every((value) => {
      return !isNaN(value);
    });

    if (CURRENT_YEARS.length <= 1 || CURRENT_YEARS.length > 2 || nan === false) {
      return adderError('Введено не корректное значение! проверка');
    }

    initNumbers(CURRENT_YEARS);
  };

  let initNumbers = (num) => {
    let preFinal = '';

    for (let i = num[0]; i <= num[1]; i++) {
      preFinal += i + ';';
    }

    const FINAL = preFinal.substring(0, preFinal.length - 1);

    adder(FINAL);
  }

  let adder = (final) => {
    const CREATE_CONTENT = document.createElement('p');
    CREATE_CONTENT.className = 'content__total';
    CREATE_CONTENT.innerHTML = final;
    DIVKA.append(CREATE_CONTENT);
  }

  let adderError = (value) => {
    const CREATE_CONTENT = document.createElement('p');
    CREATE_CONTENT.className = 'content__total--error';
    CREATE_CONTENT.innerHTML = value;
    DIVKA.append(CREATE_CONTENT);
  }
}
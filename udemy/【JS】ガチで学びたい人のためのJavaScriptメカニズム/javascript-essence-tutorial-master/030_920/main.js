function calcFactory(num) {
  let result;
  function plus(value) {
    result = num + value;
    console.log(`${num} + ${value} = ${result}`);
    num = result;
  }
  function minus(value) {
    result = num - value;
    console.log(`${num} - ${value} = ${result}`);
    num = result;
  }
  function multiply(value) {
    result = num * value;
    console.log(`${num} * ${value} = ${result}`);
    num = result;
  }
  function divide(value) {
    result = num / value;
    console.log(`${num} / ${value} = ${result}`);
    num = result;
  }

  return {
    plus,
    minus,
    multiply,
    divide,
  };
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

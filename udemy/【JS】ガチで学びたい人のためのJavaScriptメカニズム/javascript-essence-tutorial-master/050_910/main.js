const person = {
  hello: function () {
    return "hello Tom";
  },
};

setTimeout(() => console.log(person.hello()), 1000);

/** */

setTimeout(() => alert(person.hello()), 1000);

/** */

function calcFactory(val, callback) {
  return {
    plus: function (target) {
      const newVal = val + target;
      callback(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
    minus: function (target) {
      const newVal = val - target;
      callback(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function (target) {
      const newVal = val + target;
      callback(`${val} * ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function (target) {
      const newVal = val / target;
      callback(`${val} / ${target} = ${newVal}`);
      val = newVal;
    },
  };
}

const calc = calcFactory(10, alert);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

function calcFactory(val, callback) {
  function calcFactoryDelay1s(str) {
    setTimeout(callback.bind(null, str), 1000);
  }

  return {
    plus: function (target) {
      const newVal = val + target;
      calcFactoryDelay1s(`${val} + ${target} = ${newVal}`);
      val = newVal;
    },
    minus: function (target) {
      const newVal = val - target;
      calcFactoryDelay1s(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function (target) {
      const newVal = val + target;
      calcFactoryDelay1s(`${val} * ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function (target) {
      const newVal = val / target;
      calcFactoryDelay1s(`${val} / ${target} = ${newVal}`);
      val = newVal;
    },
  };
}

const calc = calcFactory(10, console.log);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

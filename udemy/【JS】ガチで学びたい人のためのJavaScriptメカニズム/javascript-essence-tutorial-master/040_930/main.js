let obj = {
  prop1: 10,
};

function minus(obj, val) {
  obj.prop1 = obj.prop1 - val;
}

minus(obj, 1);
console.log(obj.prop1);

/**** */

function double(obj) {
  obj.prop1 = obj.prop1 * 2;
}

double(obj);
console.log(obj.prop1);

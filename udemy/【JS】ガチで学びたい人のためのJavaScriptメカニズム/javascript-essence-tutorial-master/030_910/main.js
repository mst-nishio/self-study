function fn() {
  let a;
  if (true) {
    a = "fn called";
  }
  return a;
}

const result = fn();
console.log(result);

/*** */
console.log("-------------");
/*** */

var val = "val1";

function fn2() {
  console.log(val);

  if (true) {
    let val = "val2";
    console.log(val);
  }
  console.log(val);
}
fn2();

/*** */
console.log("-------------");
/*** */

{
  let num = 0;
  function increment() {
    num++;
    console.log(num);
  }
}

increment();
increment();
increment();
increment();

function incrementFactory() {
  let num = 0;

  function increment() {
    num++;
    console.log(num);
  }
  return increment;
}

const increment = incrementFactory();

increment();
increment();
increment();
increment();

let a = 0;

function fn(num) {
  if (num === undefined || num === null) {
    num = -1;
  }
  console.log(num);
}

fn(a);

/****** */

function greeting(name, greet) {
  name = name || "Tom";
  greet = greet || "hello";

  console.log(`${greet},${name}`);
}

greeting("Bob", "hi");
greeting("Bob");
greeting();

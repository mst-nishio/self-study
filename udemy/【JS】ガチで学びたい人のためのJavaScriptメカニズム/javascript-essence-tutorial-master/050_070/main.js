function a(name) {
  console.log(`hello ${name}`);
}

const tim = { name: "Tim" };

const b = a.bind(tim);

b();

a.apply(tim, ["Tim"]);
a.call(tim, "Tim");

const arry = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);

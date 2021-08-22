export {};

const function1 = (): number => 43;

let numberAny: any = function1();
let numberUnknown: unknown = function1();

let sumAny = numberAny + 10;
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}

export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = "Atsushi";
  static lastName: string = "Ishida";

  static work() {
    return `Hey, guys! This is ${this.firstName} Are you interested in  TypeScript? Let's dive into TypeScript!`;
  }
}

// let me = new Me();
// console.log(me.isProgramer);
console.log(Me.isProgramer);
console.log(Me.work());

const person = {
  name: "Tom",
  bye() {
    console.log(`Bye ${this.name}`);
  },
  hello: function (greeting) {
    console.log(`${greeting} ${this.name}`);
    return `${greeting} ${this.name}`;
  },

  hello1s() {
    // setTimeout(this.hello.bind(this, "hello"), 1000);
    // setTimeout(() => {
    //   this.hello("hello");
    // }, 1000);
    const _this = this;
    setTimeout(function () {
      _this.hello("hello");
    }, 1000);
  },
};

person.hello1s();
/** */

// setTimeout(person.hello.bind(person, "hello"), 1000);

/** */

// alert(person.hello("hello"), 1000);

/** */
// setTimeout(person.bye.bind(person), 1000);

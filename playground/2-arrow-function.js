/**
 * arrow functions explained
 */

// const square = function(x) {
//   return x * x;
// };

// console.log(square(3));

// const square = x => {
//   return x * x;
// };

// console.log(x)
// const square = (x) => x * x;
// console.log(square(2));

const event = {
  name: "Birthday Party ",
  printGuestList() {
    console.log("Guest list for " + this.name);
  }
};

event.printGuestList();

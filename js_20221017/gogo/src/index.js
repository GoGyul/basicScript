import Teacher, { fuc1 } from "./teacher";

/*

*/

let n = "name";
let a = "age";

const user = {
  [n]: "change",
  [a]: 444,
};
console.log(user);

const makeObj = (n, n1) => {
  return {
    [n]: n1,
  };
};

const te = makeObj("key", "value");
console.log(te);

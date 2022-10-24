// forEach

let arr = ["Mike", "Tom", "John"];

arr.forEach((name, index, a) => {
  console.log(` ${index} 번째 이름은 ${name} `);
});

/*
    find , findIndex
*/

let arr2 = [1, 2, 3, 4, 5];

const result = arr2.find((item) => {
  return item % 2 === 0;
});
// 짝수만 찾아서 반환 찾으면 반환후 끝
console.log(result);

// 객체배열
let userList = [
  { name: "베인", age: 30 },
  { name: "티모", age: 10 },
  { name: "블리츠", age: 15 },
];

const result2 = userList.findIndex((user) => {
  if (user.age < 19) {
    return user;
  }
});
// 마찬가지로 한건만 반환.
console.log(result2);

/*
    filter
 */

let idk = [
  { sleep: "yes", goSleep: "good", count: 10 },
  { sleep: "very", goSleep: "nice", count: 5 },
  { sleep: "long", goSleep: "notbed", count: 9 },
];

// 조건에 맞는 애들 반환
const result3 = idk.filter((item) => {
  if (item.count > 5) {
    return item;
  }
});
console.log(idk);
console.log(result3);

/*
    map 
    함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
*/
let train = [
  { name: "1호선", fast: 100 },
  { name: "2호선", fast: 70 },
  { name: "3호선", fast: 40 },
];

let newTrainList = train.map((train, index) => {
  // isFast 프로퍼티를 추가해서 새로운 배열을 반환
  return Object.assign({}, train, {
    id: index + 1,
    isFast: train.fast >= 90,
  });
});
console.log(train);
console.log(newTrainList);

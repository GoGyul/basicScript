/*
    
    arr.reduce()
    인수로 함수를 받음
    (누적 계산값, 현재값) => { return 계산값 }

 */

// 배열수 합치기

let arr = [1, 2, 3, 4, 5];

// 일반적인 방법
let result = 0;
arr.forEach((num) => {
  result += num;
});
console.log(result);

// reduce (누적 계산값, 현재값)
let result2 = arr.reduce((prev, cur) => {
  return prev + cur;
  //초기값 설정 가능
}, 0);
console.log(result2);

// 객체배열
let userList = [
  { name: "Mike", age: 22 },
  { name: "Mike1", age: 25 },
  { name: "Mike2", age: 10 },
  { name: "Mike3", age: 30 },
  { name: "Mike4", age: 14 },
  { name: "Mike5", age: 25 },
  { name: "Mike6", age: 18 },
  { name: "Mike7", age: 3 },
];

let result3 = userList.reduce((prev, cur) => {
  // 현재값에서 age가 19 보다 크다면
  if (cur.age > 19) {
    //  prev (빈배열[]) 에 현재값의 이름을 저장한뒤
    prev.push(cur.name);
  }
  //    리턴
  return prev;
  //    초기값은 빈 배열로 선언한다.
}, []);
console.log(result3);

/*
    property key : 문자형

 */
const obj = {
  1: "1입니다.",
  false: "거짓",
};
console.log(obj);

/*
    key 만 오브젝트로 바꿔옴
*/

let obs = Object.keys(obj);
console.log(obs);

/*
    <<<<<Symbol>>>>>

    new 를 붙이지 않는다 
    유일한 식별자 ,  const 키워드를 사용한다.
*/

const sym = Symbol();

/*
    유일성 보장
*/

const id = Symbol("id");

// 객체
const user = {
  name: "MIKE",
  age: 30,
  [id]: "myid", // 컴퓨티드 프로퍼티 key
};

// 객체에 심볼형 넣어서 작업
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user.job = "doctor";
// doctor는 검출되지만
// 심볼 객체는 for in 문에서 검출되지 않는다. (숨겨져있다.)
for (let k in user) {
  console.log(`HI ${k} is ${user[k]}`);
}
user[showName]();

/*
    Key가 심볼형이 프로퍼티는 건너뛴다.
*/

let symbolObj = Object.keys(user);
console.log(symbolObj);

/*
    Symbol.for() : 전역 심볼

    @ 하나의 심볼만 보장받을수 있음
    @ 없으면 만들고, 있으면 가져오기 때문
    @ Symbol 함수는 매번 다른 Symbol 값을 생성하지만
        Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
 */

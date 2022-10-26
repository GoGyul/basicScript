/**
 *
 *  배열 구조 분해 할당
 *
 */

let users = ["mike", "tom", "john"];
let [user1, user2, user3] = users;
/*
    let usert1 = users[0];
    let usert2 = users[1];
    let usert3 = users[2];
    같은 의미
 */

let [a1, b1, c1] = [1, 2];
/*
    c 는  undefined가 된다.
*/

let [a2 = 3, b2 = 4, c2 = 5] = [1, 2];
/*
    기본 값을 할당할수 있다.
*/
console.log(c2);

/*
    객체 구조 분해
    순서 상관없음 프로퍼티의 키만 동일하면 되는듯
    기본값을 부여할수 있다. (undefined 일때만) / gender = "M"
*/
let user = { name: "mike", age: 30 };
let { age, name, gender = "M" } = user;
/*
    let name = user.name;
    let age = user.age;
    와 같은 코드임
*/
console.log(name);
console.log(age);
console.log(gender);

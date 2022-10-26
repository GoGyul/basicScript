/*
    <배열메서드 part2>
    
    arr.sort()
    
    배열 재정렬
    배열자체가 변경되니 주의
    인수로 정렬 로직을 담은 함수를 받음
 */

let intArr = [1, 5, 4, 2, 3];
intArr.sort();
console.log(intArr);

let strArr = ["b", "h", "c", "t", "a"];
strArr.sort();
console.log(strArr);

/*
    이거 정렬 해보면 이상함. sort함수에 
    메서드를 전달해야함.
*/
function fn(a, b) {
  return a - b;
}
let intArr2 = [27, 8, 5, 13];
/* 
    방법 1 

    intArr2.sort(fn); 

    함수를 전달
*/
// 화살표 함수 사용
intArr2.sort((a, b) => {
  return a - b;
});
console.log(intArr2);

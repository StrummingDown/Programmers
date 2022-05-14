// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42746

// 문제를 제대로 안읽어서 삽질한 코드 ...
// function solution(numbers) {
//   let one = [];
//   let two = [];
//   let three = [];
//   let four = [];

//   for (let i of numbers) {
//     switch (String(i).length) {
//       case 1:
//         one.push(i);
//         break;
//       case 2:
//         two.push(i);
//         break;
//       case 3:
//         three.push(i);
//         break;
//       case 4:
//         four.push(i);
//         break;
//     }
//   }
//   one.sort((a, b) => b - a);
//   two.sort((a, b) => b - a);
//   three.sort((a, b) => b - a);
//   let limit = Math.max(one.length, two.length, three.length);

//   var answer = "";
//   return answer;
// }

// 다른이의 풀이를 참고한 코드
function solution(numbers) {
  // 모든 number들을 string으로 바꿔주고 문자열을 그대로 연결한 수(b+a) - 바꿔 연결한 수(a+b)가 양수이면
  // ex) b(3) + a(30) - a(30) + b(3) => 330 - 303 = 양수
  // 3 30 순서를 그대로 유지한다.

  let temp = numbers
    .map((a) => String(a))
    .sort((a, b) => {
      return b + a - (a + b);
    });

  // 모든 숫자가 0인 경우 000 이 나오지 않게 0을 출력
  if (temp.every((a) => a === "0")) {
    return "0";
  } else {
    return temp.join("");
  }
}

console.log(solution([3, 30, 34, 5, 9]));

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

function solution(numbers) {
  var answer = "";
  return answer;
}
console.log(solution([3, 30, 34, 5, 9]));

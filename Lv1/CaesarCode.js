// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12926

// z에서 n만큼 이동했을때 다시 a(알파벳 문자열 처음)으로 가는걸 충분히 생각하지 않고 작성한 코드..
// function solution(s, n) {
//   var answer = "";
//   let alpha = "abcdefghijklmnopqrstuvwxyz";
//   let alpha_1 = alpha.toUpperCase();
//   console.log(alpha_1);
//   for (let idx = 0; idx < s.length; idx++) {
//     if (s[idx] === " ") {
//       answer += s[idx];
//     } else {
//       let change = alpha.indexOf(s[idx]) + n;
//       let change_1 = alpha_1.indexOf(s[idx]) + n;

//       if (change !== 0) {
//         console.log("소문자");
//         answer += alpha[change];
//       } else if (change_1 !== 0) {
//         console.log("대문자");
//         answer += alpha_1[change_1];
//       }
//     }
//   }
//   return answer;
// }

// z를 넘어서는 인덱스를 접근하는 방법을 인지하고 나서 다시 작성한 코드

function solution(s, n) {
  var answer = ""; // 정답을 담아줄 문자열
  let lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자 알파벳
  let upper = lower.toUpperCase(); // 대문자 알파벳

  for (let idx = 0; idx < s.length; idx++) {
    // 입력받은 문자열 순회
    let sequence = s[idx]; // 현재 순회중인 알파벳 할당
    if (sequence === " ") {
      // 공백이라면,
      answer += " "; // 공백 그대로 정답에 더하기
    } else {
      // 공백이 아니라면,
      let check = lower.includes(sequence) ? lower : upper; // 소문자인지 대문자인지 판별
      let index = check.indexOf(sequence) + n; // n만큼 이동한 인덱스 구하기
      if (index >= 26) {
        // 알파벳의 총 갯수(26) Z 이상의 인덱스라먼,
        index -= 26; // 인덱스에서 알파벳 총 갯수를 빼준다.
      }
      answer += check[index]; // 정답 문자열에 위에서 구한 인덱스의 알파벳 더해주기
    }
  }
  return answer; // 정답 문자열 리턴
}
console.log(solution("a B z", 1));

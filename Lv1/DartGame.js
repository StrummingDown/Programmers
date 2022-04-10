// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/17682

// 두자리 점수 계산을 배제한 풀이.. 수정 예정
// function solution(dartResult) {
//   var answer = 0;
//   let cnt = 0;
//   for (let idx = 0; idx < dartResult.length; idx++) {
//     if (isNaN(Number(dartResult[idx]))) {
//       if (dartResult[idx] === "S") {
//         answer += cnt;
//       } else if (dartResult[idx] === "D") {
//         answer += cnt ** 2;
//       } else if (dartResult[idx] === "T") {
//         answer += cnt ** 3;
//       } else if (dartResult[idx] === "*") {
//         answer *= 2;
//         cnt *= 2;
//       } else if (dartResult[idx] === "#") {
//         answer *= -1;
//         cnt *= -1;
//       }
//       cnt = 0;
//     } else {
//       cnt += Number(dartResult[idx]);
//     }
//   }

//   return answer;
// }

// 블로그를 보고 참고한 풀이
function solution(dartResult) {
  var answer = 0;
  let score = 0;
  let cnt = [];
  for (let i = 0; i < dartResult.length; i++) {
    //점수가 주어질때
    if (!isNaN(dartResult[i])) {
      //i-1이 1이고 i가 숫자면 10점.. //즉 10점인 경우와 그 외의 경우 처리
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
      //보너스 S일때
    } else if (dartResult[i] === "S") {
      cnt.push(score);
      //보너스 D일때
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2));
      //보너스 T일때
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3));
      //옵션 *일떄
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
      //옵션 #일때
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  } //3개의 점수 합산
  answer = cnt.reduce((acc, cur) => acc + cur, 0);
  return answer;
}

console.log(solution("1D2S#10S"));
// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/17682

// 두자리 점수 계산을 배제한 풀이.. 수정 예정
function solution(dartResult) {
  var answer = 0;
  let cnt = 0;
  for (let idx = 0; idx < dartResult.length; idx++) {
    if (isNaN(Number(dartResult[idx]))) {
      if (dartResult[idx] === "S") {
        answer += cnt;
      } else if (dartResult[idx] === "D") {
        answer += cnt ** 2;
      } else if (dartResult[idx] === "T") {
        answer += cnt ** 3;
      } else if (dartResult[idx] === "*") {
        answer *= 2;
        cnt *= 2;
      } else if (dartResult[idx] === "#") {
        answer *= -1;
        cnt *= -1;
      }
      cnt = 0;
    } else {
      cnt += Number(dartResult[idx]);
    }
  }

  return answer;
}

console.log(solution("1D2S#10S"));

// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12899
function solution(n) {
  var answer = "";
  let share = n;

  while (share > 0) {
    let remain = share % 3;
    share = parseInt(share / 3);

    if (remain === 1) {
      answer = "1" + answer;
    } else if (remain === 2) {
      answer = "2" + answer;
    } else if (remain === 0) {
      share--;
      answer = "4" + answer;
    }
  }

  return parseInt(answer);
}

console.log(solution(20));

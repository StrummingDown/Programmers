// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  var answer = [];
  let total = stages.length;
  let rest = stages.length;
  let failure = {};
  for (let idx = 1; idx < N + 2; idx++) {
    failure[idx] = 0;
  }

  for (let el in failure) {
    for (let stage of stages) {
      if (Number(el) === stage) {
        failure[stage]++;
      }
    }
  }
  for (let el in failure) {
    rest -= failure[el];
    failure[el] /= total;
    total = rest;
    answer.push([failure[el], el]);
  }

  answer = answer.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });

  return answer;
}
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  let num = Math.sqrt(n);
  if (num % 1 === 0) return (num + 1) * (num + 1);
  else return -1;
}

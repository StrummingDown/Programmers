// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let number = String(x); // 입력받은 수의 각 자리를 순회하기 위해 문자로 바꿔서 할당
  let sum = 0; // 각 자리의 합을 담아줄 변수
  for (let i of number) {
    // 각 자리 순회
    sum += Number(i); // 더학기
  }
  return x % sum === 0 ? true : false; // 입력받은 수가 각 자리의 합으로 나눠지면 true, 그렇지 않다면, false
}

solution(11);

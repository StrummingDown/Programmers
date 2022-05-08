// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/62048?language=javascript

function solution(w, h) {
  const answer = w * h; // 가로 * 세로로 모든 사각형 갯수 구하기
  const cut = w + h - gcd(w, h); // 공식을 이용해 잘려나간 사각형 구하기

  return answer - cut; // 멀쩡한 사각형의 갯수만 리턴
}

// 멀쩡한 사각형을 구하는 공식
// 가로 + 세로 - 두 수의 최대공약수

function gcd(a, b) {
  // 최대공약수 구하는 함수
  if (b === 0) return a;
  return gcd(b, a % b);
}

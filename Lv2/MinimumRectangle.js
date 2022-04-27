// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  let w = sizes.map((el) => el[0]); // 가로 길이를 모은 배열
  let h = sizes.map((el) => el[1]); // 세로 길이를 모은 배열
  const len = sizes.length; // 명함의 갯수

  for (let i = 0; i < len; i++) {
    // 명함의 갯수만큼 순회
    if (w[i] < h[i]) {
      // 만약 가로가 세로보다 길다면, 가로 세로의 길이를 바꿔준다.
      let change = w[i]; // 세로의 길이를 임의의 변수에 할당
      w[i] = h[i]; // 세로의 길이에 가로 길이 할당
      h[i] = change; // 가로의 길이에 세로의 길이 할당
    }
  }
  const maxW = Math.max(...w); // 가로 길이중 최대 길이 구하기
  const maxH = Math.max(...h); // 세로 길이중 최대 길이 구하기

  const answer = maxW * maxH; // 지갑의 크기 구하기
  return answer; // 구한 지갑의 크기 리턴
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);

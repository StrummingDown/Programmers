// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/12949#qna

function solution(arr1, arr2) {
  let row = arr1.length; // 정답 배열의 가로길이
  let col = arr2[0].length; // 정답 배열의 세로길이
  let answer = Array.from(Array(row), () => Array(col).fill(0)); // 위에서 할당 받은 가로 세로 길이만큼 0으로 채워진 배열 생성

  arr1.map((i, a) => {
    // i = [1,4], [3,2], [4,1] ... a = 0,1,2
    i.map((j, b) => {
      // b = 0,1 ...
      for (let j = 0; j < col; j++) {
        // 세로 길이만큼 만복
        answer[a][j] += arr1[a][b] * arr2[b][j]; // 정답 배열에 arr1,arr2의 알맞는 값을 곱한 값 할당
      }
    });
  });

  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);

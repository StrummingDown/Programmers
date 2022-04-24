// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    const arr1_1 = arr1[i].toString(2).padStart(n, 0);
    const arr2_1 = arr2[i].toString(2).padStart(n, 0);

    let map_row = "";
    for (let j = 0; j < n; j++) {
      if (arr1_1[j] === "1" || arr2_1[j] === "1") {
        map_row += "#";
      } else {
        map_row += " ";
      }
    }
    answer.push(map_row);
  }
  return answer;
}

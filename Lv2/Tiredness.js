// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/87946

// function solution(k, dungeons) {
//   var answer = -1;
//   // let dungeons = dungeons.map((dungeon) => {
//   //   dungeon[0];
//   // });

//   dungeons.sort((a, b) => b[0] - a[0]);
//   console.log(dungeons);
//   dungeons.map((dungeon) => {
//     if (k >= dungeon[0]) {
//       k -= dungeon[1];
//     }
//     console.log(k);
//   });

//   return answer;
// }

function solution(k, dungeons) {
  const len = dungeons.length; // 입력받은 던전의 갯수
  const visited = new Array(len).fill(false); //모든 경우의 수를 확인하기 위한 배열
  let clearCnt = 0; //클리어 횟수를 확인

  const dfs = (k, curCnt) => {
    //모든 경우의 수를 확인하기 위한 재귀

    clearCnt = Math.max(curCnt, clearCnt); //현재 클리어 횟수와 전의 클리어 횟수를 비교

    for (let i = 0; i < len; i++) {
      const [minK, useK] = dungeons[i]; // 최소 필요 피로도와 소모 피로도 구조 분해 할당

      if (k >= minK && !visited[i]) {
        //현재 피로도가 최소 필요 피로도 보다 크고 이번 던전을 확인한적이 없다면,
        visited[i] = true; // 던전에 방문했다고 표시 및
        dfs(k - useK, curCnt + 1); // 피로도 감소 및 카운트 증가 후 재귀
        visited[i] = false; // 재귀를 전부 돌기 위한 방문 여부 초기화
      }
    }
  };
  dfs(k, 0); // 탐색을 위한 재귀함수 실행
  return clearCnt; // 가장 많이 클리어 할 수 있는 던전의 갯수 리턴
}
solution(80, [
  [80, 20],
  [50, 40],
  [30, 10],
]);

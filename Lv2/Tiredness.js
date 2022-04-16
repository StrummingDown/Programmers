// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/87946

function solution(k, dungeons) {
  const len = dungeons.length;
  const visited = new Array(len).fill(false); //모든 경우의 수를 확인하기 위한 배열
  let clearCnt = 0; //클리어 횟수를 확인

  const dfs = (k, curCnt) => {
    //모든 경우의 수를 확인하기 위한 재귀

    clearCnt = Math.max(curCnt, clearCnt); //현재 클리어 횟수와 전의 클리어 횟수를 비교

    for (let i = 0; i < len; i++) {
      const [minK, useK] = dungeons[i];

      if (k >= minK && !visited[i]) {
        //현재 피로도보다 크고 확인한적이 없다면

        visited[i] = true; //확인, 피로도 감소 및 카운트 증가 후 재귀
        dfs(k - useK, curCnt + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);

  return clearCnt;
}

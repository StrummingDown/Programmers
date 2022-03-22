function solution(maps) {
  var answer = 1; // 몇 개의 블록을 밟았는지 (거리)를 카운트해 줄 변수
  let move = [
    // 상 하 좌 우 움직임을 담은 배열
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  let visited = maps; // 입력받은 지도에 방문했는지 여부를 표시해줄 이중 배열
  let row = maps.length; // 지도의 세로 길이
  let col = maps[0].length; // 지도의 가로 길이
  let queue = []; // 현재 위치를 담아줄 배열

  queue.push([0, 0]); // 좌측 최상단부터 시작

  while (queue.length !== 0) {
    // 더 이상 움직일 수 없을때까지 반복
    let size = queue.length; // 움직일 수 있는 경우의 수

    for (let i = 0; i < size; i++) {
      // 모든 경우의 수 탐색
      let [x, y] = queue.shift(); // 현재 위치를 받아옴과 동시에 이동할 것이므로 삭제

      for (let j = 0; j < move.length; j++) {
        // 상 화 좌 우 모든 경우의 수 탐색
        let [xm, ym] = move[j]; // 움직일 좌표의 변화 값을 구조 분해 할당

        if (x + xm < row && y + ym < col && 0 <= x + xm && 0 <= y + ym && visited[x + xm][y + ym] !== 0) {
          // 맵에서 벗어나지 않고, 벽돌로도 감싸있지않고, 내가 왔던 길이 아니라면,
          if (x + xm === row - 1 && y + ym === col - 1) {
            // 목적지까지 도착을 했다면,
            return ++answer; // 그 블록까지 카운트를 해야하므로 더한 후 블록의 갯수 리턴
          }
          queue.push([x + xm, y + ym]); // 움직인 좌표를 넣어준다

          visited[x + xm][y + ym] = 0; // 방문한 블록이라면, 더 이상 방문할 필요가 없으므로 벽돌로 처리해준다.
        }
      }
    }
    answer++; // 29번 조건문에 해당하지만, 목적지가 아니라면 이동에 성공했으므로 밟은 블록 갯수 +1
  }
  return -1; // 목적지까지 이동할 수 없다면 -1 리턴
}

// console.log(
//   solution([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ])
// );

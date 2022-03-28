function solution(board, moves) {
  const basket = []; // 뽑은 인형을 담을 배열
  let result = 0; // 두개 이상 뽑아서 사라진 인형의 수를 기록하는 정답 변수
  moves.forEach((order) => {
    // 몇번 움직였는지 순회
    const doll = pickup(board, order - 1); // 뽑힌 인형의 번호 할당
    if (doll) {
      // 인형이 뽑힌상태고,
      if (basket[basket.length - 1] === doll) {
        // 뽑은 인형과 방금 뽑힌 인형의 종류가 같다면,
        basket.pop(); // 뽑힌 인형 배열에서 삭제
        result += 2; // 두 개의 인형이 사라졌으므로 정답 +2
      } else {
        // 종류가 다르다면,
        basket.push(doll); // 사라지지 않고 뽑힌 배열에 추가
      }
    }
  });
  return result; // 몇 개가 사라졌는지 정답 리턴
}

function pickup(board, order) {
  for (let i = 0; i < board.length; i++) {
    // 인형통 배열을 순회
    if (board[i][order] !== 0) {
      // 집게의 위치에 인형이 있다면
      const doll = board[i][order]; // 해당 인형이 몇번 인형인지 저장
      board[i][order] = 0; // 뽑힌 위치는 0으로 할당
      return doll; // 해당 인형의 번호 리턴
    }
  }
}

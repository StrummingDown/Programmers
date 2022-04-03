// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42889

// 삽질하던 풀이..

// function solution(N, stages) {
//   var answer = [];
//   let out = [];
//   let total = stages.length;
//   let rest = stages.length;
//   let failure = {};
//   for (let idx = 1; idx < N + 2; idx++) {
//     failure[idx] = 0;
//   }

//   for (let el in failure) {
//     for (let stage of stages) {
//       if (Number(el) === stage) {
//         failure[stage]++;
//       }
//     }
//   }
//   for (let el in failure) {
//     rest -= failure[el];
//     failure[el] /= total;
//     total = rest;
//     answer.push([failure[el], el]);
//   }
//   answer.sort((a, b) => {
//     if (a[0] > b[0]) {
//       return -1;
//     } else if (a[0] < b[0]) {
//       return 1;
//     } else {
//       if (Number(a[1]) > Number(b[1])) {
//         return 1;
//       } else {
//         return -1;
//       }
//     }
//   });
//   for (let i = 1; i < answer.length; i++) {
//     out.push(Number(answer[i][1]));
//   }
//   //   answer = answer.sort((a, b) => {
//   //     if (a[0] === b[0]) {
//   //       return b[1] - a[1];
//   //     }
//   //     return b[0] - a[0];
//   //   });
//   console.log(out);
//   return answer;
// }

// 정답 풀이

function solution(N, stages) {
  let arr = []; // 실패율을 내림차순으로 담아줄 정답 배열
  let totalNum = stages.length; // 도전자의 총 인원
  for (let i = 1; i <= N; i++) {
    // 현재 단계에서 실패한 유저수를 계산
    // 현재까지의 누적 도전자수를 나누어 실패율 계산
    // 현재까지의 누적 도전자수에 실패한 유저수 빼기
    let stageNum = stages.filter((el) => el == i).length;
    let failRatio = 0; // 실패율을 담아줄 변수
    if (stageNum === 0) {
      // 0단계는 없으므로,
      failRatio = 0; // 실패율이 0
    } else {
      // 0단계가 아니라면,
      failRatio = stageNum / totalNum; // 현재 스테이지에서 실패한 유저 / 남은 유저
    }
    totalNum -= stageNum; // 남은 유저는 각 단계에서 떨어진 유저의 수 만큼 계속 감소
    arr.push({ idx: i, ratio: failRatio }); // 배열에 스테이지와 실패율을 갖는 객체를 넣어준다.
  }
  // 실패율 내림차순으로 정렬하고 실패율이 같다면 stage 오름차순으로 정렬
  arr.sort((a, b) => {
    if (a.ratio > b.ratio) {
      return -1;
    } else if (a.ratio < b.ratio) {
      return 1;
    } else {
      if (a.idx > b.idx) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return arr.map((el) => el.idx); // 배열의 idx(스테이지)만 리턴
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

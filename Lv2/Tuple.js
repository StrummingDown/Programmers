// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/64065?language=python3

// 한자리수만 원소로 가졌을 때 고려한 풀이...
// function solution(s) {
//   var answer = [];
//   let change = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "{" && s[i] !== ",") {
//       change += s[i];
//     }
//   }
//   let cut = change.length - 2;
//   change = change.slice(0, cut);
//   change = change.split("}");

//   if (change.length === 1) {
//     return [Number(change[0])];
//   }
//   change.sort((a, b) => a - b);

//   for (let j of change) {
//     for (let k = 0; k < j.length; k++) {
//       if (!answer.includes(j[k])) {
//         answer.push(j[k]);
//       }
//     }
//   }
//   for (let l = 0; l < answer.length; l++) {
//     answer[l] = Number(answer[l]);
//   }
//   return answer;
// }

function solution(s) {
  var answer = [];
  let change = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "{") {
      change += s[i];
    }
  }

  let cut = change.length - 2;
  change = change.slice(0, cut);
  change = change.split("},");

  if (change.length === 1) {
    return [Number(change[0])];
  }
  let changes = [];
  change.filter((el) => {
    let element = "";
    for (let ex = 0; ex < el.length; ex++) {
      if (el[ex] !== ",") {
        element += el[ex];
      }
    }
    changes.push(element);
  });

  change.sort((a, b) => a - b);
  console.log(changes);
  for (let j of change) {
    for (let k = 0; k < j.length; k++) {
      if (!answer.includes(j[k])) {
        answer.push(j[k]);
      }
    }
  }
  for (let l = 0; l < answer.length; l++) {
    answer[l] = Number(answer[l]);
  }
  return answer;
}

// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));

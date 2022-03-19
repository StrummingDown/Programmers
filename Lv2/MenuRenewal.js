// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/72411

// function solution(orders, course) {
//   var answer = [];
//   orders.sort((a, b) => b.length - a.length);

//   const getCombie = (array, num) => {
//     const results = [];
//     if (num === 1) {
//       return array.map((el) => [el]);
//     }
//     array.forEach((fix, idx, origin) => {
//       const rest = origin.slice(idx + 1);
//       const combie = getCombie(rest, num - 1);
//       const attach = combie.map((el) => [fix, ...el]);
//       results.push(...attach);
//     });
//     return results;
//   };

//   return getCombie(orders, course);
// }

function solution(orders, course) {
  var answer = [];
  let targets = new Map();
  let max = 0;

  function combine(crr, order, length) {
    if (crr.length === length) {
      if (targets.get(crr) + 1 > max) {
        max = targets.get(crr) + 1;
      }
      return targets.set(crr, targets.get(crr) + 1 || 1);
    }
    for (let a in order) {
      let add = crr + order[a];
      let mod = order.slice(Number(a) + 1);
      combine(add, mod, length);
    }
  }

  for (let i of course) {
    orders.forEach((el) => {
      let ell = el.split("");
      ell.sort();
      combine("", ell.join(""), i);
    });

    targets.forEach((el, idx) => {
      if (max === el && max >= 2) answer.push(idx);
    });
    max = 0;
    targets.clear();
  }

  answer.sort();
  return answer;
}

// console.log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3]));

// ex = [1, 2, 3, 4, 5, 6, 7, 8];

// const getCombie = (array, num) => {
//   const results = [];
//   if (num === 1) {
//     return array.map((el) => [el]);
//   }
//   array.forEach((fix, idx, origin) => {
//     const rest = origin.slice(idx + 1);
//     const combie = getCombie(rest, num - 1);
//     const attach = combie.map((el) => [fix, ...el]);
//     results.push(...attach);
//   });
//   return results;
// };
// console.log(getCombie(ex, 3));

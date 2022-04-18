// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42587

// priorrities의 같은 우선순위를 어떻게 구별할지 생각을 안하고 짠 코드...
// function solution(priorities, location) {
//   var answer = 0;
//   let max = 0;

//   for (let priority of priorities) {
//     max = Math.max(max, priority);
//   }
//   let index = priorities.indexOf(max);

//   let priorities_1 = priorities.slice(index, priorities.length);
//   let priorities_2 = priorities.slice(0, index);
//   for (let el of priorities_2) {
//     priorities_1.push(el);
//   }
//   let target = priorities[location];
//   let location_index = priorities_1.indexOf(target);
//   //   console.log(priorities_1);
//   console.log(location_index);
//   //   if (location === index) {
//   //     return location;
//   //   }
//   //   else{

//   //   }
//   return answer;
// }

function solution(priorities, location) {
  var answer = 0;
  let max = 0;

  let list = priorities.map((el, idx) => ({
    idx,
    value: el,
  }));
  console.log(list);
  for (let priority of priorities) {
    max = Math.max(max, priority);
  }
  let index = priorities.indexOf(max);

  let priorities_1 = priorities.slice(index, priorities.length);
  let priorities_2 = priorities.slice(0, index);
  for (let el of priorities_2) {
    priorities_1.push(el);
  }
  let target = priorities[location];
  let location_index = priorities_1.indexOf(target);
  //   console.log(priorities_1);
  console.log(location_index);

  //   }
  return answer;
}
solution([1, 1, 9, 1, 1, 1], 0);

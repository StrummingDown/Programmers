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

// 문제 이해를 잘못해서 또 삽질한 코드 ...
// function solution(priorities, location) {
//   var answer = 0;
//   let max = 0;

//   let list = priorities.map((el, idx) => ({
//     idx,
//     value: el,
//   }));

//   for (let priority of list) {
//     max = Math.max(max, priority.value);
//   }

//   let index = priorities.indexOf(max);

//   while (index) {
//     let move = list.shift();
//     list.push(move);
//     index--;
//   }

//   answer = list.findIndex((el) => el.idx === location);

//   return answer + 1;
// }

// list.sort((a, b) => b.value - a.value);
// console.log(list);
// answer = list.findIndex((el) => el.idx === location);

// for (let priority of list) {
//   max = Math.max(max, priority.value);
// }

// let index = priorities.indexOf(max);

// while (index) {
//   let move = list.shift();
//   list.push(move);
//   index--;
// }

// answer = list.findIndex((el) => el.idx === location);
// return answer + 1;

// 테스트 케이스 3개를 틀리는데 추후 수정이 필요하다 ..
// 입력받은 lcoation이 마지막까지 남아있을때 리턴을 안해줘서 이 사단이 났다.
// 정답이지만 코드 리팩토링을 통해 줄여야겠다 !!
// 깎는다고 깎았는데 무언가 마음에 안든다..

function solution(priorities, location) {
  let cnt = 1; // location이 몇번째로 인쇄되는지 카운트해줄 변수
  let list = priorities.map((el, idx) => ({
    // location의 인덱스와 우선순위 값을 기억하기 위해 객체로 저장해준다.
    idx,
    value: el,
  }));
  let copy = list.slice(); // 인쇄 리스트를 변형시키기 위해 복사해준다.

  for (let _ of list) {
    // 위에서 만들어준 인쇄리스트 객체를 순회
    for (let i = 1; i < list.length; i++) {
      // 각 요소들의 우선순위를 비교하기 위해 이중 반복문 사용
      let max = Math.max.apply(
        // 현재 가장 높은 우선순위가 몇인지 구해서 max에 할당
        Math,
        copy.map((i) => {
          return i.value;
        })
      );

      if (copy[0].value >= max) {
        // 현재 요소의 우선순위가 가장 크다면,
        if (copy[0].idx === location) {
          // 현재 요소가 입력받은 location의 값이라면,
          return cnt; // 몇번째 인쇄되는지 출력
        }
        copy.shift(); // 인쇄가 완료되므로 대기 목록에서 제거
        cnt++; // 인쇄된 문서 카은트 +1
      } else if (copy[0].value >= max) {
        // 현재 요소의 우선순위가 가장 크다면,
        copy.shift(); // 인쇄가 완료되므로 대기 목록에서 제거
        cnt++; // 인쇄된 문서 카운트 +1
      } else {
        // 현재 요소가 인쇄가 완료되지 않았다면,
        let move = copy.shift(); // 맨앞에서 맨뒤로 이동
        copy.push(move);
      }
    }
  }
  return cnt; // location이 가장 마지막에 인쇄된다면, 인쇄 카운트 출력 또는 입력받은 대기목록의 길이 (priorities.length) 리턴
}
console.log(solution([1, 1, 3], 1));

// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/42885

// 효율성 검사에서 통과를 못한 첫번째 풀이

// function solution(people, limit) {
//   people.sort((a, b) => b - a);

//   let answer = 0;

//   while (people.length !== 0) {
//     let left = 0;
//     let right = people.length - 1;
//     console.log(people[left], people[right]);

//     if (people[left] + people[right] <= limit) {
//       people.splice(right, 1);
//       people.splice(0, 1);
//     } else {
//       people.splice(0, 1);
//     }
//     answer++;
//   }
//   return answer;
// }

solution([100, 80, 60, 60, 50, 40, 30, 20], 120);

// 효율성 검사까지 만족한 두 번째 풀이 !
function solution(people, limit) {
  let answer = 0; // 사용한 보트의 갯수를 담아줄 정답 변수
  const sortedPeople = people.sort((a, b) => b - a); // 입력받은 사람을 내림차순으로 정렬
  let heaviest = 0; // 제일 무거운 사람
  let lightest = sortedPeople.length - 1; // 제일 가벼운 사람

  while (heaviest <= lightest) {
    // 보트에 탄 사란이 없을때까지 반복
    if (sortedPeople[heaviest] <= limit / 2) {
      // 제일 무거운 사람의 무게가 제한무게의 절반이 된다면
      answer += Math.ceil((lightest - heaviest + 1) / 2); // 남아 있는 사람을 전부 두명씩 태워서 보트에 태운다
      break; // while문 탈출
    }
    answer++; // 루프가 한번 돌때마다 보트의 갯수 +1
    if (sortedPeople[heaviest] + sortedPeople[lightest] <= limit) {
      // 제일 가벼운사람과 무거운 사람의 무게가 제한 용량을 넘지 않았을 때,
      heaviest++; // 둘다 태웠으므로, 그 다음 무거운 사람으로 할당
      lightest--; // 그 다음 가벼운 사람으로 할당
    } else {
      // 두 사람 무게의 합이 제한 무게를 초과했을 때는.
      heaviest++; // 모거운 사람만 태웠으므로, 무거운 사람만 그 다음 무거운 사람으로 할당
    }
  }

  return answer; // 보트의 갯수 리턴
}

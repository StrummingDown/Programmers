// 문제링크
// https://programmers.co.kr/learn/courses/30/lessons/72410

// 문제 조건 충족만 하기위해 정리 없이 줄줄 써내려가서 길어진 코드... 다시 정리해서 깎아야겠다.
function solution(new_id) {
  var answer = "";
  let word_list = "abcdefghijklmnopqrstuvwxyz0123456789-_.";
  let change_id = new_id.toLowerCase();
  let check = "";
  for (let i = 0; i < change_id.length; i++) {
    check = word_list.includes(change_id[i]);
    if (check) {
      answer += change_id[i];
    }
  }
  let answer2 = answer[0];
  for (let i = 1; i < answer.length; i++) {
    if (answer2[answer2.length - 1] === answer[i] && answer[i] === ".") {
    } else {
      answer2 += answer[i];
    }
  }

  if (answer2[0] === ".") {
    answer2 = answer2.slice(1);
  }
  if (answer2[answer2.length - 1] === ".") {
    answer2 = answer2.slice(0, answer2.length - 1);
  }

  if (!answer2.length) {
    answer2 += "a";
  }
  if (answer2.length > 15) {
    answer2 = answer2.slice(0, 15);

    if (answer2[answer2.length - 1] === ".") {
      answer2 = answer2.slice(0, answer2.length - 1);
    }
  }
  while (answer2.length < 3) {
    answer2 += answer2[answer2.length - 1];
  }

  return answer2;
}

solution("z-+.^.");

# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42748

def solution(array, commands):
    answer = [] # 정답을 담아줄 배열
    for element in commands: # 입력받은 이차원 배열 순회
        answerC = array[element[0]-1 : element[1]] # 첫번째 요소부터 두번째 요소까지 배열을 슬라이스하는데, 시작점에 -1을 해주는 이유는 인덱스는 0번째부터 시작하지만, 순서를 얘기할떄는 1번째부터 시작하므로 -1
        answerC.sort() # 슬라이스한 배열 오름차순 정렬
        answer.append(answerC[element[2]-1]) # 요소의 세번째숫자를 정답 배열에 담아준다
    return answer # 순회가 끝나면 정답 리턴
# print(solution([1,5,2,6,3,7,4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]]))
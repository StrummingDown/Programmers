# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/86051

def solution(numbers): 
    lostNums = list(range(10)) # 0~9 까지 요소의 유무를 확인하기 위한 리스트
    for num in numbers: # 입력받은 배열 순회
        if num in lostNums: # 만약 0~9 사이의 수 가 있다면,
            lostNums.remove(num) # 없는 숫자 리스트에서 제거
    answer = sum(lostNums) # 없는 숫자의 합이 정답
    return answer # 정답 리턴

# print(solution([1,2,3,4,6,7,8,0]))
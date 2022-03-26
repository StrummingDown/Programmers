# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12931

def solution(n): 
    answer = 0 # 자릿수의 합을 담을 정답 변수
    for num in str(n): # 입력받은 수를 문자형으로 변환해 각 자리수 순회
        answer += int(num) # 문자를 다시 숫자로 변환하여 더하기
    return answer # 다 더해진 합 리턴
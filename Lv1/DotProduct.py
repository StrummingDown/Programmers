# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/70128

def solution(a, b):
    answer = 0 # 정답을 담아줄 변수
    for idx in range(len(a)): # a,b 리스트의 길이는 같으므로 하나의 길이만큼 순회
        answer += a[idx] * b[idx] # a의 idx번째와 b의 idx번째 요소의 곱을 정답 변수에 순회가 끝날때까지 더해준다.
    return answer # 정답 리턴
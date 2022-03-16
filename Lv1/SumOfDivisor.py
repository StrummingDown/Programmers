# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12928
def solution(n):
    answer = 0 # 약수의 합을 담아줄 정답 변수
    for i in range(1,n+1): # 1부터 입력받은 n까지 순회
        if n % i == 0: # 만약 나눠진다면, (약수라면,)
            answer += i # 약수들의 합에 더하기
    return answer # 정답인 약수들의 합 리턴 
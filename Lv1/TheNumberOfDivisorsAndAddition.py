# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/77884

def countDivisor(num): # 약수의 개수를 구하는 함수 선언
    count = 0 # 약수의 개수를 카운트 해줄 변수
    for i in range(1,num + 1): # 입력받은 num의 약수를 구하기 위한 순회
        if num % i == 0: # num과 1부터 num까지의 수 중 나누어 떨어진다면,
            count += 1 # 약수이 개수 +1
    return count # 약수의 개수 리턴

def solution(left, right):
    answer = 0 # 정답을 담아줄 변수
    for num in range(left, right + 1): # 입력받은 두 수를 순회하면서,
        if countDivisor(num) % 2 : # 약수의 개수가 홀수라면, 
            answer -= num # 감산
        else: # 약수의 개수가 짝수라면,
            answer += num # 가산
    return answer # 정답 리턴

print(solution(13,17))
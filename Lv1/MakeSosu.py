# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12977?language=python3

def sosu(num): # 소수 여부를 판별해주는 함수 작성
    count = 0 # 약수의 갯수를 카운트해주는 변수
    for i in range(1,num + 1): # 입력받은 num을 1부터 num까지 
        if num % i == 0: # 나누어 떨어지면 
            count += 1 # 약수의 갯수 + 1
    if count == 2: # 약수가 2개라면 
        return 1 # 소수이므로 1(True) 리턴 
    else: # 2개가 아니라면 
        return 0 # 소수가 아니므로 0(False) 리턴

def solution(nums):
    total = 0 # nums 배열의 합을 담아줄 변수 
    limit = len(nums) # nums배열의 길이
    answer = 0 # 소수의 갯수(정답)을 담아줄 변수
    if limit == 3: # nums의 길이가 3이라면 
        return sosu(sum(nums)) # 전부 더해서 소수여부 판별
    else: # 그렇지 않다면,
        for first in range(limit): # 3중 반복문으로 전부 탐색 (브루트포스 탐색)
            for second in range(first + 1,limit):
                for third in range(second + 1,limit):
                    total = nums[first] + nums[second] + nums[third] # nums의 세개 요소를 더해서 소수 판별 함수에 전달
                    if sosu(total): # 소수라면,
                        answer += 1 # 정답인 소수의 갯수 +1 
        return answer # 정답 리턴
# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12921

# 강력하지만 효율성 테스트에서 실패했던 첫번째 코드

# def solution(n):
#     answer = 0
#     for i in range(2,n+1):
#         count = 0
#         for j in range(1,i+1):
#             if i % j == 0:
#                 count +=  1     
#         if count == 2:
#             answer += 1
#     return answer
# print(solution(4))


# 에라토스테네스의 체로 보다 효율적인 코드

def solution(n):
    sosu = [False,False] + [True] * (n-1) # 0부터 입력받은 수까지 소수인지 판별해줄 배열 
    primes = [] # 소수를 담아줄 배열
    for i in range(2,n+1): # 1은 소수가 아니므로, 2부터 입력받은 수까지 순회
        if sosu[i]: # 만약 i가 소수가 맞다면 (sosu 리스트에서 True라면),
            primes.append(i) # 소수배열에 담아준다.
        for j in range(2*i, n+1, i): # 각 소수의 배수들은 소수가 아니므로, (이떄 range의 첫 값에 2를 곱해주는것은 그 소수를 제외하고, 소수의 배수만을 조회하기 위함)
            sosu[j] = False # 소수의 배수들은 소수가 아니라고 소수 판단 배열 할당해준다.
    answer = len(primes) # 소수의 갯수를 정답 변수에 담기
    return answer # 정답 리턴
print(solution(5))

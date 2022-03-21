# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42842
def solution(brown, yellow):
    total = brown + yellow # 입력받은 격자의 총합
    answer = [] # 접답을 담아줄 배열
    for i in range(1,brown): # 1부터 갈색격자까지 순회
        if yellow % i == 0 : # 갈색격자와 노랑격자의 약수이고,
            if total % (yellow / i + 2) == 0: # 그 수를 노랑격자로 나눈값에 2를 더한 값이 총합의 약수라면, 
                answer.append(yellow / i + 2) # 그대로 가로의 길이가 되고,
                answer.append(i + 2)  # 노랑격자의 수로 나누지 않은 값이 세로 길이가 된다.
                break 
    return answer # 정답 배열 리턴

print(solution(24,24))


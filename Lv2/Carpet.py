# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42842

# 문제의 input, output에는 규칙이 있다.

# brown yellow return 
#  10      2    [4,3] ... (1)
#   8      1    [3,3] ... (2)
#  24     24    [8,6] ... (3)

# brown과 yellow의 약수를 X로, (brown + yellow)를 total로 가정해보자.
# yellow를 X로 나누고, 2를 더한 값이 total의 약수라면 그 수는 가로의 길이가 되고
# X에 2를 더한 값이 세로의 길이가 된다.

# example (1)
# X: 1, total: 12
# 2 / 1 + 2 => 4
# 4는 total의 약수이다. 따라서 가로의 길이는 4
# 1 + 2 => 3 따라서 세로의 길이는 3

# exmaple (3)
# X: 4, total: 48
# 24 / 4 + 2 => 8 
# 8는 total의 약수이다. 따라서 가로의 길이는 8
# 4 + 2 => 6 따라서 세로의 길이는 6

def solution(brown, yellow):
    total = brown + yellow # 입력받은 격자의 총합
    answer = [] # 접답을 담아줄 배열
    for i in range(1,brown): # 1부터 갈색격자까지 순회
        if yellow % i == 0 : # 갈색격자와 노랑격자의 약수이고,
            if total % (yellow / i + 2) == 0: # 그 수를 노랑격자로 나눈값에 2를 더한 값이 총합의 약수라면, 
                answer.append(yellow / i + 2) # 그대로 가로의 길이가 되고,
                answer.append(i + 2)  # 노랑격자의 수로 나누지 않은 값이 세로 길이가 된다.
                break # 3개의 값 이상이 담기지 않도록 반복문 종료
    return answer # 정답 배열 리턴

print(solution(24,24))


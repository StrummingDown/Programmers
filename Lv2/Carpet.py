def solution(brown, yellow):
    total = brown + yellow
    answer = []
    for i in range(1,brown):
        if yellow % i == 0 :
            if total % (yellow / i + 2) == 0:
                answer.append(i + 2, yellow / i + 2)
                break
    answer.sort(reverse=True)
    return answer

print(solution(24,24))


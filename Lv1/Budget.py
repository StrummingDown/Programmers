# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12982?language=python3

def solution(d, budget):
    if sum(d) == budget:
        return len(d)
    else:
        answer = 0
        d.sort()
        
        for i in d:
            budget -= i
            if budget < 0 :
                break
            answer += 1
        return answer
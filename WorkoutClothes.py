# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42862

def solution(n, lost, reserve):
    clear = []
    lost.sort()
    reserve.sort()
    for i in lost:
        if i in reserve:
            reserve.remove(i)
            clear.append(i)
    lost = [x for x in lost if x not in clear]

    for i in lost:
        up = i + 1
        down = i - 1
        if down in reserve :
            clear.append(i)
            reserve.remove(down)
        elif up in reserve:
            clear.append(i)
            reserve.remove(up)
    clear.sort()
    left = len(lost) - len(clear)
    print(lost)
    print(clear)
    answer = n - len(clear)

    return answer

print(solution(5,[4,2],[3]))




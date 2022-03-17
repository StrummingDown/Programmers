# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/76501?language=python3

def solution(absolutes, signs):
    limit = len(signs) # 반복할 범위 설정
    answer = 0 # 감산 가산을 해서 정답을 담아줄 변수
    for idx in range(limit): # absolutes와 signs의 길이는 같으므로, 같은 범위만큼 순회
        if signs[idx] == True: # signs의 요소가 True라면,
            answer += absolutes[idx] # absolutes의 요소 가산
        elif signs[idx] == False: # signs의 요소가 False라면,
            answer -= absolutes[idx] # absolutes의 요소 감산
    return answer # 연산이 끝난 정답 리턴

print(solution([4,7,12],[True,False,True]))
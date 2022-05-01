# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/87390

# 시간 초과가 나는 코드..
def solution(n, left, right):
    answer = [] # 정답을 구하기 위해 만들 리스트

    for i in range(n): # 입력받은 n * n 크기의 배열을 만들기 위해
        for j in range(n): # 이중 반복문 사용
            answer.append(max(i + 1, j + 1)) 
            # 아래와 같은 배열을 만들기위해 루프가 돌떄마다 i와 j중 더 큰수를 추가
            # 1 2 3 4
            # 2 2 3 4
            # 3 3 3 4
            # 4 4 4 4
    return answer[left:right + 1] # 입력받은 인덱스에 해당하는 요소 슬라이스해서 리턴

print(solution(3,2	,5))
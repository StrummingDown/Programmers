# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42862

def solution(n, lost, reserve):
    lost.sort() # 도난당한 학생 오름차순 정렬 (오름차순으로 입력되지 않을 경우도 존재)
    reserve.sort() # 여벌 체육복을 가진 학생도 마찬가지로 오름차순 정렬
    answer = n - len(lost) # 당장 수업에 참여할 수 있는 학생은 총원 - 도난당한 학생 수
    lostC = lost.copy() # 도난 당한 모든 학생을 조회하기 위해 도난 리스트 복사
    for i in lostC: # 도난 당한 학생 순회 - 여벌 체육복을 가진 학생이 도난 당한 경우,
        if i in reserve: # 여벌 체육복을 가진 학생이 도난당했을 경우,
            lost.remove(i) # 도난 리스트에서 제거
            reserve.remove(i) # 여벌 리스트에서 제거
            answer += 1 # 그 학생은 자신의 여벌 체육복으로 참여 가능하므로 수업 참여 인원 + 1
    for i in lost: # 도난 당한 학생 순회 - 여벌 체육복이 없는 학생이 도난 당한 경우,
        if reserve.count(i - 1) > 0: # 사이즈가 한 치수 작은 걸 빌릴 수 있다면,
            reserve.remove(i - 1) # 여벌옷 리스트에서 제거
            answer += 1 # 수업에 참여할 수 있는 학생 수 +1
        elif reserve.count(i + 1) > 0: # 사이즈가 한 치수 큰 걸 빌릴 수 있다면,
            reserve.remove(i + 1) # 여벌롯 리스트에서 제거
            answer += 1 # 수업에 참여할 수 있는 학생 수 +1
    return answer # 수업에 참여할 수 있는 총 학생 수 리턴

# print(solution(5,[4,2],[3]))  #4
# print(solution(3,[1,2],[2,3]))  # 2
# print(solution(5,[4,2],[1,3,5])) # 5
# print(solution(5,[2,5,6],[2,4,6])) # 5
# print(solution(5,[4,2],[1,3])) # 5
# print(solution(4,[1,3,2],[2,4,3])) # 3
# print(solution(5,[1,3],[2,3])) # 5

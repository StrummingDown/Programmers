# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12916

def solution(s):
    s = s.upper() # 대소문자 구분이 없으므로, 입력받은 문자열 대문자로 통일
    if "P" not in s and "Y" not in s: # P나 Y가 전부 존재하지 않을 경우,
        return True # True 리턴
    countP = 0 # P를 카운트할 변수
    countY = 0 # Y를 카운트할 변수
    for word in s: # 입력받은 문자열 순회
        if word == "P": # P 라면,
            countP += 1 # P 카운트 +1
        elif word == "Y": # Y 라면,
            countY += 1 # Y 카운트 +1
    if countP == countY: # P와 Y의 갯수가 같다면,
        return True # True 리턴
    else: # 다르다면, 
        return False # False 리턴

print(solution("Py"))


# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12917

def solution(s):
    answer = list(s) # 정렬 시키기위해 입력받은 문자열을 리스트로 볗놘
    answer.sort(reverse=True) # 문자열의 오름차순은 소문자 -> 대문자 순이므로 reverse 옵션을 통해 대문자 -> 소문자가 되도록 내림차순 정렬
    answer = ''.join(answer) # 리스트를 다시 문자열로 변환
    return answer # 정답 문자열 리턴

# print(solution("Zbcdefg"))
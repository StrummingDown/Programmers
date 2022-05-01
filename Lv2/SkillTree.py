# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/49993

def solution(skill, skill_trees):
    answer = 0 # 가능한 스킬트리 갯수를 담아줄 정답 변수

    for skills in skill_trees: # 입력받은 스킬트리 목록을 순회
        skill_list = list(skill) # 각 요소를 리스트로 전환시켜준다.
        for s in skills: # 현재 순회중인 스킬트리를 다시 순회
            if s in skill: # 현재 순회중인 스킬이 입력받은 스킬트리에 존재지만,
                if s != skill_list.pop(0): # 선행 스킬 순서의 첫번재와 다르다면,
                    break # 불가능한 스킬트리이므로 탈줄
        else: # 그렇지 않다면 가능한 스킬트리이므로
            answer += 1 # 가능한 스킬트리 카운트 +1

    return answer # 반복이 끝나고 가능한 스킬트리 갯수 리턴


print(solution("CBD",["BACDE", "CBADF", "AECB", "BDA"]))


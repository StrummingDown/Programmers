# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42576

def solution(participant, completion):
    participant.sort() # 참가자 리스트를 오름차순 정렬
    completion.sort() # 완주자 리스트도 오람차순 정렬
    for idx in range(len(completion)): # 완주자 목록의 길이만큼 순회
        if participant[idx] != completion[idx]: # 정렬된 두 명단의 이름이 일치하지 않는다면,
            return participant[idx] # 완주하지 못한 사람이므로 그 사람의 이름 리턴
    return participant[len(participant)-1] # 끝까지 순회했음에도 못찾았다면 맨 마지막사람이 완주하지 못한 것이므로 참가자 리스트의 마지막 이름 리턴

# print(solution(	["marina", "josipa","hella","nikola", "filipa"]	,["josipa", "filipa", "marina", "nikola"]))
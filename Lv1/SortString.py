# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12915

def solution(strings, n):
    words = [] #각 단어의 처음에 입력받은 n번째 철자를 넣어 담아줄 배열
    for i in strings: # 입력받은 단어가 담긴 배열 순회
        words.append(i[n]+i) # 각 단어의 n+1번째 (인덱스라 +1)를 첫 철자로 한 단어를 배열에 추가
    words.sort() # 배열 오름차순 정렬
    answer = [] # 정답을 담아줄 배열
    for i in words: # 위에서 n번째 철자를 처음 철자로 받아 오름차순 정렬한 배열을 순회
        answer.append(i[1:]) # 정렬이 완료된 단어들의 첫 철자를 제외하고, 다시 정답 배열에 추가   
    return answer # n번째 철자의 오름순으로 정렬이 완료된 정답 배열 리턴
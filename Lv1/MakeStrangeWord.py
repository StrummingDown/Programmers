# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/12930

# 실패한 풀이..
# def solution(s):
#     answer = []
#     words = s.split(' ')
    
#     for word in words:
#         word_1 = ''
#         for i in range(len(word)):
#             print(word)
#             if i % 2 == 0:
#                word_1 += word[i].upper()
#             else:
#                 word_1 += word[i]
#         answer.append(word_1)
#     return ' '.join(answer)

# 정답 풀이
def solution(s):
    answer = '' # 정답을 담아줄 문자열
    cnt = 0 # 공백마다 단어를 구분하고, 각 단어의 인덱스를 표시해줄 변수
    for idx in range(len(s)): # 입력받은 전체 문자열 순회
        if s[idx] != ' ': # 공백이 아니고,
            if cnt % 2 == 0: # 단어의 인덱스가 0,2,4 ... 짝수번째라면
                answer += s[idx].upper() # 대문자로 변환해서 정답 문자열에 더해준다.
                cnt += 1 # 공백이 아니므로 단어의 인덱스 +1
            elif cnt % 2 ==1: # 단어의 인덱스가 1,3,5.. 홀수번째라면
                answer += s[idx].lower() # 소문자로 변환해서 정답 문자열에 더해준다.
                cnt += 1 # 마찬가지로 단어의 인덱스 +1
        else: # 공백이라면,
            answer += ' ' # 공백 그대로 정답 문자열에 더해주고
            cnt = 0 # 새로운 단어가 시작되므로, 단어의 인덱스를 0으로 초기화
    
    return answer # 위에서 대소문자 변환을 거친 정답 문자열 리턴

# print(solution(" T Ry HeLLO WOrld "))


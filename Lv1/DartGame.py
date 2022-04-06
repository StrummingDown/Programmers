# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/17682

def solution(dartResult):
    stack = [] # 다트의 점수들을 담아줄 배열
    dartResult = dartResult.replace("10", "A") # 10점은 두자리 수 이므로 A로 변환
    bonus = {'S': 1, 'D': 2, 'T': 3} # 싱글 더블 트리플 보너스 점수 (각 숫자만큼 제곱) 담아준 딕셔너리
    
    for i in dartResult: # 입력받은 점수와 보너스 문자열 순회
        if i.isdigit() or i=='A': # 순회하는 문자가 숫자거나 A(10)이라면,
            stack.append(10 if i == 'A' else int(i)) # A면 10을 추가, A가 아니면 해당 숫자 추가
        elif i in ('S', 'D', 'T'): # 순회하는 문자가 보너스 중 하나라면,
            num = stack.pop() # 가장 마지막에 들어간 숫자를 지워주고
            stack.append(num ** bonus[i]) # 해당 보너스의 숫자만큼 제곱해준다.
        elif i == '#': # "#"이라면, 가장 마지막 점수는 빼야하기 때문에
            stack[-1] *= -1 # -1를 곱해준다.
        elif i == '*': # "*"이라면,
            num = stack.pop() # 가장 마지막 점수가 두배가 되므로
            if len(stack): # 점수가 존재한다면,
                stack[-1] *= 2 # 해당 점수는 두배가 된다.
            stack.append(2 * num) # 얻은 점수 목록에 2배를 한 값을 추가
    return sum(stack) # 계산된 점수들의 합을 리턴
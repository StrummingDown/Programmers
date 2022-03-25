def solution(lottos, win_nums):
    answer = [0,0] # 최고 순위와 최저 순위를 담아줄 정답 배열
    cntZero = 0 # 0의 갯수 (가려진 숫자)
    cnt = 0 # 당첨번호와 맞는 숫자의 갯수
    for i in lottos: # 입력받은 로또 순회
        if i in win_nums: # 내 로또 번호가 당첨 번호라면,
            cnt += 1 # 당첨번호 +1
        if i == 0: # 가려진 것이라면,
            cntZero += 1 # 가려진 숫자의 갯수 +1
    

    # 당첨 숫자  순위    숫자의 합
    #      6     1         7
    #      5     2         7
    #      4     3         7
    #      3     4         7
    #      2     5         7
    #      1     6         7
    
    # 7에서 당첨된 숫자를 뺸 것이 순위가 된다. 따라서

    if cnt == 1: # 당첨된 숫자가 한개라면,
        answer[0] = 7 - cnt - cntZero # 최고 당첨순위는 7에서 당첨된 숫자의 갯수와 가려진 숫자인 0을 모두 빼면 최고 순위가 나온다.
        answer[1] = 6 # 최저 순위는 6위
    elif cnt == 0 and cntZero == 0: # 당첨된 숫자와 가려진 숫자가 전부 없다면,
        answer[0] = 6 # 최고순위도 6위
        answer[1] = 6 # 최저순위도 6위
    elif cntZero == 6: # 모두가 가려진 숫자라면,
        answer[0] = 1 # 1등이 될수도
        answer[1] = 6 # 6등이 될수도 있다.
    else: # 나머지 경우에는
        answer[0] = 7 - cnt - cntZero # 최고 당첨 순위는 7에서 당첨된 숫자 갯수와 가려진 숫자 갯수를 전부 뺀 숫자
        answer[1] = 7 - cnt # 최저 순위는 7에서 당첨된 숫자만 뺀 것
    return answer # 순위를 담은 정답 배열 리턴

print(solution(	[1,1,1,1,1,1], [38, 19, 20, 40, 15, 25]))
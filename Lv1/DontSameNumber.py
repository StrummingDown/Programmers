def solution(arr):
    answer = [] # 정답을 담을 배열
    j = -1 # 바로 앞의 인덱스의 요소를 나타내줄 변수
    for i in arr: # 입력받은 배열 순회
        if i != j: # 배열의 요소가 변소 j와 다르다면, 
            j = i  # 중복 값을 판단해주기 위해 j에 i의 값 할당
            answer.append(i) # 중복앖이 아니므로 정답 배열에 추가

    return answer # 정답 배열 리턴
print(solution([1,1,3,3,0,1,1]))
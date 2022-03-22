
def solution(land):
  for i in range(1, len(land)): # 두번째 행부터 조회한다. (첫 번쨰 행은 그 위의 더해줄 행이 없기 떄문)
      for j in range(len(land[0])): # 행의 요소들을 조회한다.
        land[i][j] += max(land[i-1][0:j] + land[i-1][j+1:]) # 각 요소들에 자신의 인덱스를 제외한 이전 행의 요소들 중 가장 큰 수와 더해준다.
  return max(land[-1]) # 마지막 행의 오소 중 가장 큰 수 리턴

print(solution([[1,2,3,5],[5,6,7,8],[4,3,2,1]]))


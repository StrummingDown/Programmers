#  문제링크
#  https://programmers.co.kr/learn/courses/30/lessons/1845
def solution(nums):
    choice = len(nums) / 2
    nums = len(set(nums))
    answer = min(choice,nums)    
    return answer
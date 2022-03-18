# 문제링크
# https://programmers.co.kr/learn/courses/30/lessons/42840

def solution(answers):
    student1 = list(range(1,6)) * 2000
    score1 = 0
    student2 = [2,1,2,3,2,4,2,5] * 1300
    score2 = 0
    student3 = [3,3,1,1,2,2,4,4,5,5] * 1000
    score3 = 0
    answer = []
    for idx in range(len(answers)):
        if answers[idx] == student1[idx]:
            score1 += 1
        if answers[idx] == student2[idx]:
            score2 += 1
        if answers[idx] == student3[idx]:
            score3 += 1   
    if score1 >= score2 and score1 >= score3:
        if score1 == score2:
            if score2 == score3:
                answer.append(1)
                answer.append(2)
                answer.append(3)
            else:
                answer.append(1)
                answer.append(2)
        elif score1 == score3:
            answer.append(1)
            answer.append(3)

        else:
            answer.append(1)
    elif score2 >= score1 and score2 >= score3:
        if score2 == score1:
            if score2 == score3:
                answer.append(1)
                answer.append(2)
                answer.append(3)
            else:
                answer.append(1)
                answer.append(2)
        elif score2 == score3:
            answer.append(2)
            answer.append(3)
        else:
            answer.append(2)
    elif score3 >= score1 and score3 >= score2:
        if score3 == score1:
            if score2 == score3:
                answer.append(1)
                answer.append(2)
                answer.append(3)
            else:
                answer.append(1)
                answer.append(3)
        elif score3 == score2:
            answer.append(2)
            answer.append(3)
        else:
            answer.append(3)
    return answer

# print(solution([1,2,3,4,5]))
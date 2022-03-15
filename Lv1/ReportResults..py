# # 문제 링크
# # https://programmers.co.kr/learn/courses/30/lessons/92334?language=python3 

# 첫번째 접근 방법 (하다가 실패..)
# def solution(id_list, report, k):
#     ex = set(report)
#     report_list = [] # 신고당한 유저
#     report_count = {} # 신고당한 횟수
#     stop_list = [] # 정지된 유저
#     final_list = {string : 0 for string in id_list}
#     answer = []
    # print(report)
#     for id in id_list:
#         report_count[id] = 0; # 신고당한 횟수를 담기 위한 딕셔너리

#     for report_id in ex : 
#         report_list.append(report_id.split(' ')[1]) # 신고당한 유저를 추가
    # print(report_list)

#     for i in range(0,len(report_list)):
#         if report_list[i] in report_count : # 몇번 신고당했는지 카운트
#             report_count[report_list[i]] += 1
    # print(report_count)

#     for i in report_count: 
#         if(report_count[i] >= k): # K번 이상 신고당했다면 
#             stop_list.append(i) # 정지된 유저 리스트에 추가
    # print(stop_list)

#     for i in range(0, len(report)):
#         for j in range(0, len(stop_list)):
#             if report[i].split(' ')[1] == stop_list[j]:
#                  final_list[report[i].split(' ')[0]] += 1
#     print(final_list)
#     for i in final_list:
#         answer.append(final_list[i])
#     return answer




# print(solution(["con","ryan"],["ryan con", "ryan con", "ryan con", "ryan con"],3))




    # answer = []

    # return answer


# 두번쨰 접근 방법 (성공 !)
def solution(id_list, report, k):
    report = set(report) # 입력받은 신고자리스트의 중복값 제거 
    report = list(report) # 위에서 제거해준 값의 타입을 다시 리스트로 정의
    report_user = {} # 각각의 유저가 누구를 신고했는지 담아줄 딕셔너리
    report_count = {} # 각각의 유저가 몇번 신고당했는지 담아줄 딕셔너리
    stop_user = [] # 신고횟수가 K번 이상이여서 정지당한 유저들을 담아줄 리스트
    count_user = {} # 각각의 유저가 몇명을 정지시켰는지 담아줄 딕셔너리
    answer = [] # 각각의 유저가 정지시킨 유저가 몇명인지 정답을 당아줄 리스트 

    for user in id_list: # 유저리스트를 순회
        report_user[user] = [] # 위에 선언한 리스트와 딕셔너리에 유저의 이름과 값을 담아줄 리스트, 숫자 할당
        report_count[user] = 0
        count_user[user] = 0

    for user in report: # 신고자 리스트 순회
        report_user[user.split(" ")[0]].append(user.split(" ")[1]) # 공백을 기준으로 앞이 신고자, 뒤가 신고를 당한 자이므로 분리해서 할당 
        report_count[user.split(" ")[1]] += 1 # 몇번 신고당했는지 카운트
    
    for user in report_count: # 유저가 신고당한 횟수를 순회
        if report_count[user] >= k: # K번 이상 신고를 당했다면,
            stop_user.append(user) # 정지당한 유저 리스트에 추가

    for count in report_user: # 누가 신고했는지 담아준 딕셔너리 순회
        for isStop in stop_user: # 정지를 당한 유저리스트 순회
            if (isStop in report_user[count]): # 신고를 했던 유저가 정지를 당했다면,
                count_user[count] += 1 # 몇명이 정지당했는지 담아줄 딕셔너리의 값 증가
    
    for count in count_user: # 몇명이 정지 당했는지 알 수 있는 딕셔너리를 리스트화 시키기 위해서 순회
        answer.append(count_user[count]) # 정답 리스트에 값 추가
    return answer # 정답 리턴



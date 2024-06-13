import csv


with open('./dataLineup.csv', 'r',encoding='utf-8') as file:
    csv_reader = csv.DictReader(file,delimiter=',')
    list_cvt = list(csv_reader)
    dictTeamBlue = list_cvt[0]
    dictTeamRed = list_cvt[1]
    print(dictTeamBlue)
    list_player = []
    
    print(list_player)
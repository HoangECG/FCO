import csv


with open('./dataLineup.csv', 'r',encoding='utf-8') as file:
    csv_reader = csv.DictReader(file,delimiter=',')
    list_cvt = list(csv_reader)
    dictTeamBlue = list_cvt[0]
    # dictTeamRed = list_cvt[1]
    # print(dictTeamBlue)
    list_player = []
    for i in range(5):
        n = i+1
        dict = {'ID': n, 'player_name':f'{dictTeamBlue[f'player {n}']}', 'KDA': f'{dictTeamBlue[f'KDA {n}']}', 'rankKDA': f'#{dictTeamBlue[f'Rank KDA {n}']} of {dictTeamBlue['\ufeffT']}','MVP':f'{dictTeamBlue[f'MVP {n}']}','rankMVP': f'#{dictTeamBlue[f'Rank MVP {n}']} of {dictTeamBlue['\ufeffT']}' }
        list_player.append(dict)
    print(list_player)
import json
item = 'crn-sgp-vgm-3'

idlist = ['1','2','3']

if item.split("-")[0] == "crn":
    spldata = item.split("-")
    newID = int(max(idlist)) + 1
    newMatch = {}
    dictTeam1 = {}
    dictTeam2 = {}
    with open('./database/teams.json', 'r') as file:
        data = json.load(file)
        print(data.keys())
        


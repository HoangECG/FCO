import json

def getTeams():
    listTeam = []
    with open('./database/teams.json', 'r') as file:
        data = json.load(file)
        listTeam = list(data.keys())
    text = 'sgp'
    return data[text.upper()]


print(getTeams())
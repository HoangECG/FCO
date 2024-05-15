from fastapi import FastAPI, Request, Body
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from typing import Dict, Any
import uvicorn
import os
import json
from fastapi import WebSocket, WebSocketDisconnect
import csv

app = FastAPI()
# Cors accept
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def getID():
    listID = []
    for files in os.listdir('./database/match'):
        index = files.rfind(".")
        listID.append(files[:index])
    return listID
def getTeams():
    listTeam = []
    with open('./database/teams.json', 'r') as file:
        data = json.load(file)
        listTeam = data.keys()
    return listTeam
chat_count = False
@app.get("/api/{item}")
async def response(item: str):
    global chat_count
    if item == "listmatchID":
        try:
            getListID = getID()
            return {"listmatchID":getListID, "listTeam": list(getTeams())}
        except:
            return {"listmatchID":[]}
    elif item.isnumeric() == True:
        try:
            with open(f'./database/match/{item}.json','r') as file:
                data = json.load(file)
                return data
        except:
            return "notFound"
    elif item.split("-")[0] == "crn":
        spldata = item.split("-")
        newID = int(max(getID())) + 1
        newMatch = {}
        dictTeam1 = {}
        dictTeam2 = {}
        with open('./database/teams.json', 'r') as file:
            data = json.load(file)
            dictTeam1 = data[spldata[1].upper()]
            dictTeam2 = data[spldata[2].upper()]
        newMatch["matchId"] = f"{newID}"
        newMatch["matchName"] = "Match"
        newMatch["round"] = "round"
        newMatch["bo"] = spldata[3]
        newMatch["team-1"] = dictTeam1["team"]
        newMatch["fullNameTeam-1"] = dictTeam1["fullName"]
        newMatch["team-2"] = dictTeam2["team"]
        newMatch["fullNameTeam-2"] = dictTeam2["fullName"]
        newMatch["lineUpFull-1"] = dictTeam1["players"]
        newMatch["lineUpFull-2"] = dictTeam2["players"]
        listGame = []
        for i in range(int(spldata[3])):
            status = "pending"
            if i == 0:
                status="start"
            listGame.append({
                "game": f"{i+1}",
                "status":f"{status}",
                "teamBlue": dictTeam1["team"],
                "fullNameTeamBlue":dictTeam1["fullName"],
                "teamRed":dictTeam2["team"],
                "fullNameTeamRed":dictTeam2["fullName"],
                "lineUpBlue": dictTeam1["players"][0:5],
                "lineUpRed": dictTeam2["players"][0:5],
                "pickBlue": ["pick1","pick2","pick3","pick4","pick5"],
                "pickRed": ["pick1","pick2","pick3","pick4","pick5"],
                "win":"pending"
            })
        newMatch["gameInfo"] = listGame
        with open(f'./database/match/{newID}.json','w') as file2:
            json.dump(newMatch,file2)
        return newID
    elif item == "bracket":
        # waiting create match
        with open(f'./database/bracket.json','r') as file:
            data = json.load(file)
            return data
    elif item == "last":
        lastID = max(getID())
        with open(f'./database/match/{lastID}.json','r') as file:
            data = json.load(file)
            return data
    elif item.split("-")[0] == "lineup":
        rqRCV = item.split("-")
        if rqRCV[1] == "blue":
            with open('./dataLineup.csv', 'r',encoding='utf-8') as file:
                csv_reader = csv.DictReader(file,delimiter=',')
                list_cvt = list(csv_reader)
                dictTeam = list_cvt[0]
                # dictTeamRed = list_cvt[1]
                list_player = []
                list_player.append({'Team': f'{dictTeam['\ufeffT']}','fullname':f'{dictTeam['Fullname']}'})
                for i in range(5):
                    n = i+1
                    dict = {'ID': n, 'player_name':f'{dictTeam[f'player {n}']}', 'KDA': f'{dictTeam[f'KDA {n}']}', 'rankKDA': f'#{dictTeam[f'Rank KDA {n}']} of {dictTeam['\ufeffT']}','MVP':f'{dictTeam[f'MVP {n}']}','rankMVP': f'#{dictTeam[f'Rank MVP {n}']} of {dictTeam['\ufeffT']}' }
                    list_player.append(dict)
                return list_player
        else:
            with open('./dataLineup.csv', 'r',encoding='utf-8') as file:
                csv_reader = csv.DictReader(file,delimiter=',')
                list_cvt = list(csv_reader)
                dictTeam = list_cvt[1]
                # dictTeamRed = list_cvt[1]
                list_player = []
                list_player.append({'Team': f'{dictTeam['\ufeffT']}','fullname':f'{dictTeam['Fullname']}'})
                for i in range(5):
                    n = i+1
                    dict = {'ID': n, 'player_name':f'{dictTeam[f'player {n}']}', 'KDA': f'{dictTeam[f'KDA {n}']}', 'rankKDA': f'#{dictTeam[f'Rank KDA {n}']} of {dictTeam['\ufeffT']}','MVP':f'{dictTeam[f'MVP {n}']}','rankMVP': f'#{dictTeam[f'Rank MVP {n}']} of {dictTeam['\ufeffT']}' }
                    list_player.append(dict)
                return list_player
            
    # elif item == "count1":
    #     with open(f'../tools/chatytcount.json','r') as file:
    #         data = json.load(file)
    #     if chat_count:
    #         data['count1'] +=1
    #     with open(f'../tools/chatytcount.json','w') as file:
    #         data = json.dump(data,file)

    # elif item == "count2":
    #     with open(f'../tools/chatytcount.json','r') as file:
    #         data = json.load(file)
    #     if chat_count:
    #         data['count2'] +=1
    #     with open(f'../tools/chatytcount.json','w') as file:
    #         data = json.dump(data,file)
    # elif item == "chatytcount":
    #     with open(f'../tools/chatytcount.json','r') as file:
    #         data = json.load(file)
    #     return data
    # elif item == "startcount":
    #     chat_count = True
    # elif item == "stopcount":
    #     chat_count = False
    # elif item == "resetcount":
    #     with open(f'../tools/chatytcount.json','r') as file:
    #         data = json.load(file)
    #         data['count1'] = 0
    #         data['count2'] = 0
    #     with open(f'../tools/chatytcount.json','w') as file:
    #         data = json.dump(data,file)
    else:
        return {"status":"nodata"}

class Rcv(BaseModel):
    rcv: str

@app.post("/api/post/{item}")
async def reciveItem(rcv: Request,item: str):
    if item.isnumeric() == True:
        with open(f'./database/match/{item}.json', 'w') as filew:
            json.dump(await rcv.json(),filew)
            return {"status":"DONE"}
    if item == 'crm':
        data = await rcv.json()

        pass

# websocket def
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            await connection.send_text(message)


manager = ConnectionManager()

# get list id match in match folder

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(f"{data}")
            # print(data)
            response_json = json.dumps({'IDList': getID()})
            if data == 'MatchID-check':
                await manager.send_personal_message(response_json,websocket)

    except WebSocketDisconnect:
        manager.disconnect(websocket)
        await manager.broadcast(f"Client #{client_id} disconnected")
    

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=14596)
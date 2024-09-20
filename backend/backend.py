from fastapi import FastAPI, Request, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Dict, Any
import uvicorn
import os
import json
from fastapi import WebSocket, WebSocketDisconnect
import os.path
import requests
from time import sleep



# configurations
spreadsheet_id = '1rdSU9mEy7yHltRfwvLFlllAbxhW_yvJyNcBFJxMv2gA'
api_key = 'AIzaSyARx2UnEZ_gUra4BNBc6_xGYkTX-7TvWDY'
sheet_name = "data"





# app fastapi
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
        listTeam = list(data.keys())
    return listTeam

# app
@app.get("/api/{item}")
async def response(item: str):
    if item == "pulldatasheet":
        url = f'https://sheets.googleapis.com/v4/spreadsheets/{spreadsheet_id}/values/{sheet_name}!A1:B?alt=json&key={api_key}'
        response = requests.get(url)
        sheet_data = data = response.json()
        if sheet_data:
            datapull = {}
            for i in sheet_data['values']:
                datapull[i[0]] = i[1]
            with open(f'./database/crrmatch.json', 'w') as filew:
                json.dump(datapull,filew)
            return datapull
        else:
            print("Failed to fetch data from Google Sheets API.")
    
    elif item == "crrmatch":
        with open(f'./database/crrmatch.json','r') as file:
            data = json.load(file)
            return data
    elif item =="listteam":
        return getTeams()
    elif item.split("-")[0] == "namefull":
        rqRCV = item.split("-")
        lineupFull = []
        if len(item.split("-")) > 1:
            with open('./database/teams.json', 'r') as file:
                data = json.load(file)
                try:
                    namefull = data[rqRCV[1]]['fullName']
                    return namefull
                except:
                    return False
        else:
            pass
    elif item.split("-")[0] == "lineupfull":
        rqRCV = item.split("-")
        lineupFull = []
        if len(item.split("-")) > 1:
            with open('./database/teams.json', 'r') as file:
                data = json.load(file)
                try:
                    lineupFull = list(data[rqRCV[1]]['players'])
                    return lineupFull
                except:
                    return False
        else:
            pass
    else:
        return {"status":"nodata"}

class Rcv(BaseModel):
    rcv: str

@app.post("/api/post/{item}")
async def reciveItem(rcv: Request,item: str):
    pass
    if item.isnumeric() == True:
        with open(f'./database/match/{item}.json', 'w') as filew:
            json.dump(await rcv.json(),filew)
            return {"status":"DONE"}
    if item == 'crm':
        if type(await rcv.json()) is dict:
            with open(f'./database/match/crrmatch.json', 'w') as filew:
                json.dump(await rcv.json(),filew)
                return {"status":"DONE"}
        return True

# websocket def as
class ConnectionManager:
    def __init__(self):
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    async def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)

    async def send_personal_message(self, message: str, websocket: WebSocket):
        await websocket.send_text(message)

    async def broadcast(self, message: str):
        for connection in self.active_connections:
            try:
                await connection.send_text(message)
            except:
                pass


manager = ConnectionManager()

# get list id match in match folder

@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket: WebSocket, client_id: int):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            await manager.broadcast(f"{data}")

    except WebSocketDisconnect:
        manager.disconnect(websocket)
    

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=10045)
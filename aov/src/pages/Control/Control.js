import React, {  } from "react";
import "./Control.css"
import NavBar from "../NavBar/NavBar"
import './Control.css'
import * as beAPI from '../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)

window.localStorage.setItem('lineup-blue-on','false')

function handleOnClick(e){
    if (e.target.id === 'lineup-blue-on'){
        ws.send('lineup-blue-on')
        window.localStorage.setItem('lineup-blue-on','true')
    }
    else if (e.target.id === 'lineup-red-on') {
        ws.send('lineup-red-on')
        window.localStorage.setItem('lineup-red-on','true')
    }
    else if (e.target.id === 'set-lineup-blue') {
        ws.send('set-lineup-blue')
        window.localStorage.setItem('set-lineup-blue','true')
    }
    else if (e.target.id === 'set-lineup-red') {
        ws.send('set-lineup-red')
        window.localStorage.setItem('set-lineup-red','true')
    }else{
        ws.send(e.target.id)
    }
}
// ws.onmessage = function(event){
//     console.log(event.data)
// }
// function ClickChatStart(){
//     fetch(`http://localhost:14596/api/startcount`)
// }
// function ClickChatStop(){
//     fetch(`http://localhost:14596/api/stopcount`)
// }
// function ClickChatReset(){
//     fetch(`http://localhost:14596/api/resetcount`)
// }

function Control(){
    return (
        <div className="main-container">
            <NavBar/>
            <ul id="status-bar-ul">
                <li>No layout on air</li>
            </ul>
            <div className="control-body">
                <div id="lineup-blue-btn" className="control-btn-ctn">
                    <button type="button" id="set-lineup-blue" className="button-style" onClick={handleOnClick}>Set Lineup Team Blue</button>
                    <button type="button" id="lineup-blue-on" className="button-style" onClick={handleOnClick}>Lineup Team Blue Show</button>
                </div>
                <div id="lineup-blue-btn" className="control-btn-ctn">
                    <button type="button" id="set-lineup-red" className="button-style" onClick={handleOnClick}>Set Lineup Team Red</button>
                    <button type="button" id="lineup-red-on" className="button-style" onClick={handleOnClick}>Lineup Team Red Show</button>
                </div>
                <div id="predic-ctn" className="control-btn-ctn">
                    <button type="button" id="show-tabswin" className="button-style" onClick={handleOnClick}>Show tab win</button>
                </div>
                <div className="control-btn-ctn">
                    <button type="button" className="button-style">chat start</button>
                </div>
                <div className="control-btn-ctn">
                    <button type="button" className="button-style">chat stop</button>
                </div>
                <div className="control-btn-ctn">
                    <button type="button" className="button-style">chat reset</button>
                </div>
            </div>
        </div>
    )
}

export default Control
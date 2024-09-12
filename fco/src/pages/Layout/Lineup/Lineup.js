import React, { useState } from 'react';
import './Lineup.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



export default function Lineup() {
    const [logoLeft, setLogoLeft] = useState('HN')
    const [teamLeft, setTeamLeft] = useState('Hà Nội')
    const [lineupLeft, setLineupLeft] = useState(['1','2','3','4'])
    const [logoRight, setLogoRight] = useState('HN')
    const [teamRight, setTeamRight] = useState('Hà Nội')
    const [lineupRight, setLineupRight] = useState(['1','2','3','4'])

    // websocket listen
    ws.onmessage = function(event){
        if (event.data === 'lineup-start'){
            startLayout()
        }
    }
    // end websocket listen
    // render Logo import player
    function importLogo(nameImg){
        const logo = require('../logo/'+ nameImg +'.png')
        return logo
    }
    function importplayer(nameImg){
        const logo = require('../player/'+ nameImg +'.png')
        return logo
    }
    // start layout animation
    function startLayout(){
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','100%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--bg-width','80vh')
                setRoot('--bg-height','80vh')
                setRoot('--logo-width','80vh')
                setRoot('--logo-height','80vh')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1500)
                })
            })
            .then(function(){
                setRoot('--bg-width','80vw')
                setRoot('--bg-height','80vh')
                setRoot('--logo-width','150px')
                setRoot('--logo-height','150px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1500)
                })
            })
    }
    // render player
    function renderPlayer(props,index){
        return (
            <div key={index} id={'player-lineup-'+props.ID} className='player-lineup-style colum-ctn'>
                <div className={'player_lineup_KDA onOff'+props.ID}>{props.KDA}</div>
                <div className={'player_lineup_Rank onOff'+props.ID}>{props.rankKDA}</div>
                <div className={'player_lineup_MVP onOff'+props.ID}>{props.MVP}</div>
                <div className={'player_lineup_Rank onOff'+props.ID}>{props.rankMVP}</div>
                <div id={'player_lineup-tabname-'+props.ID} className='player_lineup-tabname row-ctn'>
                    <div className='player_lineup-role'></div>
                    <div id={'player_lineup-playername-'+props.ID} className='player_lineup-playername'>
                        {props.player_name}
                    </div>
                </div>
                <img className='player-lineup-img' src={importplayer(props.player_name)} alt='img'></img>
            </div>
        )
    }
    return (
        <div id="lineup-master">
            <div id='background'>
                <div id="lineup-ctn" className='colum-ctn'>
                    <div className='logo-team-ctn'>
                        <img className='logo-team' src={importLogo(logoTeam)} alt='logo'></img>
                    </div>
                    <div id='team-name-tab'>{teamName}</div>
                    <div id='line'/>
                    <div id='player-ctn'>
                        {dataTeam.map(renderPlayer)}
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, { useState } from 'react';
import './Lineup.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)

var listPlayer_lineup_blue = [
    {'ID': '1', 'player_name':'HN.Kunaj', 'KDA': '3.98', 'rankKDA': '#4 of HN','MVP':'7.88','rankMVP': '#3 of HN' },
    {'ID': '2', 'player_name':'HN.ĐứcHuy', 'KDA': '4.64', 'rankKDA': '#3 of HN','MVP':'7.28','rankMVP': '#6 of HN' },
    {'ID': '3', 'player_name':'HN.ThếKhải', 'KDA': '4.83', 'rankKDA': '#1 of HN','MVP':'8.56','rankMVP': '#1 of HN' },
    {'ID': '4', 'player_name':'HN.DA', 'KDA': '4.29', 'rankKDA': '#3 of HN','MVP':'7.88','rankMVP': '#2 of HN' },
    {'ID': '5', 'player_name':'HN.NoHappy', 'KDA': '3.65', 'rankKDA': '#5 of HN','MVP':'7.75','rankMVP': '#5 of HN' },]

var listPlayer_lineup_red = [
    {'ID': '1', 'player_name':'BĐ.14.03', 'KDA': '2.6', 'rankKDA': '#6 of BĐ','MVP':'7.54','rankMVP': '#6 of BĐ' },
    {'ID': '2', 'player_name':'BĐ.Nện', 'KDA': '4.17', 'rankKDA': '#4 of BĐ','MVP':'8.29','rankMVP': '#3 of BĐ' },
    {'ID': '3', 'player_name':'BĐ.Bơ', 'KDA': '11.78', 'rankKDA': '#1 of BĐ','MVP':'9.42','rankMVP': '#1 of BĐ' },
    {'ID': '4', 'player_name':'BĐ.AnhTân', 'KDA': '2.98', 'rankKDA': '#5 of BĐ','MVP':'7.74','rankMVP': '#5 of BĐ' },
    {'ID': '5', 'player_name':'BĐ.YuCon', 'KDA': '4.95', 'rankKDA': '#3 of BĐ','MVP':'8.31','rankMVP': '#2 of BĐ' },]


function startLayout(e){
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
        .then(function(){
            setRoot('--left-1','0')
            setRoot('--flex-1','3.5')
            setRoot('--pos-name1','200px')
            setRoot('--flex-name-1','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-1','-500px')
            setRoot('--flex-1','1')
            setRoot('--pos-name1','0')
            setRoot('--flex-name-1','0')
            setRoot('--left-2','0px')
            setRoot('--flex-2','3.5')
            setRoot('--pos-name2','200px')
            setRoot('--flex-name-2','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-2','-500px')
            setRoot('--flex-2','1')
            setRoot('--pos-name2','0')
            setRoot('--flex-name-2','0')
            setRoot('--left-3','0px')
            setRoot('--flex-3','3.5')
            setRoot('--pos-name3','200px')
            setRoot('--flex-name-3','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-3','-500px')
            setRoot('--flex-3','1')
            setRoot('--pos-name3','0')
            setRoot('--flex-name-3','0')
            setRoot('--left-4','0px')
            setRoot('--flex-4','3.5')
            setRoot('--pos-name4','200px')
            setRoot('--flex-name-4','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-4','-500px')
            setRoot('--flex-4','1')
            setRoot('--pos-name4','0')
            setRoot('--flex-name-4','0')
            setRoot('--left-5','0px')
            setRoot('--flex-5','3.5')
            setRoot('--pos-name5','200px')
            setRoot('--flex-name-5','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-5','-500px')
            setRoot('--flex-1','1')
            setRoot('--flex-2','1')
            setRoot('--flex-3','1')
            setRoot('--flex-4','1')
            setRoot('--flex-5','1')
            setRoot('--pos-name1','200px')
            setRoot('--pos-name2','200px')
            setRoot('--pos-name3','200px')
            setRoot('--pos-name4','200px')
            setRoot('--pos-name5','200px')
            setRoot('--flex-name-1','3')
            setRoot('--flex-name-2','3')
            setRoot('--flex-name-3','3')
            setRoot('--flex-name-4','3')
            setRoot('--flex-name-5','3')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            rootStyle.setProperty('--opacity','0%')
            return new Promise( function(resolve){
                setTimeout(resolve, 1000)
            })
        })
        .then(function(){
            setRoot('--bg-width','20vh')
            setRoot('--bg-height','20vh')
            setRoot('--logo-width','20vh')
            setRoot('--logo-height','20vh')
            setRoot('--pos-name1','0px')
            setRoot('--pos-name2','0px')
            setRoot('--pos-name3','0px')
            setRoot('--pos-name4','0px')
            setRoot('--pos-name5','0px')
            setRoot('--flex-name-1','0')
            setRoot('--flex-name-2','0')
            setRoot('--flex-name-3','0')
            setRoot('--flex-name-4','0')
            setRoot('--flex-name-5','0')
            return new Promise( function(resolve){
                setTimeout(resolve, 1500)
            })
        })
}


function importLogo(nameImg){
    const logo = require('../logo/'+ nameImg +'.png')
    return logo
}
function importplayer(nameImg){
    const logo = require('../player/'+ nameImg +'.png')
    return logo
}

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


export default function Lineup() {
    const [logoTeam, setLogo] = useState('HN')
    const [teamName, setTeamName] = useState('Hà Nội')
    const [dataTeam, setDataTeam] = useState(listPlayer_lineup_blue)
    ws.onmessage = function(event){
        if (event.data === 'lineup-blue-on'){
            startLayout()
        }
        if (event.data === 'lineup-red-on'){
            startLayout()
        }
        if(event.data === 'set-lineup-blue'){
            setLogo('HN')
            setTeamName('Hà Nội')
            setDataTeam(listPlayer_lineup_blue)
            console.log('Done-Set team HN done')
        }
        if(event.data === 'set-lineup-red'){
            setLogo('BD')
            setTeamName('Bình Định')
            setDataTeam(listPlayer_lineup_red)
            console.log('Done-Set team BD done')
        }
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
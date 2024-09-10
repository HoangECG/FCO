import React, { useState,useEffect } from 'react';
import './LineupBlue.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



function startLayout(e){
    const rootStyle = document.documentElement.style;
    function setRoot(a,b){
        return( rootStyle.setProperty(a,b)) 
    }
    rootStyle.setProperty('--opacity-blue','100%')
    const p = Promise.resolve('pass')
        p.then(function(){
            setRoot('--bg-width-blue','80vh')
            setRoot('--bg-height-blue','80vh')
            setRoot('--logo-width-blue','80vh')
            setRoot('--logo-height-blue','80vh')
            return new Promise( function(resolve){
                setTimeout(resolve, 1500)
            })
        })
        .then(function(){
            setRoot('--bg-width-blue','80vw')
            setRoot('--bg-height-blue','80vh')
            setRoot('--logo-width-blue','150px')
            setRoot('--logo-height-blue','150px')
            return new Promise( function(resolve){
                setTimeout(resolve, 1500)
            })
        })
        .then(function(){
            setRoot('--left-1-blue','0')
            setRoot('--flex-1-blue','3.5')
            setRoot('--pos-name1-blue','200px')
            setRoot('--flex-name-1-blue','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 5000)
            })
        })
        .then(function(){
            setRoot('--left-1-blue','-500px')
            setRoot('--flex-1-blue','1')
            setRoot('--pos-name1-blue','0')
            setRoot('--flex-name-1-blue','0')
            setRoot('--left-2-blue','0px')
            setRoot('--flex-2-blue','3.5')
            setRoot('--pos-name2-blue','200px')
            setRoot('--flex-name-2-blue','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 5000)
            })
        })
        .then(function(){
            setRoot('--left-2-blue','-500px')
            setRoot('--flex-2-blue','1')
            setRoot('--pos-name2-blue','0')
            setRoot('--flex-name-2-blue','0')
            setRoot('--left-3-blue','0px')
            setRoot('--flex-3-blue','3.5')
            setRoot('--pos-name3-blue','200px')
            setRoot('--flex-name-3-blue','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 5000)
            })
        })
        .then(function(){
            setRoot('--left-3-blue','-500px')
            setRoot('--flex-3-blue','1')
            setRoot('--pos-name3-blue','0')
            setRoot('--flex-name-3-blue','0')
            setRoot('--left-4-blue','0px')
            setRoot('--flex-4-blue','3.5')
            setRoot('--pos-name4-blue','200px')
            setRoot('--flex-name-4-blue','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 5000)
            })
        })
        .then(function(){
            setRoot('--left-4-blue','-500px')
            setRoot('--flex-4-blue','1')
            setRoot('--pos-name4-blue','0')
            setRoot('--flex-name-4-blue','0')
            setRoot('--left-5-blue','0px')
            setRoot('--flex-5-blue','3.5')
            setRoot('--pos-name5-blue','200px')
            setRoot('--flex-name-5-blue','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 5000)
            })
        })
        .then(function(){
            setRoot('--left-5-blue','-500px')
            setRoot('--flex-1-blue','1')
            setRoot('--flex-2-blue','1')
            setRoot('--flex-3-blue','1')
            setRoot('--flex-4-blue','1')
            setRoot('--flex-5-blue','1')
            setRoot('--pos-name1-blue','200px')
            setRoot('--pos-name2-blue','200px')
            setRoot('--pos-name3-blue','200px')
            setRoot('--pos-name4-blue','200px')
            setRoot('--pos-name5-blue','200px')
            setRoot('--flex-name-1-blue','3')
            setRoot('--flex-name-2-blue','3')
            setRoot('--flex-name-3-blue','3')
            setRoot('--flex-name-4-blue','3')
            setRoot('--flex-name-5-blue','3')
            return new Promise( function(resolve){
                setTimeout(resolve, 10000)
            })
        })
        .then(function(){
            rootStyle.setProperty('--opacity-blue','0%')
            return new Promise( function(resolve){
                setTimeout(resolve, 1000)
            })
        })
        .then(function(){
            setRoot('--bg-width-blue','20vh')
            setRoot('--bg-height-blue','20vh')
            setRoot('--logo-width-blue','20vh')
            setRoot('--logo-height-blue','20vh')
            setRoot('--pos-name1-blue','0px')
            setRoot('--pos-name2-blue','0px')
            setRoot('--pos-name3-blue','0px')
            setRoot('--pos-name4-blue','0px')
            setRoot('--pos-name5-blue','0px')
            setRoot('--flex-name-1-blue','0')
            setRoot('--flex-name-2-blue','0')
            setRoot('--flex-name-3-blue','0')
            setRoot('--flex-name-4-blue','0')
            setRoot('--flex-name-5-blue','0')
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
        <div key={index} id={'player-lineup-blue-'+props.ID} className='player-blue-lineup-style colum-ctn'>
            <div className={'player_lineup_KDA-blue onOff-blue'+props.ID}>{props.KDA}</div>
            <div className={'player_lineup_Rank-blue onOff-blue'+props.ID}>{props.rankKDA}</div>
            <div className={'player_lineup_MVP-blue onOff-blue'+props.ID}>{props.MVP}</div>
            <div className={'player_lineup_Rank-blue onOff-blue'+props.ID}>{props.rankMVP}</div>
            <div id={'player_lineup-blue-tabname-'+props.ID} className='player_lineup-blue-tabname row-ctn'>
                <div className='player_lineup-role'></div>
                <div id={'player_lineup-blue-playername-'+props.ID} className='player_lineup-blue-playername'>
                    {props.player_name}
                </div>
            </div>
            <img className='player-blue-lineup-img' src={importplayer(props.player_name)} alt='img'></img>
        </div>
    )
}


export default function Lineup() {
    var listPlayer_lineup_blue = [
        {'ID': '1', 'player_name':'TPHCM.Psyche', 'KDA': '3.98', 'rankKDA': '#4 of HN','MVP':'7.88','rankMVP': '#3 of HN' },
        {'ID': '2', 'player_name':'TPHCM.Psyche', 'KDA': '4.64', 'rankKDA': '#3 of HN','MVP':'7.28','rankMVP': '#6 of HN' },
        {'ID': '3', 'player_name':'TPHCM.Psyche', 'KDA': '4.83', 'rankKDA': '#1 of HN','MVP':'8.56','rankMVP': '#1 of HN' },
        {'ID': '4', 'player_name':'TPHCM.Psyche', 'KDA': '4.29', 'rankKDA': '#3 of HN','MVP':'7.88','rankMVP': '#2 of HN' },
        {'ID': '5', 'player_name':'TPHCM.Psyche', 'KDA': '3.65', 'rankKDA': '#5 of HN','MVP':'7.75','rankMVP': '#5 of HN' },] 
    
    // const request_data = async (i) => {
    //     var res = await beAPI.GetLineUpInfo(i)
    //             // res.then( response => {
    //             //     // var teamshort = response[0]['Team']
    //             //     // var teamfull = response[0]['fullname']
    //             //     // var teaminfo = response.slice(1)
    //             //     // listPlayer_lineup_blue = response.slice(1)
    //             //     return response.slice(1)
    //             // })
    //     return res
    // }
    
    // console.log(request_data('blue').then())
    
    const [logoTeam, setLogo] = useState('TN')
    const [teamName, setTeamName] = useState('Hà Nội')
    const [dataTeam, setDataTeam] = useState(listPlayer_lineup_blue)

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.GetLineUpInfo('blue')
            setLogo(response[0]['Team'])
            setTeamName(response[0]['fullname'])
            setDataTeam(response.slice(1))
        }
    
        fetchMyAPI()
      }, [])



    ws.onmessage = function(event){
        if (event.data === 'lineup-blue-on'){
            startLayout()
        }
        if(event.data === 'set-lineup-blue'){
            var res = beAPI.GetLineUpInfo('blue')
            res.then( response => {
                setLogo(response[0]['Team'])
                setTeamName(response[0]['fullname'])
                // console.log(response.slice(1))
                setDataTeam(response.slice(1))
            })
            console.log('Done-Set team BLUE done')
        }
    }
    
    return (
        <div id="lineup-blue-master">
            <div id='background-blue'>
                <div id="lineup-blue-ctn" className='colum-ctn'>
                    <div className='logo-team-blue-ctn'>
                        <img className='logo-team-blue' src={importLogo(logoTeam)} alt='logo'></img>
                    </div>
                    <div id='team-blue-name-tab'>{teamName}</div>
                    <div id='line-blue'/>
                    <div id='player-blue-ctn'>
                        {dataTeam.map(renderPlayer)}
                    </div>
                </div>
            </div>
        </div>
    )
}
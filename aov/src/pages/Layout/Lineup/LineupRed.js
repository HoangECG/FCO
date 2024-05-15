import React, { useState,useEffect } from 'react';
import './LineupRed.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



function startLayout(e){
    const rootStyle = document.documentElement.style;
    function setRoot(a,b){
        return( rootStyle.setProperty(a,b)) 
    }
    rootStyle.setProperty('--opacity-red','100%')
    const p = Promise.resolve('pass')
        p.then(function(){
            setRoot('--bg-width-red','80vh')
            setRoot('--bg-height-red','80vh')
            setRoot('--logo-width-red','80vh')
            setRoot('--logo-height-red','80vh')
            return new Promise( function(resolve){
                setTimeout(resolve, 1500)
            })
        })
        .then(function(){
            setRoot('--bg-width-red','80vw')
            setRoot('--bg-height-red','80vh')
            setRoot('--logo-width-red','150px')
            setRoot('--logo-height-red','150px')
            return new Promise( function(resolve){
                setTimeout(resolve, 1500)
            })
        })
        .then(function(){
            setRoot('--left-1-red','0')
            setRoot('--flex-1-red','3.5')
            setRoot('--pos-name1-red','200px')
            setRoot('--flex-name-1-red','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-1-red','-500px')
            setRoot('--flex-1-red','1')
            setRoot('--pos-name1-red','0')
            setRoot('--flex-name-1-red','0')
            setRoot('--left-2-red','0px')
            setRoot('--flex-2-red','3.5')
            setRoot('--pos-name2-red','200px')
            setRoot('--flex-name-2-red','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-2-red','-500px')
            setRoot('--flex-2-red','1')
            setRoot('--pos-name2-red','0')
            setRoot('--flex-name-2-red','0')
            setRoot('--left-3-red','0px')
            setRoot('--flex-3-red','3.5')
            setRoot('--pos-name3-red','200px')
            setRoot('--flex-name-3-red','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-3-red','-500px')
            setRoot('--flex-3-red','1')
            setRoot('--pos-name3-red','0')
            setRoot('--flex-name-3-red','0')
            setRoot('--left-4-red','0px')
            setRoot('--flex-4-red','3.5')
            setRoot('--pos-name4-red','200px')
            setRoot('--flex-name-4-red','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-4-red','-500px')
            setRoot('--flex-4-red','1')
            setRoot('--pos-name4-red','0')
            setRoot('--flex-name-4-red','0')
            setRoot('--left-5-red','0px')
            setRoot('--flex-5-red','3.5')
            setRoot('--pos-name5-red','200px')
            setRoot('--flex-name-5-red','7')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            setRoot('--left-5-red','-500px')
            setRoot('--flex-1-red','1')
            setRoot('--flex-2-red','1')
            setRoot('--flex-3-red','1')
            setRoot('--flex-4-red','1')
            setRoot('--flex-5-red','1')
            setRoot('--pos-name1-red','200px')
            setRoot('--pos-name2-red','200px')
            setRoot('--pos-name3-red','200px')
            setRoot('--pos-name4-red','200px')
            setRoot('--pos-name5-red','200px')
            setRoot('--flex-name-1-red','3')
            setRoot('--flex-name-2-red','3')
            setRoot('--flex-name-3-red','3')
            setRoot('--flex-name-4-red','3')
            setRoot('--flex-name-5-red','3')
            return new Promise( function(resolve){
                setTimeout(resolve, 2500)
            })
        })
        .then(function(){
            rootStyle.setProperty('--opacity-red','0%')
            return new Promise( function(resolve){
                setTimeout(resolve, 1000)
            })
        })
        .then(function(){
            setRoot('--bg-width-red','20vh')
            setRoot('--bg-height-red','20vh')
            setRoot('--logo-width-red','20vh')
            setRoot('--logo-height-red','20vh')
            setRoot('--pos-name1-red','0px')
            setRoot('--pos-name2-red','0px')
            setRoot('--pos-name3-red','0px')
            setRoot('--pos-name4-red','0px')
            setRoot('--pos-name5-red','0px')
            setRoot('--flex-name-1-red','0')
            setRoot('--flex-name-2-red','0')
            setRoot('--flex-name-3-red','0')
            setRoot('--flex-name-4-red','0')
            setRoot('--flex-name-5-red','0')
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
        <div key={index} id={'player-lineup-red-'+props.ID} className='player-red-lineup-style colum-ctn'>
            <div className={'player_lineup_KDA-red onOff-red'+props.ID}>{props.KDA}</div>
            <div className={'player_lineup_Rank-red onOff-red'+props.ID}>{props.rankKDA}</div>
            <div className={'player_lineup_MVP-red onOff-red'+props.ID}>{props.MVP}</div>
            <div className={'player_lineup_Rank-red onOff-red'+props.ID}>{props.rankMVP}</div>
            <div id={'player_lineup-red-tabname-'+props.ID} className='player_lineup-tabname row-ctn'>
                <div className='player_lineup-role'></div>
                <div id={'player_lineup-red-playername-'+props.ID} className='player_lineup-red-playername'>
                    {props.player_name}
                </div>
            </div>
            <img className='player-red-lineup-img' src={importplayer(props.player_name)} alt='img'></img>
        </div>
    )
}


export default function Lineup() {
    var listPlayer_lineup_red = [
        {'ID': '1', 'player_name':'HN.Kunaj', 'KDA': '3.98', 'rankKDA': '#4 of HN','MVP':'7.88','rankMVP': '#3 of HN' },
        {'ID': '2', 'player_name':'HN.ĐứcHuy', 'KDA': '4.64', 'rankKDA': '#3 of HN','MVP':'7.28','rankMVP': '#6 of HN' },
        {'ID': '3', 'player_name':'HN.ThếKhải', 'KDA': '4.83', 'rankKDA': '#1 of HN','MVP':'8.56','rankMVP': '#1 of HN' },
        {'ID': '4', 'player_name':'HN.DA', 'KDA': '4.29', 'rankKDA': '#3 of HN','MVP':'7.88','rankMVP': '#2 of HN' },
        {'ID': '5', 'player_name':'HN.NoHappy', 'KDA': '3.65', 'rankKDA': '#5 of HN','MVP':'7.75','rankMVP': '#5 of HN' },] 
    
    // const request_data = async (i) => {
    //     var res = await beAPI.GetLineUpInfo(i)
    //             // res.then( response => {
    //             //     // var teamshort = response[0]['Team']
    //             //     // var teamfull = response[0]['fullname']
    //             //     // var teaminfo = response.slice(1)
    //             //     // listPlayer_lineup_red = response.slice(1)
    //             //     return response.slice(1)
    //             // })
    //     return res
    // }
    
    // console.log(request_data('red').then())
    
    const [logoTeam, setLogo] = useState('HN')
    const [teamName, setTeamName] = useState('Hà Nội')
    const [dataTeam, setDataTeam] = useState(listPlayer_lineup_red)

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.GetLineUpInfo('red')
            setLogo(response[0]['Team'])
            setTeamName(response[0]['fullname'])
            setDataTeam(response.slice(1))
        }
    
        fetchMyAPI()
      }, [])



    ws.onmessage = function(event){
        if (event.data === 'lineup-red-on'){
            startLayout()
        }
        if(event.data === 'set-lineup-red'){
            var res = beAPI.GetLineUpInfo('red')
            res.then( response => {
                setLogo(response[0]['Team'])
                setTeamName(response[0]['fullname'])
                // console.log(response.slice(1))
                setDataTeam(response.slice(1))
            })
            console.log('Done-Set team red done')
        }
    }
    
    return (
        <div id="lineup-red-master">
            <div id='background-red'>
                <div id="lineup-red-ctn" className='colum-ctn'>
                    <div className='logo-team-red-ctn'>
                        <img className='logo-team-red' src={importLogo(logoTeam)} alt='logo'></img>
                    </div>
                    <div id='team-red-name-tab'>{teamName}</div>
                    <div id='line-red'/>
                    <div id='player-red-ctn'>
                        {dataTeam.map(renderPlayer)}
                    </div>
                </div>
            </div>
        </div>
    )
}
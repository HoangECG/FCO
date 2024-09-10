import React, { useState,useEffect } from 'react';
import './LineupNew.css';
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
            <div id={'player_lineup-red-tabname-'+props.ID} className='player_lineup-red-tabname row-ctn'>
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
        {'ID': '1', 'player_name':'TPHCM.Psyche', 'KDA': '3.98', 'rankKDA': '#4 of HN','MVP':'7.88','rankMVP': '#3 of HN' },
        {'ID': '2', 'player_name':'TPHCM.Psyche', 'KDA': '4.64', 'rankKDA': '#3 of HN','MVP':'7.28','rankMVP': '#6 of HN' },
        {'ID': '3', 'player_name':'TPHCM.Psyche', 'KDA': '4.83', 'rankKDA': '#1 of HN','MVP':'8.56','rankMVP': '#1 of HN' },
        {'ID': '4', 'player_name':'TPHCM.Psyche', 'KDA': '4.29', 'rankKDA': '#3 of HN','MVP':'7.88','rankMVP': '#2 of HN' },
        {'ID': '5', 'player_name':'TPHCM.Psyche', 'KDA': '3.65', 'rankKDA': '#5 of HN','MVP':'7.75','rankMVP': '#5 of HN' },
    ] 

    const [logoTeam, setLogo] = useState('TN')
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
        <div id="lineup-master-new">
            <div id='ptt-background-new'/>
            <div id='map-team-new'>
                
            </div>
        </div>
    )
}
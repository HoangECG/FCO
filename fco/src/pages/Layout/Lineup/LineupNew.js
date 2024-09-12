import React, { useState, useEffect } from 'react';
import './LineupNew.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



export default function Lineup() {
    const [game, setGame] = useState('1')
    const [logoLeft, setLogoLeft] = useState('SGP')
    const [teamLeft, setTeamLeft] = useState('Hà Nội')
    const [lineupLeft, setLineupLeft] = useState(['1','2','3','4'])
    const [logoRight, setLogoRight] = useState('VGM')
    const [teamRight, setTeamRight] = useState('Hà Nội')
    const [lineupRight, setLineupRight] = useState(['1','2','3','4'])
    const [bo, setBo] = useState('3')
    const [match,setMatch] = useState('match 1')
    const [playerName1, setPlayerName1] = useState('player 1')
    const [playerName2, setPlayerName2] = useState('player 2')
    const [playerName3, setPlayerName3] = useState('player 3')
    const [playerName4, setPlayerName4] = useState('player 4')
    const [playerName5, setPlayerName5] = useState('player 5')
    const [playerName6, setPlayerName6] = useState('player 6')
    const [playerName7, setPlayerName7] = useState('player 7')
    const [playerName8, setPlayerName8] = useState('player 8')
    const [scL1, setscL1] = useState('0')
    const [scL2, setscL2] = useState('0')
    const [scL3, setscL3] = useState('0')
    const [scL4, setscL4] = useState('0')
    const [scL5, setscL5] = useState('0')
    const [scR1, setscR1] = useState('0')
    const [scR2, setscR2] = useState('0')
    const [scR3, setscR3] = useState('0')
    const [scR4, setscR4] = useState('0')
    const [scR5, setscR5] = useState('0')
    const [pkL1, setpkL1] = useState('0')
    const [pkL2, setpkL2] = useState('0')
    const [pkL3, setpkL3] = useState('0')
    const [pkL4, setpkL4] = useState('0')
    const [pkL5, setpkL5] = useState('0')
    const [pkR1, setpkR1] = useState('0')
    const [pkR2, setpkR2] = useState('0')
    const [pkR3, setpkR3] = useState('0')
    const [pkR4, setpkR4] = useState('0')
    const [pkR5, setpkR5] = useState('0')

    // banpick const
    const [listChamp, setListChamp] = useState([])
    const [game1PlayerPickLeft, setGame1PlayerPickLeft] = useState('player1')
    const [game2PlayerPickLeft, setGame2PlayerPickLeft] = useState('player2')
    const [game3PlayerPickLeft, setGame3PlayerPickLeft] = useState('player3')
    const [game4PlayerPickLeft, setGame4PlayerPickLeft] = useState('player4')
    const [game5PlayerPickLeft, setGame5PlayerPickLeft] = useState('player5')
    const [game1PlayerPickRight, setGame1PlayerPickRight] = useState('player1')
    const [game2PlayerPickRight, setGame2PlayerPickRight] = useState('player2')
    const [game3PlayerPickRight, setGame3PlayerPickRight] = useState('player3')
    const [game4PlayerPickRight, setGame4PlayerPickRight] = useState('player4')
    const [game5PlayerPickRight, setGame5PlayerPickRight] = useState('player5')


    // fetch api
    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.Getcrrmatch()
            // get list champs name 
            setGame(await response['game'])
            setMatch(await response['matchName'])
            setBo(await response['bo'])
            setLogoLeft(await response['team-1'])
            setTeamLeft(await response['fullNameTeam-1'])
            setLogoRight(await response['team-2'])
            setTeamRight(await response['fullNameTeam-2'])
            setPlayerName1(await response['player1'])
            setPlayerName2(await response['player2'])
            setPlayerName3(await response['player3'])
            setPlayerName4(await response['player4'])
            setPlayerName5(await response['player5'])
            setPlayerName6(await response['player6'])
            setPlayerName7(await response['player7'])
            setPlayerName8(await response['player8'])
            setGame1PlayerPickLeft(await response['pickleft1'])
            setGame2PlayerPickLeft(await response['pickleft2'])
            setGame3PlayerPickLeft(await response['pickleft3'])
            setGame4PlayerPickLeft(await response['pickleft4'])
            setGame5PlayerPickLeft(await response['pickleft5'])
            setGame1PlayerPickRight(await response['pickright1'])
            setGame2PlayerPickRight(await response['pickright2'])
            setGame3PlayerPickRight(await response['pickright3'])
            setGame4PlayerPickRight(await response['pickright4'])
            setGame5PlayerPickRight(await response['pickright5'])
            setscL1(await response['scL1'])
            setscL2(await response['scL2'])
            setscL3(await response['scL3'])
            setscL4(await response['scL4'])
            setscL5(await response['scL5'])
            setscR1(await response['scR1'])
            setscR2(await response['scR2'])
            setscR3(await response['scR3'])
            setscR4(await response['scR4'])
            setscR5(await response['scR5'])
            setpkL1(await response['pkL1'])
            setpkL2(await response['pkL2'])
            setpkL3(await response['pkL3'])
            setpkL4(await response['pkL4'])
            setpkL5(await response['pkL5'])
            setpkR1(await response['pkR1'])
            setpkR2(await response['pkR2'])
            setpkR3(await response['pkR3'])
            setpkR4(await response['pkR4'])
            setpkR5(await response['pkR5'])
        }
        fetchMyAPI()
        }, [0])
    // start layout animation
    function startLayout(){
        // re-fetch api value
        async function fetchMyAPI2() {
            let response = await beAPI.Getcrrmatch()
            // get list champs name 
            setGame(await response['game'])
            setMatch(await response['matchName'])
            setBo(await response['bo'])
            setLogoLeft(await response['team-1'])
            setTeamLeft(await response['fullNameTeam-1'])
            setLogoRight(await response['team-2'])
            setTeamRight(await response['fullNameTeam-2'])
            setPlayerName1(await response['player1'])
            setPlayerName2(await response['player2'])
            setPlayerName3(await response['player3'])
            setPlayerName4(await response['player4'])
            setPlayerName5(await response['player5'])
            setPlayerName6(await response['player6'])
            setPlayerName7(await response['player7'])
            setPlayerName8(await response['player8'])
            setGame1PlayerPickLeft(await response['pickleft1'])
            setGame2PlayerPickLeft(await response['pickleft2'])
            setGame3PlayerPickLeft(await response['pickleft3'])
            setGame4PlayerPickLeft(await response['pickleft4'])
            setGame5PlayerPickLeft(await response['pickleft5'])
            setGame1PlayerPickRight(await response['pickright1'])
            setGame2PlayerPickRight(await response['pickright2'])
            setGame3PlayerPickRight(await response['pickright3'])
            setGame4PlayerPickRight(await response['pickright4'])
            setGame5PlayerPickRight(await response['pickright5'])
            setscL1(await response['scL1'])
            setscL2(await response['scL2'])
            setscL3(await response['scL3'])
            setscL4(await response['scL4'])
            setscL5(await response['scL5'])
            setscR1(await response['scR1'])
            setscR2(await response['scR2'])
            setscR3(await response['scR3'])
            setscR4(await response['scR4'])
            setscR5(await response['scR5'])
            setpkL1(await response['pkL1'])
            setpkL2(await response['pkL2'])
            setpkL3(await response['pkL3'])
            setpkL4(await response['pkL4'])
            setpkL5(await response['pkL5'])
            setpkR1(await response['pkR1'])
            setpkR2(await response['pkR2'])
            setpkR3(await response['pkR3'])
            setpkR4(await response['pkR4'])
            setpkR5(await response['pkR5'])
        }
        fetchMyAPI2()

        // end fetch api
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
    // websocket listen
    ws.onmessage = function(event){
        console.log(event.data)
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
            <div id='ctn-left' className='side-ctn'>
                <div id='logo-fco' className='logo-tour'/>
                <div id='logo-team-left-ctn' className='logo-team-ctn'>
                    <img id='logo-left' className='logo-team' src={importLogo(logoLeft)} alt='img'/>
                </div>
                <div id='team-name-text-left' className='team-name-text'>{teamLeft}</div>
                <div className='black-bg'/>
            </div>
            <div id='ctn-right' className='side-ctn'>
                <div id='logo-league' className='logo-tour'/>
                <div id='logo-team-right-ctn' className='logo-team-ctn'>
                    <img id='logo-right' className='logo-team' src={importLogo(logoRight)} alt='img'/>
                </div>
                <div id='team-name-text-right' className='team-name-text'>{teamRight}</div>
                <div className='black-bg'/>
            </div>
            <div id='bottom-ptt'/>
        </div>
    )
}
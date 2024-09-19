import React, { useState, useEffect, Fragment } from 'react';
import './LineupNew.css';
import * as beAPI from '../../../api/FetchApi'

var ws = new WebSocket(`ws://${beAPI.hostIP}:10045/ws/0`)



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
        // end fetch api
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','100%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--logo-master-main','500px')
                setRoot('--logo-master-top','50%')
                setRoot('--logo-master-right','50%')
                setRoot('--main-logo-opacity','1')
                setRoot('--bottom-ptt','-200px')
                setRoot('--logo-team-height','400px')
                setRoot('--logo-team-top','50%')
                setRoot('--logo-team-left','50%')
                setRoot('--logo-team-opacity','0')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1000)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','50%')
                setRoot('--logo-master-right','50%')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','400px')
                setRoot('--logo-team-top','50%')
                setRoot('--logo-team-left','50%')
                setRoot('--logo-team-opacity','0')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 500)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','600px')
                setRoot('--logo-team-top','50%')
                setRoot('--logo-team-left','50%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1700)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','200px')
                setRoot('--logo-team-top','50%')
                setRoot('--logo-team-left','50%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 300)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','200px')
                setRoot('--logo-team-top','75%')
                setRoot('--logo-team-left','15%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','1')
                return new Promise( function(resolve){
                    setTimeout(resolve, 300)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','200px')
                setRoot('--logo-team-top','75%')
                setRoot('--logo-team-left','15%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','1')
                return new Promise( function(resolve){
                    setTimeout(resolve, 200)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','200px')
                setRoot('--logo-team-top','75%')
                setRoot('--logo-team-left','15%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','41%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','1')
                return new Promise( function(resolve){
                    setTimeout(resolve, 500)
                })
            })
            .then(function(){
                setRoot('--pos-l-ctn','0px')
                setRoot('--pos-r-ctn','0px')
                setRoot('--main-logo-opacity','1')
                setRoot('--logo-master-main','150px')
                setRoot('--logo-master-top','10%')
                setRoot('--logo-master-right','90px')
                setRoot('--bottom-ptt','0px')
                setRoot('--logo-team-height','200px')
                setRoot('--logo-team-top','75%')
                setRoot('--logo-team-left','15%')
                setRoot('--logo-team-opacity','1')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','41%')
                setRoot('--match-info-ctn-opacity','1')
                setRoot('--team-name-text-ctn-opacity','1')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1500)
                })
            })
            .then(function(){
                if(bo === '3'){
                    setRoot('--pos-l-ctn','0px')
                    setRoot('--pos-r-ctn','0px')
                    setRoot('--main-logo-opacity','1')
                    setRoot('--logo-master-main','150px')
                    setRoot('--logo-master-top','10%')
                    setRoot('--logo-master-right','90px')
                    setRoot('--bottom-ptt','0px')
                    setRoot('--logo-team-height','200px')
                    setRoot('--logo-team-top','75%')
                    setRoot('--logo-team-left','15%')
                    setRoot('--logo-team-opacity','1')
                    setRoot(`--game-${game}-l-Flex`,'2')
                    setRoot(`--game-${game}-r-Flex`,'2')
                    setRoot('--main-scroll','-1330px')
                    setRoot('--side-scroll','-1060px')
                    setRoot('--game-ctn-pos','41%')
                    setRoot('--match-info-ctn-opacity','1')
                    setRoot('--team-name-text-ctn-opacity','1')
                }else if(bo === '5'){
                    setRoot('--pos-l-ctn','0px')
                    setRoot('--pos-r-ctn','0px')
                    setRoot('--main-logo-opacity','1')
                    setRoot('--logo-master-main','150px')
                    setRoot('--logo-master-top','10%')
                    setRoot('--logo-master-right','90px')
                    setRoot('--bottom-ptt','0px')
                    setRoot('--logo-team-height','200px')
                    setRoot('--logo-team-top','75%')
                    setRoot('--logo-team-left','15%')
                    setRoot('--logo-team-opacity','1')
                    setRoot(`--game-${game}-l-Flex`,'2')
                    setRoot(`--game-${game}-r-Flex`,'2')
                    setRoot('--main-scroll','-860px')
                    setRoot('--side-scroll','-705px')
                    setRoot('--game-ctn-pos','41%')
                    setRoot('--match-info-ctn-opacity','1')
                }
                return new Promise( function(resolve){
                    setTimeout(resolve, 500)
                })
            })
    }
    function reloadStats() {
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
    }
    function resetLayout(){
        // end fetch api
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','0%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--pos-l-ctn','-1000px')
                setRoot('--pos-r-ctn','-1000px')
                setRoot('--logo-master-main','500px')
                setRoot('--logo-master-top','50%')
                setRoot('--logo-master-right','50%')
                setRoot('--main-logo-opacity','1')
                setRoot('--bottom-ptt','-200px')
                setRoot('--logo-team-height','400px')
                setRoot('--logo-team-top','50%')
                setRoot('--logo-team-left','50%')
                setRoot('--logo-team-opacity','0')
                setRoot('--game-1-l-Flex','1')
                setRoot('--game-2-l-Flex','1')
                setRoot('--game-3-l-Flex','1')
                setRoot('--game-4-l-Flex','1')
                setRoot('--game-5-l-Flex','1')
                setRoot('--game-1-r-Flex','1')
                setRoot('--game-2-r-Flex','1')
                setRoot('--game-3-r-Flex','1')
                setRoot('--game-4-r-Flex','1')
                setRoot('--game-5-r-Flex','1')
                setRoot('--main-scroll','-880px')
                setRoot('--side-scroll','-710px')
                setRoot('--game-ctn-pos','-40%')
                setRoot('--match-info-ctn-opacity','0')
                setRoot('--team-name-text-ctn-opacity','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 1500)
                })
            })
            
    }
    // websocket listen 1
    ws.onmessage = function(event){
        console.log(event.data)
        if (event.data === 'lineup-start'){
            startLayout()
        }else if(event.data === 'lineup-sync'){
            reloadStats()
        }else if(event.data === 'lineup-reset'){
            resetLayout()
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
    function ScrollText(text){
        if (text === 'df') {
            return (
                <Fragment>
                    <div className='scroll-main-text-loops'>VIETNAM PRO LEAGUE  VIETNAM PRO LEAGUE  VIETNAM PRO LEAGUE  VIETNAM PRO LEAGUE  VIETNAM PRO LEAGUE</div>
                    <div className='scroll-text-loops'>AUTUMN 2024  AUTUMN 2024  AUTUMN 2024  AUTUMN 2024  AUTUMN 2024  AUTUMN 2024</div>
                </Fragment>
            )
        }else{
            return (
                <Fragment>
                    <div className='scroll-main-text-loops'>{text}  {text}  {text}  {text}  {text}  {text}  {text}  {text}  {text}  {text}</div>
                    <div className='scroll-text-loops'>VIETNAM PRO LEAGUE AUTUMN 2024  VIETNAM PRO LEAGUE AUTUMN 2024  VIETNAM PRO LEAGUE AUTUMN 2024  VIETNAM PRO LEAGUE AUTUMN 2024  VIETNAM PRO LEAGUE AUTUMN 2024  VIETNAM PRO LEAGUE AUTUMN 2024</div>
                </Fragment>
            )
        }
    }
    function RenderGameRight(){
        if (bo === '3') {
            return (
                <Fragment>
                    <div id='game-box-r-1' className='game-box'>
                        <div className='game-box-playername'>{game1PlayerPickRight}</div>
                        <div className='game-box-game'>Game 1</div>
                        <img className='image-player' src={importplayer(game1PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game1PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-2' className='game-box'>
                        <div className='game-box-playername'>{game2PlayerPickRight}</div>
                        <div className='game-box-game'>Game 2</div>
                        <img className='image-player' src={importplayer(game2PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game2PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-3' className='game-box'>
                        <div className='game-box-playername'>{game3PlayerPickRight}</div>
                        <div className='game-box-game'>Game 3</div>
                        <img className='image-player' src={importplayer(game3PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game3PlayerPickRight)}</div>
                    </div>
                </Fragment>
            )
        }else if(bo === '5'){
            return (
                <Fragment>
                    <div id='game-box-r-1' className='game-box'>
                        <div className='game-box-playername'>{game1PlayerPickRight}</div>
                        <div className='game-box-game'>Game 1</div>
                        <img className='image-player' src={importplayer(game1PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game1PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-2' className='game-box'>
                        <div className='game-box-playername'>{game2PlayerPickRight}</div>
                        <div className='game-box-game'>Game 2</div>
                        <img className='image-player' src={importplayer(game2PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game2PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-3' className='game-box'>
                        <div className='game-box-playername'>{game3PlayerPickRight}</div>
                        <div className='game-box-game'>Game 3</div>
                        <img className='image-player' src={importplayer(game3PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game3PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-4' className='game-box'>
                        <div className='game-box-playername'>{game4PlayerPickRight}</div>
                        <div className='game-box-game'>Game 4</div>
                        <img className='image-player' src={importplayer(game4PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game4PlayerPickRight)}</div>
                    </div>
                    <div id='game-box-r-5' className='game-box'>
                        <div className='game-box-playername'>{game5PlayerPickRight}</div>
                        <div className='game-box-game'>Game 5</div>
                        <img className='image-player' src={importplayer(game5PlayerPickRight)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game5PlayerPickRight)}</div>
                    </div>
                </Fragment>
            )
        }
    }
    
    function RenderGameLeft(){
        if (bo === '3') {
            return (
                <Fragment>
                    <div id='game-box-l-3' className='game-box'>
                        <div className='game-box-playername'>{game3PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 3</div>
                        <img className='image-player' src={importplayer(game3PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game3PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-2' className='game-box'>
                        <div className='game-box-playername'>{game2PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 2</div>
                        <img className='image-player' src={importplayer(game2PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game2PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-1' className='game-box'>
                        <div className='game-box-playername'>{game1PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 1</div>
                        <img className='image-player' src={importplayer(game1PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game1PlayerPickLeft)}</div>
                    </div>
                </Fragment>
            )
        }else if(bo === '5'){
            return (
                <Fragment>
                    <div id='game-box-l-5' className='game-box'>
                        <div className='game-box-playername'>{game5PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 5</div>
                        <img className='image-player' src={importplayer(game5PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game5PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-4' className='game-box'>
                        <div className='game-box-playername'>{game4PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 4</div>
                        <img className='image-player' src={importplayer(game4PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game4PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-3' className='game-box'>
                        <div className='game-box-playername'>{game3PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 3</div>
                        <img className='image-player' src={importplayer(game3PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game3PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-2' className='game-box'>
                        <div className='game-box-playername'>{game2PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 2</div>
                        <img className='image-player' src={importplayer(game2PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game2PlayerPickLeft)}</div>
                    </div>
                    <div id='game-box-l-1' className='game-box'>
                        <div className='game-box-playername'>{game1PlayerPickLeft}</div>
                        <div className='game-box-game'>Game 1</div>
                        <img className='image-player' src={importplayer(game1PlayerPickLeft)} alt='img'></img>
                        <div className='text-ctn'>{ScrollText(game1PlayerPickLeft)}</div>
                    </div>
                </Fragment>
            )
        }
    }
    function GameMainCreate(){
        if(bo === '3'){
            return(
                <Fragment>
                    <div id='game-text-1' className='game-text-css'>
                        <div className='player-game-left'>{game1PlayerPickLeft}</div>
                        <div className='scoreL'>{scL1}</div>
                        <div className='mid-game'>
                            <div>GAME 1</div>
                            <div>{pkL1 + ' -PK- ' + pkR1}</div>
                        </div>
                        <div className='scoreR'>{scR1}</div>
                        <div className='player-game-right'>{game1PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-2' className='game-text-css'>
                        <div className='player-game-left'>{game2PlayerPickLeft}</div>
                        <div className='scoreL'>{scL2}</div>
                        <div className='mid-game'>
                            <div>GAME 2</div>
                            <div>{pkL2 + ' -PK- ' + pkR2}</div>
                        </div>
                        <div className='scoreR'>{scR2}</div>
                        <div className='player-game-right'>{game2PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-3' className='game-text-css'>
                        <div className='player-game-left'>{game3PlayerPickLeft}</div>
                        <div className='scoreL'>{scL3}</div>
                        <div className='mid-game'>
                            <div>GAME 3</div>
                            <div>{pkL3 + ' -PK- ' + pkR3}</div>
                        </div>
                        <div className='scoreR'>{scR3}</div>
                        <div className='player-game-right'>{game3PlayerPickLeft}</div>
                    </div>
                </Fragment>
            )
        }else{
            return(
                <Fragment>
                    <div id='game-text-1' className='game-text-css'>
                        <div className='player-game-left'>{game1PlayerPickLeft}</div>
                        <div className='scoreL'>{scL1}</div>
                        <div className='mid-game'>
                            <div>GAME 1</div>
                            <div>{pkL1 + ' -PK- ' + pkR1}</div>
                        </div>
                        <div className='scoreR'>{scR1}</div>
                        <div className='player-game-right'>{game1PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-2' className='game-text-css'>
                        <div className='player-game-left'>{game2PlayerPickLeft}</div>
                        <div className='scoreL'>{scL2}</div>
                        <div className='mid-game'>
                            <div>GAME 2</div>
                            <div>{pkL2 + ' -PK- ' + pkR2}</div>
                        </div>
                        <div className='scoreR'>{scR2}</div>
                        <div className='player-game-right'>{game2PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-3' className='game-text-css'>
                        <div className='player-game-left'>{game3PlayerPickLeft}</div>
                        <div className='scoreL'>{scL3}</div>
                        <div className='mid-game'>
                            <div>GAME 3</div>
                            <div>{pkL3 + ' -PK- ' + pkR3}</div>
                        </div>
                        <div className='scoreR'>{scR3}</div>
                        <div className='player-game-right'>{game3PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-4' className='game-text-css'>
                        <div className='player-game-left'>{game4PlayerPickLeft}</div>
                        <div className='scoreL'>{scL4}</div>
                        <div className='mid-game'>
                            <div>GAME 4</div>
                            <div>{pkL4 + ' -PK- ' + pkR4}</div>
                        </div>
                        <div className='scoreR'>{scR4}</div>
                        <div className='player-game-right'>{game4PlayerPickLeft}</div>
                    </div>
                    <div id='game-text-5' className='game-text-css'>
                        <div className='player-game-left'>{game5PlayerPickLeft}</div>
                        <div className='scoreL'>{scL5}</div>
                        <div className='mid-game'>
                            <div>GAME 5</div>
                            <div>{pkL5 + ' -PK- ' + pkR5}</div>
                        </div>
                        <div className='scoreR'>{scR5}</div>
                        <div className='player-game-right'>{game5PlayerPickLeft}</div>
                    </div>
                </Fragment>
            )
        }
    }
    return (
        <div id="lineup-master">
            <div id='match-info-ctn'>
                <div id='match-text-ctn'>
                    <div id='arrow-left' className='arrow'></div>
                    <h1 id='headline-match'>{'MATCH ' + match}</h1>
                    <div id='arrow-right' className='arrow'></div>
                </div>
                <div id='game-text-ctn'>{GameMainCreate()}</div>
            </div>
            <div id='ctn-left' className='side-ctn'>
                <div id='game-left-ctn' className='game-ctn'>
                    {RenderGameLeft()}
                </div>
                <div id='logo-fco' className='logo-tour'/>
                <div id='logo-team-left-ctn' className='logo-team-ctn'>
                    <img id='logo-left' className='logo-team' src={importLogo(logoLeft)} alt='img'/>
                </div>
                <div className='team-name-text-ctn' id='team-name-text-left-ctn'>
                    <div id='shot-name-left' className='short-name-text'>{logoLeft}</div>
                    <div id='team-name-text-left' className='team-name-text'>{teamLeft}</div>
                    <ul id='team-left-lineup' className='team-lineup'>
                        <li className='player-lineup'>{playerName1}</li>
                        <li className='player-lineup'>{playerName2}</li>
                        <li className='player-lineup'>{playerName3}</li>
                        <li className='player-lineup'>{playerName4}</li>
                    </ul>
                </div>
                <div className='black-bg'/>
            </div>
            <div id='ctn-right' className='side-ctn'>
                <div id='game-right-ctn' className='game-ctn'>
                    {RenderGameRight()}
                </div>
                <div id='logo-league' className='logo-tour'/>
                <div id='logo-team-right-ctn' className='logo-team-ctn'>
                    <img id='logo-right' className='logo-team' src={importLogo(logoRight)} alt='img'/>
                </div>
                <div className='team-name-text-ctn' id='team-name-text-right-ctn'>
                    <div className='short-name-text' id='shot-name-right'> {logoRight}</div>
                    <div id='team-name-text-right' className='team-name-text'>{teamRight}</div>
                    <ul id='team-right-lineup' className='team-lineup'>
                        <li className='player-lineup'>{playerName5}</li>
                        <li className='player-lineup'>{playerName6}</li>
                        <li className='player-lineup'>{playerName7}</li>
                        <li className='player-lineup'>{playerName8}</li>
                    </ul>
                </div>
                <div className='black-bg'/>
            </div>
            <div id='bottom-ptt'/>
        </div>
    )
}
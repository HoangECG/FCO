import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import * as beAPI from '../api/FetchApi'


function Backend() {
    const [game, setGame] = useState('1')
    const [match, setMatch] = useState('Match 1')
    const [round, setRound] = useState('swiss stage')
    const [bo, setBo] = useState('3')
    const [date, setDate] = useState('20/10/2024')
    const [teamBlue, setTeamBlue] = useState('SGP')
    const [teamNameBlue, setTeamNameBlue] = useState('Hà Nội')
    const [teamRed, setTeamRed] = useState('SGP')
    const [teamNameRed, setTeamNameRed] = useState('Hà Nội')
    const [scBlue, setscrBlue] = useState('0')
    const [scRed, setscrRed] = useState('0')
    const [listTeam, setListTeam] = useState(['1','2'])
    const [player1, setPlayer1] = useState('player1')
    const [player2, setPlayer2] = useState('player2')
    const [player3, setPlayer3] = useState('player3')
    const [player4, setPlayer4] = useState('player4')
    const [player5, setPlayer5] = useState('player5')
    const [player6, setPlayer6] = useState('player6')
    const [player7, setPlayer7] = useState('player7')
    const [player8, setPlayer8] = useState('player8')
    const [lineupFullBlue,setLineupFullBlue] = useState(['1','2','3','4'])
    const [lineupFullRed,setLineupFullRed] = useState(['1','2','3','4'])

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


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.Getcrrmatch()
            let responseListChamps = await beAPI.GetChampsName()
            let responseListTeam = await beAPI.GetListTeam()
            let responseLineupFullBlue = await beAPI.GetLineupFull(teamBlue)
            let responseLineupFullRed = await beAPI.GetLineupFull(teamRed)
            // get list champs name 
            setListChamp(await responseListChamps)
            setListTeam(await responseListTeam)
            window.localStorage.setItem('listteam', listTeam)
            window.localStorage.setItem('champs',listChamp)

            // localstorage save
            window.localStorage.setItem('game',await response['game'])
            window.localStorage.setItem('match',await response['matchName'])
            window.localStorage.setItem('round',await response['round'])
            window.localStorage.setItem('bo',await response['bo'])
            window.localStorage.setItem('date',await response['date'])
            window.localStorage.setItem('team-1',await response['team-1'])
            window.localStorage.setItem('fullNameTeam-1',await response['fullNameTeam-1'])
            window.localStorage.setItem('team-2',await response['team-2'])
            window.localStorage.setItem('fullNameTeam-2',await response['fullNameTeam-2'])
            window.localStorage.setItem('player1',await response['player1'])
            window.localStorage.setItem('player2',await response['player2'])
            window.localStorage.setItem('player3',await response['player3'])
            window.localStorage.setItem('player4',await response['player4'])
            window.localStorage.setItem('player5',await response['player5'])
            window.localStorage.setItem('player6',await response['player6'])
            window.localStorage.setItem('player7',await response['player7'])
            window.localStorage.setItem('player8',await response['player8'])
            window.localStorage.setItem('linupFull-1',JSON.stringify(await responseLineupFullBlue))
            window.localStorage.setItem('linupFull-2',JSON.stringify(await responseLineupFullRed))
            window.localStorage.setItem('game1PlayerPick-left',await response['pickleft1'])
            window.localStorage.setItem('game2PlayerPick-left',await response['pickleft2'])
            window.localStorage.setItem('game3PlayerPick-left',await response['pickleft3'])
            window.localStorage.setItem('game4PlayerPick-left',await response['pickleft4'])
            window.localStorage.setItem('game5PlayerPick-left',await response['pickleft5'])
            window.localStorage.setItem('game1PlayerPick-right',await response['pickright1'])
            window.localStorage.setItem('game2PlayerPick-right',await response['pickright2'])
            window.localStorage.setItem('game3PlayerPick-right',await response['pickright3'])
            window.localStorage.setItem('game4PlayerPick-right',await response['pickright4'])
            window.localStorage.setItem('game5PlayerPick-right',await response['pickright5'])

            // set variable
            setLineupFullBlue(await responseLineupFullBlue)
            setLineupFullRed(await responseLineupFullRed)
            setGame(await response['game'])
            setMatch(await response['matchName'])
            setRound(await response['round'])
            setBo(await response['bo'])
            setDate(await response['date'])
            setTeamBlue(await response['team-1'])
            setTeamNameBlue(await response['fullNameTeam-1'])
            setTeamRed(await response['team-2'])
            setTeamNameRed(await response['fullNameTeam-2'])
            setPlayer1(await response['player1'])
            setPlayer2(await response['player2'])
            setPlayer3(await response['player3'])
            setPlayer4(await response['player4'])
            setPlayer5(await response['player5'])
            setPlayer6(await response['player6'])
            setPlayer7(await response['player7'])
            setPlayer8(await response['player8'])
            setscrBlue(await response['sc-1'])
            setscrRed(await response['sc-2'])
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
        }
        fetchMyAPI()
        }, [0])


    // Input render
    function InputRender(props) {
        async function onchangeInput(){
            window.localStorage.setItem(props.inputID,document.getElementById(props.inputID).value)
            if (props.inputID === 'team-1'){
                if ((await beAPI.GetLineupFull(document.getElementById(props.inputID).value)) != null) {
                    setLineupFullBlue(await beAPI.GetLineupFull(document.getElementById(props.inputID).value))
                }
            }else if(props.inputID === 'team-2') {
                if ((await beAPI.GetLineupFull(document.getElementById(props.inputID).value)) != null) {
                    setLineupFullBlue(await beAPI.GetLineupFull(document.getElementById(props.inputID).value))
                }
            }
        }
        function RenderOpt(props, index) {
            return (
                <option key={index} value={props} />
            )
        }
        return (
            <div className="input-div">
                <label htmlFor={props.inputID} className={props.labelClassName}>{props.name}</label>
                <input id={props.inputID} className={props.inputClassName} list={props.idDatalist}
                    type="text" placeholder={props.placeholder} name={props.name} defaultValue={props.value} onChange={onchangeInput} disabled={props.disabled}></input>
                <datalist id={props.idDatalist}>
                    {props.listData.map(RenderOpt)}
                </datalist>
            </div>
        )
    }

    function BtnRender(props) {
        return (
            <div className="btn-div">
                <button type="button" id={props.idBtn} className={props.classBtn} style={props.inlineCss} onClick={props.btnClick}>{props.btnName}</button>
            </div>
        )
    }
    function BackendBody() {
        
        // Component Match ID check
        function MatchCreate() {
            // Handle button click
            async function HandleSyncButtonClick() {
                    fetch(`http://${beAPI.hostIP}:14596/api/post/crm`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "matchId": window.localStorage.getItem('match'),
                            "matchName": window.localStorage.getItem('match'),
                            "round": window.localStorage.getItem('round'),
                            "date": window.localStorage.getItem('date'),
                            "bo": window.localStorage.getItem('bo'),
                            "game": window.localStorage.getItem('game'),
                            "sc-1": window.localStorage.getItem('sc-1'),
                            "sc-2" : window.localStorage.getItem('sc-2'),
                            "team-1": window.localStorage.getItem('team-1'),
                            "fullNameTeam-1": window.localStorage.getItem('fullNameTeam-1'),
                            "team-2": window.localStorage.getItem('team-2'),
                            "fullNameTeam-2": window.localStorage.getItem('fullNameTeam-2'),
                            "player1": window.localStorage.getItem('player1'),
                            "player2": window.localStorage.getItem('player2'),
                            "player3": window.localStorage.getItem('player3'),
                            "player4": window.localStorage.getItem('player4'),
                            "player5": window.localStorage.getItem('player5'),
                            "player6": window.localStorage.getItem('player6'),
                            "player7": window.localStorage.getItem('player7'),
                            "player8": window.localStorage.getItem('player8'),
                            "pickleft1": window.localStorage.getItem('game1PlayerPick-left'),
                            "pickleft2": window.localStorage.getItem('game2PlayerPick-left'),
                            "pickleft3": window.localStorage.getItem('game3PlayerPick-left'),
                            "pickleft4": window.localStorage.getItem('game4PlayerPick-left'),
                            "pickleft5": window.localStorage.getItem('game5PlayerPick-left'),
                            "pickright1": window.localStorage.getItem('game1PlayerPick-right'),
                            "pickright2": window.localStorage.getItem('game2PlayerPick-right'),
                            "pickright3": window.localStorage.getItem('game3PlayerPick-right'),
                            "pickright4": window.localStorage.getItem('game4PlayerPick-right'),
                            "pickright5": window.localStorage.getItem('game5PlayerPick-right')
                        })
                    })
                    setTimeout(function() {
                        window.location.reload()
                      }, 500);
                    
                }
                // await return true then set reload
            async function HandleSwapButtonClick() {
                fetch(`http://${beAPI.hostIP}:14596/api/post/crm`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "matchId": window.localStorage.getItem('match'),
                        "matchName": window.localStorage.getItem('match'),
                        "round": window.localStorage.getItem('round'),
                        "date": window.localStorage.getItem('date'),
                        "bo": window.localStorage.getItem('bo'),
                        "game": window.localStorage.getItem('game'),
                        "sc-1": window.localStorage.getItem('sc-2'),
                        "sc-2" : window.localStorage.getItem('sc-1'),
                        "team-1": window.localStorage.getItem('team-2'),
                        "fullNameTeam-1": window.localStorage.getItem('fullNameTeam-2'),
                        "team-2": window.localStorage.getItem('team-1'),
                        "fullNameTeam-2": window.localStorage.getItem('fullNameTeam-1'),
                        "player1": window.localStorage.getItem('player5'),
                        "player2": window.localStorage.getItem('player6'),
                        "player3": window.localStorage.getItem('player7'),
                        "player4": window.localStorage.getItem('player8'),
                        "player5": window.localStorage.getItem('player1'),
                        "player6": window.localStorage.getItem('player2'),
                        "player7": window.localStorage.getItem('player3'),
                        "player8": window.localStorage.getItem('player4'),
                        "pickleft1": window.localStorage.getItem('game1PlayerPick-right'),
                        "pickleft2": window.localStorage.getItem('game2PlayerPick-right'),
                        "pickleft3": window.localStorage.getItem('game3PlayerPick-right'),
                        "pickleft4": window.localStorage.getItem('game4PlayerPick-right'),
                        "pickleft5": window.localStorage.getItem('game5PlayerPick-right'),
                        "pickright1": window.localStorage.getItem('game1PlayerPick-left'),
                        "pickright2": window.localStorage.getItem('game2PlayerPick-left'),
                        "pickright3": window.localStorage.getItem('game3PlayerPick-left'),
                        "pickright4": window.localStorage.getItem('game4PlayerPick-left'),
                        "pickright5": window.localStorage.getItem('game5PlayerPick-left')
                    })
                })
                setTimeout(function() {
                    window.location.reload()
                  }, 500);
                // await return true then set reload
            }
            // Handle create button
    
            // Return component
            return (
                <div id="match-create" className="box-ctn">
                    <h1 className="box-title">MATCH</h1>
                    <InputRender
                        name="MATCH"
                        placeholder="MATCH ID"
                        inputID="match"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="match-id-id-data-list"
                        listData={['0']}
                        value={window.localStorage.getItem('match')}
                    />
                    <InputRender
                        name="BO"
                        placeholder="BEST OF "
                        inputID="bo"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="best-of-id-data-list"
                        listData={["1", "2", "3", "5", "7"]}
                        value={window.localStorage.getItem('bo')}
                    />
                    <InputRender
                        name="BLUE"
                        placeholder="TEAM 1"
                        inputID="team-1"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="team-1-id-data-list"
                        listData={listTeam}
                        value={window.localStorage.getItem('team-1')}
                    />
                    <InputRender
                        name="RED"
                        placeholder="TEAM 2"
                        inputID="team-2"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="team-2-id-data-list"
                        listData={listTeam}
                        value={window.localStorage.getItem('team-2')}
                    />
                    <InputRender
                        name="Game"
                        placeholder="1"
                        inputID="game"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="game-id-data-list"
                        listData={['1','2','3','4','5','6','7']}
                        value={window.localStorage.getItem('game')}
                    />
                    <BtnRender
                        btnName="SYNC MATCH"
                        idBtn="syncBtn"
                        classBtn="btn"
                        btnClick={HandleSyncButtonClick}
                    />
                    <BtnRender
                        btnName="Swap side"
                        idBtn="swapBtn"
                        classBtn="btn"
                        btnClick={HandleSwapButtonClick}
                    />
                </div>
            )
        }
        // Stream info component
        
    
        // Match incoming component
        function MatchConfig() {
            return (
                <div id="match-info-result">
                    <h1 className="box-title">MATCH ID | #0 </h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="ROUND"
                            placeholder="NAME"
                            inputID="round"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list"
                            listData={[]}
                            value={round}
                        />
                        <InputRender
                            name="DATE"
                            placeholder="DATE"
                            inputID="date"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list"
                            listData={[]}
                            value={date}
                        />
                    </div>
                    <h1 className="box-title">GAME {game} INFO</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name={teamBlue}
                            placeholder={scBlue}
                            inputID="sc-blue"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="sc-blue-id-data-list"
                            listData={['0','1','2','3','4']}
                            value={'0'}
                        />
                        <InputRender
                            name={teamRed}
                            placeholder={scRed}
                            inputID="sc-Red"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="sc-Red-id-data-list"
                            listData={['0','1','2','3','4']}
                            value={'0'}
                        />
                    </div>
                    <h1 className="box-title">GAME {game} LINEUP</h1>
                    <div className="frag-ctn">
                        <ul id='box-lineup-blue' className="box-lineup" >
                            <InputRender
                                name="Player"
                                placeholder="player1"
                                inputID="player1"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueDSL-id-data-list"
                                listData={lineupFullBlue}
                                value={player1}
                            />
                            <InputRender
                                name="Player"
                                placeholder="player2"
                                inputID="player2"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueJGL-id-data-list"
                                listData={lineupFullBlue}
                                value={player2}
                            />
                            <InputRender
                                name="player"
                                placeholder="player3"
                                inputID="player3"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueMID-id-data-list"
                                listData={lineupFullBlue}
                                value={player3}
                            />
                            <InputRender
                                name="Player"
                                placeholder="player4"
                                inputID="player4"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueADL-id-data-list"
                                listData={lineupFullBlue}
                                value={player4}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <InputRender
                                name="player"
                                placeholder="player 5"
                                inputID="player5"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedDSL-id-data-list"
                                listData={lineupFullRed}
                                value={player5}
                            />
                            <InputRender
                                name="player"
                                placeholder="player 6"
                                inputID="player6"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedJGL-id-data-list"
                                listData={lineupFullRed}
                                value={player6}
                            />
                            <InputRender
                                name="player"
                                placeholder="player 7"
                                inputID="player7"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedMID-id-data-list"
                                listData={lineupFullRed}
                                value={player7}
                            />
                            <InputRender
                                name="player"
                                placeholder="player 8"
                                inputID="player8"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedADL-id-data-list"
                                listData={lineupFullRed}
                                value={player8}
                            />
                        </ul>
                    </div>
                </div>
            )
        }
        // Return backend component
        // banpick container
        function BanpickContainer(){
            function setValueInput(props){
                try{
                    return window.localStorage.getItem(props)
                }catch(err){
                    console.log('err') 
                };
            }
            function disabledInput2(props,inputbox){
                if (props === inputbox){
                    return false
                }else{
                    return true
                }
            }
            return (
                <div id="banpickContainer" className="box-ctn">
                    <h1 className="box-title">BANPICK GAME 1</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="left"
                            placeholder="player"
                            inputID="game1PlayerPick-left"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'1')}
                            value={setValueInput('game1PlayerPick-left')}
                        />
                        <InputRender
                            name="right"
                            placeholder="player"
                            inputID="game1PlayerPick-right"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'1')}
                            value={setValueInput('game1PlayerPick-right')}
                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 2</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="left"
                            placeholder="player"
                            inputID="game2PlayerPick-left"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'2')}
                            value={setValueInput('game2PlayerPick-left')}

                        />
                        <InputRender
                            name="right"
                            placeholder="player"
                            inputID="game2PlayerPick-right"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'2')}
                            value={setValueInput('game2PlayerPick-right')}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 3</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="left"
                            placeholder="player"
                            inputID="game3PlayerPick-left"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'3')}
                            value={setValueInput('game3PlayerPick-left')}
                        />
                        <InputRender
                            name="right"
                            placeholder="player"
                            inputID="game3PlayerPick-right"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'3')}
                            value={setValueInput('game3PlayerPick-right')}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 4</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="left"
                            placeholder="player"
                            inputID="game4PlayerPick-left"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'4')}
                            value={setValueInput('game4PlayerPick-left')}
                        />
                        <InputRender
                            name="right"
                            placeholder="player"
                            inputID="game4PlayerPick-right"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'4')}
                            value={setValueInput('game4PlayerPick-right')}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 5</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="left"
                            placeholder="player"
                            inputID="game5PlayerPick-left"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'5')}
                            value={setValueInput('game5PlayerPick-left')}

                        />
                        <InputRender
                            name="right"
                            placeholder="player"
                            inputID="game5PlayerPick-right"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={lineupFullBlue}
                            disabled={disabledInput2(game,'5')}
                            value={setValueInput('game5PlayerPick-right')}

                        />
                    </div>
                </div>
            )
        }
        return (
            <div className="body-ctn row-ctn">
                <div className="colum-ctn">
                    <MatchCreate/>
                </div>
                <div className="box-ctn">
                    <MatchConfig/>
                </div>
                <div className="colum-ctn">
                    <BanpickContainer/>
                </div>
            </div>
        );
    };
    
    return (
        <div className="main-container">
            <NavBar />
            <BackendBody/>
        </div>
    )
}
export default Backend;
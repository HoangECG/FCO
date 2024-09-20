import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import * as beAPI from '../api/FetchApi'


// websocket
var ws = new WebSocket(`ws://${beAPI.hostIP}:${beAPI.portApi}/ws/0`)

function Backend() {
    const [game, setGame] = useState('1')
    const [match, setMatch] = useState('Match 1')
    const [round, setRound] = useState('swiss stage')
    const [bo, setBo] = useState('3')
    const [date, setDate] = useState('20/10/2024')
    const [teamBlue, setTeamBlue] = useState('STV')
    const [teamNameBlue, setTeamNameBlue] = useState('Hà Nội')
    const [teamRed, setTeamRed] = useState('STV')
    const [teamNameRed, setTeamNameRed] = useState('Hà Nội')
    const [player1, setPlayer1] = useState('player1')
    const [player2, setPlayer2] = useState('player2')
    const [player3, setPlayer3] = useState('player3')
    const [player4, setPlayer4] = useState('player4')
    const [player5, setPlayer5] = useState('player5')
    const [player6, setPlayer6] = useState('player6')
    const [player7, setPlayer7] = useState('player7')
    const [player8, setPlayer8] = useState('player8')
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
    const [game1PlayerPickLeft, setGame1PlayerPickLeft] = useState('df')
    const [game2PlayerPickLeft, setGame2PlayerPickLeft] = useState('df')
    const [game3PlayerPickLeft, setGame3PlayerPickLeft] = useState('df')
    const [game4PlayerPickLeft, setGame4PlayerPickLeft] = useState('df')
    const [game5PlayerPickLeft, setGame5PlayerPickLeft] = useState('df')
    const [game1PlayerPickRight, setGame1PlayerPickRight] = useState('df')
    const [game2PlayerPickRight, setGame2PlayerPickRight] = useState('df')
    const [game3PlayerPickRight, setGame3PlayerPickRight] = useState('df')
    const [game4PlayerPickRight, setGame4PlayerPickRight] = useState('df')
    const [game5PlayerPickRight, setGame5PlayerPickRight] = useState('df')


    useEffect(() => {
        async function fetchMyAPI() {
            console.log(1)
            let response = await beAPI.Getcrrmatch()
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

    // Input render
    function InputRender(props) {
        return (
            <div className="input-div">
                <label htmlFor={props.inputID} className={props.labelClassName}>{props.name}</label>
                <input id={props.inputID} className={props.inputClassName} 
                     placeholder={props.placeholder} name={props.name} defaultValue={props.value}></input>
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
    function TextBoxRender(props) {
        return (
            <div className={"text-info-ctn"}>
                <h1 className={"title-text-box"}>{props.title}</h1>
                <div id={props.idTextBox} className={"text-info-box"}>{props.textContent}</div>
            </div>
        )
    }
    function HandleStartLayout(){
        ws.send('lineup-start')
    }
    function HandleOffLayout(){
        ws.send('lineup-off')
    }
    function HandleSyncStatslayout(){
        ws.send('lineup-sync')
    }
    function StartCountdown(){
        try {
            if(document.getElementById('start-time').value.split(':').length > 1 ){
                ws.send(`startcountdown-${document.getElementById('start-time').value.split(':')[0]}-${document.getElementById('start-time').value.split(':')[1]}-${document.getElementById('giftcode').value}`)
                console.log(`startcountdown-${document.getElementById('start-time').value.split(':')[0]}-${document.getElementById('start-time').value.split(':')[1]}-${document.getElementById('giftcode').value}`)
            } 
        } catch (error) {
            console.log('err')
        }
    }
    function StopCountdown(){
        ws.send('stopcountdown')
    }
    function showCountdown(){
        ws.send('showcountdown')
    }
    function MinusCountdown(){
        try {
            if(document.getElementById('minus-time').value.split(':').length > 1 ){
                ws.send(`minus-${document.getElementById('minus-time').value.split(':')[0]}-${document.getElementById('minus-time').value.split(':')[1]}`)
            } 
        } catch (error) {
            console.log('err')
        }
    }
    function HandleSyncClick(){
        
        // setTimeout(() => {
        //     window.location.reload()
        // }, 200);

    }
    function BackendBody() {
        // Component Match ID check
        function MatchCreate() {
            // Return component
            return (
                <div id="match-create" className="box-ctn">
                    <h1 className="box-title">MATCH</h1>
                    <TextBoxRender
                        idTextBox="match"
                        textContent={match}
                        title="match"
                    />
                    <TextBoxRender
                        idTextBox="bo"
                        textContent={bo}
                        title="bo"
                    />
                    <TextBoxRender
                        idTextBox="team-1"
                        textContent={teamBlue}
                        title="team 1"
                    />
                    <TextBoxRender
                        idTextBox="team2"
                        textContent={teamRed}
                        title="team 2"
                    />
                    <BtnRender
                        btnName="SYNC MATCH"
                        idBtn="syncbtnn"
                        classBtn="btn"
                        btnClick={HandleSyncClick}
                    />
                </div>
            )
        }
        // Stream info component
        
    
        // Match incoming component
        function MatchConfig() {
            return (
                <div id="match-info-result">
                    <h1 className="box-title">GAME 1 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            textContent={scL1}
                            title='score'
                            idTextBox="scL1"
                            classname="text-info-box-fix"
                        />
                        <TextBoxRender
                            textContent={scR1}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR1"
                        />
                        <TextBoxRender
                            textContent={pkL1}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL1"
                        />
                        <TextBoxRender
                            textContent={pkR1}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR1"
                        />
                    </div>
                    <h1 className="box-title">GAME 2 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            textContent={scL2}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scL2"
                        />
                        <TextBoxRender
                            textContent={scR2}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR2"
                        />
                        <TextBoxRender
                            textContent={pkL2}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL2"
                        />
                        <TextBoxRender
                            textContent={pkR2}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR2"
                        />
                    </div>
                    <h1 className="box-title">GAME 3 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            textContent={scL3}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scL3"
                        />
                        <TextBoxRender
                            textContent={scR3}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR3"
                        />
                        <TextBoxRender
                            textContent={pkL3}
                            classname="text-info-box-fix"
                            title='PK Left'
                            idTextBox="pkL3"
                        />
                        <TextBoxRender
                            textContent={pkR3}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR3"
                        />
                    </div>
                    <h1 className="box-title">GAME 4 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            textContent={scL4}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scL4"
                        />
                        <TextBoxRender
                            textContent={scR4}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scR4"
                        />
                        <TextBoxRender
                            textContent={pkL4}
                            classname="text-info-box-fix"
                            title='PK Left'
                            idTextBox="pkL4"
                        />
                        <TextBoxRender
                            textContent={pkR4}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR4"
                        />
                    </div>
                    <h1 className="box-title">GAME 5 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            textContent={scL5}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scL5"
                        />
                        <TextBoxRender
                            textContent={scR5}
                            title='score'
                            idTextBox="scR5"
                            classname="text-info-box-fix"
                        />
                        <TextBoxRender
                            textContent={pkL5}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL5"
                        />
                        <TextBoxRender
                            textContent={pkR5}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR5"
                        />
                    </div>
                    <h1 className="box-title">GAME LINEUP</h1>
                    <div className="frag-ctn">
                        <ul id='box-lineup-blue' className="box-lineup" >
                            <TextBoxRender
                                title="PL1"
                                idTextBox="player1"
                                textContentue={player1}
                            />
                            <TextBoxRender
                                title="PL2"
                                idTextBox="player2"
                                textContentue={player2}
                            />
                            <TextBoxRender
                                title="PL3"
                                idTextBox="player3"
                                textContentue={player3}
                            />
                            <TextBoxRender
                                title="PL4"
                                idTextBox="player4"
                                textContentue={player4}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <TextBoxRender
                                title="PL1"
                                idTextBox="player5"
                                textContent={player5}
                            />
                            <TextBoxRender
                                title="PL2"
                                idTextBox="player6"
                                textContent={player6}
                            />
                            <TextBoxRender
                                title="PL3"
                                idTextBox="player7"
                                textContent={player7}
                            />
                            <TextBoxRender
                                title="PL4"
                                idTextBox="player8"
                                textContent={player8}
                            />
                        </ul>
                    </div>
                </div>
            )
        }
        // Return backend component
        // banpick container
        function BanpickContainer(){
            
            return (
                <div id="banpickContainer" className="box-ctn">
                    <h1 className="box-title">BANPICK GAME 1</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            title="player"
                            idTextBox="game1PlayerPick-left"
                            textContent={game1PlayerPickLeft}
                        />
                        <TextBoxRender
                            title="player"
                            idTextBox="game1PlayerPick-right"
                            textContent={game1PlayerPickRight}
                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 2</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            title="player"
                            idTextBox="game2PlayerPick-left"
                            textContent={game2PlayerPickLeft}

                        />
                        <TextBoxRender
                            title="player"
                            idTextBox="game2PlayerPick-right"
                            textContent={game2PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 3</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            title="player"
                            idTextBox="game3PlayerPick-left"
                            textContent={game3PlayerPickLeft}
                        />
                        <TextBoxRender
                            title="player"
                            idTextBox="game3PlayerPick-right"
                            textContent={game3PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 4</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            title="player"
                            idTextBox="game4PlayerPick-left"
                            textContent={game4PlayerPickLeft}
                        />
                        <TextBoxRender
                            title="player"
                            idTextBox="game4PlayerPick-right"
                            textContent={game4PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 5</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            title="player"
                            idTextBox="game5PlayerPick-left"
                            textContent={game5PlayerPickLeft}

                        />
                        <TextBoxRender
                            title="player"
                            idTextBox="game5PlayerPick-right"
                            textContent={game5PlayerPickRight}
                        />
                        <BtnRender
                            btnName="Start Lineup"
                            idBtn="syncBtn"
                            classBtn="btn"
                            btnClick={HandleStartLayout}
                        />
                        <BtnRender
                            btnName="Off Lineup"
                            idBtn="swapBtn"
                            classBtn="btn"
                            btnClick={HandleOffLayout}
                        />
                        <BtnRender
                            btnName="Sync Lineup"
                            idBtn="swapBtn"
                            classBtn="btn"
                            btnClick={HandleSyncStatslayout}
                        />
                    </div>
                </div>
            )
        }
        function StreamInfor() {
            // Return component stream info
            return (
                <div id="streamInfo" className="box-ctn">
                    <h1 className="box-title">Countdown Code</h1>
                    <InputRender
                        name="Total Time"
                        placeholder="time"
                        inputID="start-time"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                    />
                    <InputRender
                        name="Code"
                        placeholder="giftcode"
                        inputID="giftcode"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                    />
                    <BtnRender
                        btnName="Show"
                        idBtn="show-countdown"
                        classBtn="btn"
                        btnClick={showCountdown}
                    />
                    <BtnRender
                        btnName="Start Countdown"
                        idBtn="start-countdown"
                        classBtn="btn"
                        btnClick={StartCountdown}
                    />
                    <BtnRender
                        btnName="Stop Countdown"
                        idBtn="stop-countdown"
                        classBtn="btn"
                        btnClick={StopCountdown}
                    />
                    <InputRender
                        name="Minus"
                        placeholder="Time"
                        inputID="minus-time"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                    />
                    <BtnRender
                        btnName="Minus time"
                        idBtn="minus-time-btn"
                        classBtn="btn"
                        btnClick={MinusCountdown}
                    />
                </div>
            )
        }
        return (
            <div className="body-ctn row-ctn">
                <div className="colum-ctn">
                    <MatchCreate/>
                    <StreamInfor/>
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
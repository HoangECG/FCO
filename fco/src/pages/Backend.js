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
    const [isReload, setIsReload] = useState(false)
    


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.Getcrrmatch()
            console.log(response['player1'])
            setGame(response['game'])
            setMatch(response['matchName'])
            setRound(response['round'])
            setBo(response['bo'])
            setDate(response['date'])
            setTeamBlue(response['team-1'])
            setTeamNameBlue(response['fullNameTeam-1'])
            setTeamRed(response['team-2'])
            setTeamNameRed(response['fullNameTeam-2'])
            setPlayer1(response['player1'])
            setPlayer2(response['player2'])
            setPlayer3(response['player3'])
            setPlayer4(response['player4'])
            setPlayer5(response['player5'])
            setPlayer6(response['player6'])
            setPlayer7(response['player7'])
            setPlayer8(response['player8'])
            setGame1PlayerPickLeft(response['pickleft1'])
            setGame2PlayerPickLeft(response['pickleft2'])
            setGame3PlayerPickLeft(response['pickleft3'])
            setGame4PlayerPickLeft(response['pickleft4'])
            setGame5PlayerPickLeft(response['pickleft5'])
            setGame1PlayerPickRight(response['pickright1'])
            setGame2PlayerPickRight(response['pickright2'])
            setGame3PlayerPickRight(response['pickright3'])
            setGame4PlayerPickRight(response['pickright4'])
            setGame5PlayerPickRight(response['pickright5'])
            setscL1(response['scL1'])
            setscL2(response['scL2'])
            setscL3(response['scL3'])
            setscL4(response['scL4'])
            setscL5(response['scL5'])
            setscR1(response['scR1'])
            setscR2(response['scR2'])
            setscR3(response['scR3'])
            setscR4(response['scR4'])
            setscR5(response['scR5'])
            setpkL1(response['pkL1'])
            setpkL2(response['pkL2'])
            setpkL3(response['pkL3'])
            setpkL4(response['pkL4'])
            setpkL5(response['pkL5'])
            setpkR1(response['pkR1'])
            setpkR2(response['pkR2'])
            setpkR3(response['pkR3'])
            setpkR4(response['pkR4'])
            setpkR5(response['pkR5'])
        }
        fetchMyAPI()}, [isReload])

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
        function rtFix(props){
            if (props === '1'){
                return "text-info-box text-info-box-fix"
            }else{
                return "text-info-box"
            }

        }
        return (
            <div className="text-info-ctn">
                <h1 className="title-text-box">{props.title}</h1>
                <div id={props.idTextBox} className={rtFix(props.fixed)}>{props.textinbox}</div>
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
        beAPI.GetPull()
        setIsReload(!isReload)
    }
    function BackendBody() {
        // Component Match ID check
        function MatchCreate() {
            // Return component
            return (
                <div id="match-create" className="box-ctn">
                    <h1 className="box-title">MATCH</h1>
                    <TextBoxRender
                        fixed='0'
                        idTextBox="match"
                        textinbox={match}
                        title="match"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="bo"
                        textinbox={bo}
                        title="bo"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="team-1"
                        textinbox={teamBlue}
                        title="team 1"
                    />
                    <TextBoxRender
                        fixed='0'
                        idTextBox="team2"
                        textinbox={teamRed}
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
                            fixed='1'
                            textinbox={scL1}
                            title='score'
                            idTextBox="scL1"
                            classname="text-info-box-fix"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={scR1}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR1"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkL1}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL1"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkR1}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR1"
                        />
                    </div>
                    <h1 className="box-title">GAME 2 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='1'
                            textinbox={scL2}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scL2"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={scR2}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR2"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkL2}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL2"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkR2}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR2"
                        />
                    </div>
                    <h1 className="box-title">GAME 3 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='1'
                            textinbox={scL3}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scL3"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={scR3}
                            title='score'
                            classname="text-info-box-fix"
                            idTextBox="scR3"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkL3}
                            classname="text-info-box-fix"
                            title='PK Left'
                            idTextBox="pkL3"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkR3}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR3"
                        />
                    </div>
                    <h1 className="box-title">GAME 4 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='1'
                            textinbox={scL4}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scL4"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={scR4}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scR4"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkL4}
                            classname="text-info-box-fix"
                            title='PK Left'
                            idTextBox="pkL4"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkR4}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR4"
                        />
                    </div>
                    <h1 className="box-title">GAME 5 INFO</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='1'
                            textinbox={scL5}
                            classname="text-info-box-fix"
                            title='score'
                            idTextBox="scL5"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={scR5}
                            title='score'
                            idTextBox="scR5"
                            classname="text-info-box-fix"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkL5}
                            title='PK Left'
                            classname="text-info-box-fix"
                            idTextBox="pkL5"
                        />
                        <TextBoxRender
                            fixed='1'
                            textinbox={pkR5}
                            title='PK Right'
                            classname="text-info-box-fix"
                            idTextBox="pkR5"
                        />
                    </div>
                    <h1 className="box-title">GAME LINEUP</h1>
                    <div className="frag-ctn">
                        <ul id='box-lineup-blue' className="box-lineup" >
                            <TextBoxRender
                                fixed='0'
                                title="PL1"
                                idTextBox="player1"
                                textinbox={player1}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL2"
                                idTextBox="player2"
                                textinbox={player2}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL3"
                                idTextBox="player3"
                                textinbox={player3}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL4"
                                idTextBox="player4"
                                textinbox={player4}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <TextBoxRender
                            fixed='0'
                                title="PL5"
                                idTextBox="player5"
                                textinbox={player5}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL6"
                                idTextBox="player6"
                                textinbox={player6}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL7"
                                idTextBox="player7"
                                textinbox={player7}
                            />
                            <TextBoxRender
                                fixed='0'
                                title="PL8"
                                idTextBox="player8"
                                textinbox={player8}
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
                            fixed='0'
                            title="player"
                            idTextBox="game1PlayerPick-left"
                            textinbox={game1PlayerPickLeft}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game1PlayerPick-right"
                            textinbox={game1PlayerPickRight}
                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 2</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game2PlayerPick-left"
                            textinbox={game2PlayerPickLeft}

                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game2PlayerPick-right"
                            textinbox={game2PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 3</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game3PlayerPick-left"
                            textinbox={game3PlayerPickLeft}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game3PlayerPick-right"
                            textinbox={game3PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 4</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game4PlayerPick-left"
                            textinbox={game4PlayerPickLeft}
                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game4PlayerPick-right"
                            textinbox={game4PlayerPickRight}

                        />
                    </div>
                    <h1 className="box-title">BANPICK GAME 5</h1>
                    <div className="frag-ctn">
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game5PlayerPick-left"
                            textinbox={game5PlayerPickLeft}

                        />
                        <TextBoxRender
                            fixed='0'
                            title="player"
                            idTextBox="game5PlayerPick-right"
                            textinbox={game5PlayerPickRight}
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
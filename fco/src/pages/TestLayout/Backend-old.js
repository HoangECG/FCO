import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "../NavBar/NavBar"
import { GETMATCHID } from '../../api/FetchApi'


// Body START
function BackendBody() {
    // defind
    const listMatchPlayed = ['match 1', 'match 2', 'match 3', 'Final', "SemiFinal", 'match 2', 'match 3', 'Final', "SemiFinal", 'match 2', 'match 3', 'Final', "SemiFinal", 'match 2', 'match 3', 'Final', "SemiFinal"]
    const listTeam = ['HN', 'BD', 'TDT', 'HEV']
    const listBo = ['Bo1', 'Bo2', 'Bo3', 'Bo5', "Bo7"]
    const casterName = ['Đức Huy', 'Trần Nam', 'Thanh Tung', 'Hồng Quan', "Hoàng Sơn"]
    const matchID = "0"
    const bestOf = "3"
    const teamBlue = 'HNN'
    const teamRed = 'BDD'
    // using data local storage to get data. use 1 function useEffect with button to refrest data . api call after fetch 
    const game_score = [{ 'game': '1', 'status': 'end', 'win': 'HN', 'lose': 'BD' }, { 'game': '2', 'status': 'start', 'win': 'TBD', 'lose': 'TBD' }, { 'game': '3', 'status': 'pending', 'win': 'TBD', 'lose': 'TBD' }]
    const listPlayerBlue = ['Player1111111', 'Player2', 'Player3', 'Player444444', 'Player5555555', 'Player6666666', 'Player777777']
    const listPlayerRed = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'player6', 'Player777777']
    // Defind END
    // Button render

    // Fetch api get match played list
    

    // Button render
    function BtnRender(props) {
        return (
            <div className="btn-div">
                <button type="button" id={props.idBtn} className={props.classBtn} style={props.inlineCss} onClick={props.btnClick}>{props.btnName}</button>
            </div>
        )
    }
    // Input render
    function InputRender(props) {
        function RenderOpt(props, index) {
            return (
                <option key={index} value={props} />
            )
        }
        return (
            <div className="input-div">
                <label htmlFor={props.inputID} className={props.labelClassName}>{props.name}</label>
                <input id={props.inputID} className={props.inputClassName} list={props.idDatalist}
                    type="text" placeholder={props.name} name={props.name} onChange={props.inputOnChange}></input>
                <datalist id={props.idDatalist}>
                    {props.listData.map(RenderOpt)}
                </datalist>
            </div>
        )
    }
    // swap side 
    function SwapSide() {
        return console.log(Math.random())
    }
    function SyncMatchStream() {

    }
    // Match ID input handle

    // Match check START
    function Matchcheck(props) {
        var current_game = '1'
        const [listMatchID, setListMatchID] = useState([])
        // Fetch API get match id list
        useEffect(() => {
            GETMATCHID()
                .then((response) => { setListMatchID(response) })
        }, [])
        // handle match id input onchange and check avaliable
        function handleOnChangeMatchID(e) {
            if (listMatchID.includes(e.target.value) === true) {
                document.getElementById('match-stt').innerText = "Match created press sync to get info"
                document.getElementById('create-btn').innerText = "Sync Match Data"
            }
            else {
                console.log()
                document.getElementById('match-stt').innerText = "Match not found create match"
                document.getElementById('create-btn').innerText = "Create Match"
            }
        }
        // handle input variable
        let blueteam = props.teamBlue
        let redteam = props.teamRed
        let blueScore = 0;
        let redScore = 0;
        for (let i = 0; i < props.game_score.length; i++) {
            if (props.game_score[i]['win'] === blueteam) {
                blueScore++
            } else if (props.game_score[i]['win'] === redteam) {
                redScore++
            }
        }
        // render game list
        function renderGame(props, index) {
            return (
                <InputRender
                    // game 1 score render
                    key={index}
                    name={"GAME " + props.game}
                    inputID={"game-" + props.game + "-input"}
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist={props.game + "-id-data-list"}
                    listData={[blueteam, redteam]}
                />
            )
        }
        return (
            <div id="match-create-check-ctn">
                <h1 className="title-ctn">Match</h1>
                <div id="match-info-container" className='colum-match-container border-right'>
                    <div id="match-input-container" className='row-input-container'>
                        <InputRender
                            name="Match ID"
                            inputID="match-id-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="match-id-id-data-list"
                            listData={listMatchID.slice((listMatchID.length - 5), listMatchID.length)}
                            inputOnChange={handleOnChangeMatchID}
                        />
                    </div>
                    <div id="match-stt">Type Match ID number here</div>
                    <div id="blue-team-input-container" className='row-input-container'>
                        <ul className="colum-ctn team-ctn">
                            <li className="row-ctn match-ctn">
                                <InputRender
                                    name="Match Name"
                                    inputID="match-name-input"
                                    labelClassName="label-style"
                                    inputClassName="input-style"
                                    idDatalist="match-name-id-data-list"
                                    listData={listMatchPlayed.slice((listMatchPlayed.length - 5), listMatchPlayed.length)}
                                />
                                <InputRender
                                    name="BO"
                                    inputID="bo-input"
                                    labelClassName="label-style"
                                    inputClassName="input-style"
                                    idDatalist="bo-id-data-list"
                                    listData={listBo}
                                />
                            </li>
                            <li className="row-ctn">
                                <InputRender
                                    name="Blue"
                                    inputID="blue-team-input"
                                    labelClassName="label-style"
                                    inputClassName="input-style"
                                    idDatalist="blue-team-id-data-list"
                                    listData={props.listTeam}
                                />
                                <InputRender
                                    name="Red"
                                    inputID="red-team-input"
                                    labelClassName="label-style"
                                    inputClassName="input-style"
                                    idDatalist="red-team-id-data-list"
                                    listData={props.listTeam}
                                />
                            </li>
                            <li style={{ width: 'var(--match-width)', display: "flex", justifyContent: 'flex-start', position: 'relative', bottom: '-5px' }}>
                                <BtnRender
                                    idBtn="create-btn"
                                    classBtn="btn"
                                    btnName='Create Match'
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="match__stream-info" className="colum-ctn">
                    <h1 className="title-ctn">infom</h1>
                    <div className="row-ctn">
                        <InputRender
                            // day render
                            name="Day"
                            inputID="day-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="day-id-data-list"
                            listData={[]}
                        />
                        <InputRender
                            // day render
                            name="ROUND"
                            inputID="round-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="round-id-data-list"
                            listData={[]}
                        />
                    </div>
                    <div id="match__stream-caster" className="row-ctn">
                        <InputRender
                            // caster 1 render
                            name="caster 1"
                            inputID="caster_1-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="caster_1-id-data-list"
                            listData={casterName}
                        />
                        <InputRender
                            // caster 2 render
                            name="caster 2"
                            inputID="caster_2-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="caster_2-id-data-list"
                            listData={casterName}
                        />
                        <InputRender
                            // Host render
                            name="Host"
                            inputID="host-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="host-id-data-list"
                            listData={casterName}
                        />
                    </div>
                    <div id="match__stream-predic" className="row-ctn">
                        <InputRender
                            // predic 1 render
                            name="predic 1"
                            inputID="predic_1-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="predic_1-id-data-list"
                            listData={[props.teamBlue, props.teamRed]}
                        />
                        <InputRender
                            // predic 2 render
                            name="predic 2"
                            inputID="predic_2-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="predic_2-id-data-list"
                            listData={[props.teamBlue, props.teamRed]}
                        />
                        <InputRender
                            // predic 3 render
                            name="predic 3"
                            inputID="predic_3-input"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="predic_3-id-data-list"
                            listData={[props.teamBlue, props.teamRed]}
                        />
                    </div>
                    <div className="row-ctn">
                        <BtnRender
                            idBtn="sync__match__stream-btn"
                            classBtn="btn"
                            btnName='SYNC DATA'
                            btnClick={SyncMatchStream}
                        />
                    </div>
                </div>
                <div id="game_info-ctn" className="colum-ctn">
                    <h1 className="title-ctn">GAME {current_game}</h1>
                    <BtnRender
                        idBtn="sync__match__ID-btn"
                        classBtn="btn"
                        btnName={<ion-icon name="reload-outline"></ion-icon>}
                        btnClick={SyncMatchStream}
                    />
                    <div className="row-ctn center-ctn full-ctn">
                        <div id="game_info-ID" className="text-view">MATCH ID: #{props.matchID}</div>
                        <div id="game_info-current" className="text-view">GAME {current_game}</div>
                        <div id="game_info-BO" className="text-view">Best Of {props.bestOf}</div>
                    </div>
                    <div id='game-score-total' className="row-ctn center-ctn full-ctn">
                        <div id='team_blue_score' className="text-view">{teamBlue + ' | ' + blueScore}</div>
                        <div id='team_red_score' className="text-view">{teamRed + ' | ' + redScore}</div>
                    </div>
                    <div id="game_info_gamerender" className="row-ctn">
                        {props.game_score.map(renderGame)}
                    </div>
                </div>
                <div className="row-ctn center-ctn">
                    <BtnRender
                        idBtn="sync-lineup-btn"
                        classBtn="btn"
                        btnName='SYNC DATA'
                        btnClick={SwapSide}
                    />
                    <BtnRender
                        idBtn="swap-btn"
                        classBtn="btn"
                        btnName='SWAP SIDE'
                        btnClick={SwapSide}
                    />
                </div>
            </div>
        )
    }
    // Match check END
    // 
    // Match info START
    function TeamInfo(props) {
        const [resultLineUpBlue, setResultLineUpBlue] = useState(props.listPlayerBlue.slice(0, 5))
        const [resultLineUpRed, setResultLineUpRed] = useState(props.listPlayerRed.slice(0, 5))
        function renderListPlayer(props, index) {
            return (
                <li key={index} className="player-lineup-css" id={props} draggable='true' onDragStart={drag} onMouseDown={disableDrop} onDragEnd={dragEnd}>{props}</li>
            )
        }
        function renderResultPlayer(props, index) {
            return (
                <li key={index} className="lineup-result-css">{props}</li>
            )
        }
        function disableDrop(e) {
            return false;
        }
        function allowDrop(e) {
            e.preventDefault();
        }
        function drag(e, index) {
            e.dataTransfer.setData('text', e.target.id)
        }
        function drop(e, index) {
            if (e.target.localName === 'li') {
                for (let i = 0; i < e.target.parentNode.children.length - 1; i++) {
                    if (e.target.id === e.target.parentNode.children[i].id) {
                        e.preventDefault();
                        const data = e.dataTransfer.getData('text')
                        e.target.parentNode.insertBefore(document.getElementById(data), document.getElementById(e.target.parentNode.id).children[i])
                    }
                }

            }
            else {
                e.preventDefault();
                const data = e.dataTransfer.getData('text')
                e.target.appendChild(document.getElementById(data))
            }
        }
        function dragEnd(e) {
            let mem = []
            if (e.target.parentNode.id === 'box-lineup-blue') {
                for (let i = 2; i < 7; i++) {
                    mem.push(document.querySelector(`#box-lineup-blue >li:nth-child(${i})`).innerText)
                }
                setResultLineUpBlue(mem)
            } else if (e.target.parentNode.id === 'box-lineup-red') {
                for (let i = 2; i < 7; i++) {
                    mem.push(document.querySelector(`#box-lineup-red >li:nth-child(${i})`).innerText)
                }
                setResultLineUpRed(mem)
            }
        }
        return (
            <div className="row-ctn border-ctn" id="lineup-backend-ctn" style={{ background: "var(--bg-color)" }}>
                <h1 className="title-ctn">Lineup</h1>
                <div id="team-dad-lineup" className="team-ctn team-dad-ctn">
                    <ul id='box-lineup-blue' className="box-lineup" onDrop={drop} onDragOver={allowDrop}>
                        <li className="tagTeam">{props.teamBlue}</li>
                        {props.listPlayerBlue.map(renderListPlayer)}
                    </ul>
                    <ul id='box-lineup-red' className="box-lineup" onDrop={drop} onDragOver={allowDrop}>
                        <li className="tagTeam">{props.teamRed}</li>
                        {props.listPlayerRed.map(renderListPlayer)}
                    </ul>
                </div>
                <div id='lineup-result' className="colum-ctn center-ctn">
                    <h1 className="title-ctn">Result</h1>
                    <ul id="line-up-result-blue" className="lineup_result-box row-ctn">
                        {resultLineUpBlue.map(renderResultPlayer)}
                    </ul>
                    <ul id="line-up-result-red" className="lineup_result-box row-ctn">
                        {resultLineUpRed.map(renderResultPlayer)}
                    </ul>
                </div>
            </div>
        )
    }
    // Match info END
    return (
        <div className="body-container">
            <div className="colum-ctn">
                <Matchcheck
                    listTeam={listTeam}
                    teamBlue={teamBlue}
                    teamRed={teamRed}
                    listPlayerBlue={listPlayerBlue}
                    listPlayerRed={listPlayerRed}
                    matchID={matchID}
                    bestOf={bestOf}
                    game_score={game_score}
                />
                <TeamInfo
                    teamBlue={teamBlue}
                    teamRed={teamRed}
                    listPlayerBlue={listPlayerBlue}
                    listPlayerRed={listPlayerRed}
                />
            </div>
        </div>
    );
};
// Body END
// Export
function Backend() {
    return (
        <div className="main-container">
            <NavBar />
            <BackendBody />
        </div>
    )
}
export default Backend;
import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import * as beAPI from '../api/FetchApi'

// Fetch before mount




// Body START
function BackendBody() {
    const [game, setGame] = useState('1')
    const [match, setMatch] = useState('Match 1')
    const [round, setRound] = useState('swiss stage')
    const [bo, setBo] = useState('3')
    const [date, setDate] = useState('20/10/2024')
    const [teamBlue, setTeamBlue] = useState('SGP')
    const [teamNameBlue, setTeamNameBlue] = useState('Hà Nội')
    const [teamRed, setTeamRed] = useState('SGP')
    const [teamNameRed, setTeamNameRed] = useState('Hà Nội')
    const [lineupFullRed, setLineupFullRed] = useState([
        "player 1",
        "player 2",
        "player 3",
        "player 4",
        "player 5",
        "player 6",
        "player 7"
    ])
    const [lineupFullBlue, setlineupFullBlue] = useState([
        "player 1",
        "player 2",
        "player 3",
        "player 4",
        "player 5",
        "player 6",
        "player 7"
    ])


    useEffect(() => {
        async function fetchMyAPI() {
            let response = await beAPI.Getcrrmatch()
            console.log(response['game'])
            setGame(response['game'])
            setMatch(response['match'])
            setRound(response['round'])
            setBo(response['bo'])
            setDate(response['date'])
            setTeamBlue(response['team-1'])
            setTeamNameBlue(response['fullNameTeam-1'])
            setTeamRed(response['team-2'])
            setTeamNameRed(response['fullNameTeam-2'])
            setlineupFullBlue(response['lineUpFull-1'])
            setLineupFullRed(response['lineUpFull-2'])
        }
    
        fetchMyAPI()
      }, [])
    // Text info render
    function TextBoxRender(props) {
        return (
            <div className="text-info-ctn">
                <h1 className="title-text-box">{props.title}</h1>
                <div id={props.idTextBox} className="text-info-box">{props.textContent}</div>
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
                    type="text" placeholder={props.placeholder} name={props.name} defaultValue={props.value}></input>
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
    // Component Match ID check
    function MatchCreate() {
        // Handle onchange data

        // Handle button click
        function HandleSyncButtonClick() {
            return
        }
        // Handle create button

        // Return component
        return (
            <div id="match-create" className="box-ctn">
                <h1 className="box-title">MATCH</h1>
                <InputRender
                    name="MATCH"
                    placeholder="MATCH ID"
                    inputID="matchIdInput"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="match-id-id-data-list"
                    listData={["1"]}
                    value={match}
                />
                <InputRender
                    name="BO"
                    placeholder="BEST OF "
                    inputID="matchCreateBo"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="best-of-id-data-list"
                    listData={["1", "2", "3", "5", "7"]}
                    value={bo}
                />
                <InputRender
                    name="BLUE"
                    placeholder="TEAM 1"
                    inputID="matchCreateTeam1"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="team-1-id-data-list"
                    listData={[]}
                    value={teamBlue}
                />
                <InputRender
                    name="RED"
                    placeholder="TEAM 2"
                    inputID="matchCreateTeam2"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="team-2-id-data-list"
                    listData={[]}
                    value={teamRed}
                />
                <BtnRender
                    btnName="SYNC MATCH"
                    idBtn="syncBtn"
                    classBtn="btn"
                    btnClick={HandleSyncButtonClick}
                />
            </div>
        )
    }
    // Stream info component
    function StreamInfor() {
        //  Caster name list
        let CASTERLIST = ['Trần Nam', 'Đức Huy', 'Hồng Quân', 'Thanh Tùng', 'Nam Anh', 'Hoàng Sơn', 'Phương Thảo']
        let casterListNow = window.localStorage.getItem("casterName")
        let predictNow = window.localStorage.getItem("predictNow")
        if (casterListNow === null) {
            window.localStorage.setItem("casterName", JSON.stringify([CASTERLIST[0], CASTERLIST[1], CASTERLIST[6]]))
        }
        if (predictNow === null) {
            window.localStorage.setItem("predictNow", JSON.stringify(["0-0", "0-0", "0-0"]))
        }
        // Handle click sync data stream
        function HandleSyncDataStream() {
            let casterListPicker = [document.getElementById('Caster1').value, document.getElementById('Caster2').value, document.getElementById('hostName').value]
            let predicListPicker = [document.getElementById('caster-1-Predict').value, document.getElementById('caster-2-Predict').value, document.getElementById('host-Predict').value]
            window.localStorage.setItem("casterName", JSON.stringify(casterListPicker))
            window.localStorage.setItem("predictNow", JSON.stringify(predicListPicker))
        }

        // Return component stream info
        return (
            <div id="streamInfo" className="box-ctn">
                <h1 className="box-title">STREAM INFO</h1>
                <InputRender
                    name="CASTER"
                    placeholder="Caster 1"
                    inputID="Caster1"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="Caster1-id-data-list"
                    listData={CASTERLIST}
                    value={JSON.parse(casterListNow)[0]}
                />
                <InputRender
                    name="CASTER"
                    placeholder="Caster 2"
                    inputID="Caster2"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="Caster2-id-data-list"
                    listData={CASTERLIST}
                    value={JSON.parse(casterListNow)[1]}
                />
                <InputRender
                    name="HOST"
                    placeholder="Host name"
                    inputID="hostName"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="host-id-data-list"
                    listData={CASTERLIST}
                    value={JSON.parse(casterListNow)[2]}
                />
                <h1 className="box-title">PREDICT</h1>
                <InputRender
                    name="PRD"
                    placeholder="Caster 1"
                    inputID="caster-1-Predict"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="id-data-list"
                    listData={[]}
                    value={JSON.parse(predictNow)[0]}
                />
                <InputRender
                    name="PRD"
                    placeholder="Caster 2"
                    inputID="caster-2-Predict"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="id-data-list"
                    listData={[]}
                    value={JSON.parse(predictNow)[1]}
                />
                <InputRender
                    name="PRD"
                    placeholder="Host"
                    inputID="host-Predict"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="id-data-list"
                    listData={['o','0']}
                    value={JSON.parse(predictNow)[2]}
                />
                <BtnRender
                    btnName="Sync Data"
                    idBtn="syncDataStream"
                    classBtn="btn"
                    btnClick={HandleSyncDataStream}
                />
            </div>
        )
    }

    // Match incoming component
    function MatchConfig() {
        //  Handle drag drop
        
        function renderListPlayerBlue(props, index) {
            return (
                <li key={index} className="player-lineup-blue" id={"playerBlue" + index} >{props}</li>
            )
        }
        function renderListPlayerRed(props, index) {
            return (
                <li key={index} className="player-lineup-red" id={"playerRed" + index} >{props}</li>
            )
        }

        return (
            <div id="match-info-result">
                <h1 className="box-title">MATCH ID | #0 </h1>
                <div className="frag-ctn">
                    <InputRender
                        name="ROUND"
                        placeholder="NAME"
                        inputID="matchConfigRound"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={round}
                    />
                    <InputRender
                        name="DATE"
                        placeholder="DATE"
                        inputID="matchConfigDate"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={date}
                    />
                </div>
                <h1 className="box-title">GAME {game} INFO</h1>
                <div className="frag-ctn">
                    <TextBoxRender
                        title={teamBlue}
                        textContent={"0"}
                        idTextBox="blueScore"
                    />
                    <TextBoxRender
                        title={teamRed}
                        textContent={"0"}
                        idTextBox="redScore"
                    />
                </div>
                <h1 className="box-title">GAME {game} LINEUP</h1>
                <div className="frag-ctn">
                    <ul id='box-lineup-blue' className="box-lineup" >
                        {lineupFullBlue.map(renderListPlayerBlue)}
                    </ul>
                    <ul id='box-lineup-red' className="box-lineup" >
                        {lineupFullRed.map(renderListPlayerRed)}
                    </ul>
                </div>
            </div>
        )
    }
    // Return backend component
    return (
        <div className="body-ctn row-ctn">
            <div className="colum-ctn">
                <MatchCreate />
                <StreamInfor />
            </div>
            <div className="box-ctn">
                <MatchConfig />
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
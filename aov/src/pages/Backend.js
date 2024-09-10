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
    const [player9, setPlayer9] = useState('player9')
    const [player10, setPlayer10] = useState('player10')
    const [lineupFullBlue,setLineupFullBlue] = useState(['1','2','3','4','5'])
    const [lineupFullRed,setLineupFullRed] = useState(['1','2','3','4','5'])

    // banpick const
    const [listChamp, setListChamp] = useState([])
    const [ban1, setBan1] = useState('None')
    const [ban2, setBan2] = useState('None')
    const [ban3, setBan3] = useState('None')
    const [ban4, setBan4] = useState('None')
    const [ban5, setBan5] = useState('None')
    const [ban6, setBan6] = useState('None')
    const [ban7, setBan7] = useState('None')
    const [ban8, setBan8] = useState('None')
    const [pick1, setPick1] = useState('None')
    const [pick2, setPick2] = useState('None')
    const [pick3, setPick3] = useState('None')
    const [pick4, setPick4] = useState('None')
    const [pick5, setPick5] = useState('None')
    const [pick6, setPick6] = useState('None')
    const [pick7, setPick7] = useState('None')
    const [pick8, setPick8] = useState('None')
    const [pick9, setPick9] = useState('None')
    const [pick10, setPick10] = useState('None')


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
            window.localStorage.setItem('player9',await response['player9'])
            window.localStorage.setItem('player10',await response['player10'])
            window.localStorage.setItem('sc-1',await response['sc-1'])
            window.localStorage.setItem('sc-2',await response['sc-2'])
            window.localStorage.setItem('ban1',await response['ban1'])
            window.localStorage.setItem('ban2',await response['ban2'])
            window.localStorage.setItem('ban3',await response['ban3'])
            window.localStorage.setItem('ban4',await response['ban4'])
            window.localStorage.setItem('ban5',await response['ban5'])
            window.localStorage.setItem('ban6',await response['ban6'])
            window.localStorage.setItem('ban7',await response['ban7'])
            window.localStorage.setItem('ban8',await response['ban8'])
            window.localStorage.setItem('pick1',await response['pick1'])
            window.localStorage.setItem('pick2',await response['pick2'])
            window.localStorage.setItem('pick3',await response['pick3'])
            window.localStorage.setItem('pick4',await response['pick4'])
            window.localStorage.setItem('pick5',await response['pick5'])
            window.localStorage.setItem('pick6',await response['pick6'])
            window.localStorage.setItem('pick7',await response['pick7'])
            window.localStorage.setItem('pick8',await response['pick8'])
            window.localStorage.setItem('pick9',await response['pick9'])
            window.localStorage.setItem('pick10',await response['pick10'])
            window.localStorage.setItem('linupFull-1',JSON.stringify(await responseLineupFullBlue))
            window.localStorage.setItem('linupFull-2',JSON.stringify(await responseLineupFullRed))
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
            setPlayer9(await response['player9'])
            setPlayer10(await response['player10'])
            setscrBlue(await response['sc-1'])
            setscrRed(await response['sc-2'])
            setBan1(await response['ban1'])
            setBan2(await response['ban2'])
            setBan3(await response['ban3'])
            setBan4(await response['ban4'])
            setBan5(await response['ban5'])
            setBan6(await response['ban6'])
            setBan7(await response['ban7'])
            setBan8(await response['ban8'])
            setPick1(await response['pick1'])
            setPick2(await response['pick2'])
            setPick3(await response['pick3'])
            setPick4(await response['pick4'])
            setPick5(await response['pick5'])
            setPick6(await response['pick6'])
            setPick7(await response['pick7'])
            setPick8(await response['pick8'])
            setPick9(await response['pick9'])
            setPick10(await response['pick10'])
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
                    type="text" placeholder={props.placeholder} name={props.name} defaultValue={props.value} onChange={onchangeInput}></input>
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
                            "player9": window.localStorage.getItem('player9'),
                            "player10": window.localStorage.getItem('player10')
                        })
                    })
                    setTimeout(function() {
                        window.location.reload()
                      }, 1000);
                    
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
                        "player1": window.localStorage.getItem('player6'),
                        "player2": window.localStorage.getItem('player7'),
                        "player3": window.localStorage.getItem('player8'),
                        "player4": window.localStorage.getItem('player9'),
                        "player5": window.localStorage.getItem('player10'),
                        "player6": window.localStorage.getItem('player1'),
                        "player7": window.localStorage.getItem('player2'),
                        "player8": window.localStorage.getItem('player3'),
                        "player9": window.localStorage.getItem('player4'),
                        "player10": window.localStorage.getItem('player5')
                    })
                })
                setTimeout(function() {
                    window.location.reload()
                  }, 1000);
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
                        inputID="Game"
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
                </div>
            )
        }
    
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
                                name="DSL"
                                placeholder="DSL"
                                inputID="blueDSL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueDSL-id-data-list"
                                listData={lineupFullBlue}
                                value={player1}
                            />
                            <InputRender
                                name="JGL"
                                placeholder="JGL"
                                inputID="blueJGL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueJGL-id-data-list"
                                listData={lineupFullBlue}
                                value={player2}
                            />
                            <InputRender
                                name="MID"
                                placeholder="MID"
                                inputID="blueMID"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueMID-id-data-list"
                                listData={lineupFullBlue}
                                value={player3}
                            />
                            <InputRender
                                name="ADL"
                                placeholder="ADL"
                                inputID="blueADL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueADL-id-data-list"
                                listData={lineupFullBlue}
                                value={player4}
                            />
                            <InputRender
                                name="SUP"
                                placeholder="SUP"
                                inputID="blueSUP"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="blueSUP-id-data-list"
                                listData={lineupFullBlue}
                                value={player5}
                            />
                        </ul>
                        <ul id='box-lineup-red' className="box-lineup" >
                        <InputRender
                                name="DSL"
                                placeholder="DSL"
                                inputID="RedDSL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedDSL-id-data-list"
                                listData={lineupFullRed}
                                value={player6}
                            />
                            <InputRender
                                name="JGL"
                                placeholder="JGL"
                                inputID="RedJGL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedJGL-id-data-list"
                                listData={lineupFullRed}
                                value={player7}
                            />
                            <InputRender
                                name="MID"
                                placeholder="MID"
                                inputID="RedMID"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedMID-id-data-list"
                                listData={lineupFullRed}
                                value={player8}
                            />
                            <InputRender
                                name="ADL"
                                placeholder="ADL"
                                inputID="RedADL"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedADL-id-data-list"
                                listData={lineupFullRed}
                                value={player9}
                            />
                            <InputRender
                                name="SUP"
                                placeholder="SUP"
                                inputID="RedSUP"
                                labelClassName="label-style"
                                inputClassName="input-style"
                                idDatalist="RedSUP-id-data-list"
                                listData={lineupFullRed}
                                value={player10}
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
                    <h1 className="box-title">BANPICK GAME {game}</h1>
                    <div className="frag-ctn">
                        <InputRender
                            name="Ban 1"
                            placeholder="Champ"
                            inputID="ban1"
                            labelClassName="label-style"
                            inputClassName="input-style"
                            idDatalist="id-data-list-banpick"
                            listData={listChamp}
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
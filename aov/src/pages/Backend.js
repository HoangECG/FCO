import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import { GetMatchId, GetMatchInfo, hostIP } from '../api/FetchApi'

// Fetch before mount




// Body START
function BackendBody() {
    const [isreload, setIsreload] = useState(false)
    // Button render
    function BtnRender(props) {
        return (
            <div className="btn-div">
                <button type="button" id={props.idBtn} className={props.classBtn} style={props.inlineCss} onClick={props.btnClick}>{props.btnName}</button>
            </div>
        )
    }
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
                    type="text" placeholder={props.placeholder} name={props.name} onChange={props.inputOnChange} disabled={props.IsDisableInput} defaultValue={props.value}></input>
                <datalist id={props.idDatalist}>
                    {props.listData.map(RenderOpt)}
                </datalist>
            </div>
        )
    }
    // Get data from local storage (match data / type of data return string)
    function GetLocalStorage(props) {
        if (window.localStorage.getItem('MatchOnLoad') === null) {
            let idOnLoad = "last"
            GetMatchInfo(idOnLoad)
                .then((res) => {
                    window.localStorage.setItem("MatchOnLoad", JSON.stringify(res))
                })
                .then(() => {
                    let dataPaser = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
                    return dataPaser[props]
                })

        } else {
            let dataPaser = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
            return dataPaser[props]
        }
    }

    // Get data from local storage (bracket data / type of data return object)
    // function GetBracketLSTeam(props) {
    //     if (window.localStorage.getItem('bracket') === null) {
    //         GetBracket()
    //             .then((res) => {
    //                 window.localStorage.setItem("bracket", JSON.stringify(res))
    //             })

    //         let dataPaser = JSON.parse(window.localStorage.getItem('bracket'))
    //         for (const i in dataPaser) {
    //             if (dataPaser[i]['team'] === props) {
    //                 return dataPaser[i]
    //             }
    //         }
    //     } else {
    //         let dataPaser = JSON.parse(window.localStorage.getItem('bracket'))
    //         for (const i in dataPaser) {
    //             if (dataPaser[i]['team'] === props) {
    //                 return dataPaser[i]
    //             }
    //         }
    //     }
    // }
    // Handle game playing
    function HandleGamePlaying(condition) {
        let memGame = JSON.parse(window.localStorage.getItem('gameOnPlay'))
        return memGame[`${condition}`]
    }
    // Handle score Left Right
    function HandleScoreLR(props) {
        let storageMatch = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
        // console.log(storageMatch['gameInfo']['0']['win'])
        let score = 0
        for (let i = 0; i < storageMatch['gameInfo'].length; i++) {
            if (storageMatch['gameInfo'][i]['win'] === props) {
                score = score + 1
            }
        }
        return score
    }
    // Handle noti
    function HandleNoti(props) {
        let ul = document.getElementById('popUpNotiBox')
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(`${props}`))
        if (ul.childNodes.length === 5) {
            ul.removeChild(ul.firstChild)
        }
        ul.appendChild(li)

    }

    // Component Match ID check
    function MatchCreate() {
        // List match id def and fetch
        const [listMatchId, setListMatchI] = useState([])
        const [listTeam, setListTeam] = useState([])
        const [disableInput, setDisableInput] = useState(false)
        useEffect(() => {
            GetMatchId()
                .then((res) => {
                    setListMatchI(res['listmatchID'])
                    setListTeam(res['listTeam'])
                })
        }, [])

        // Handle onchange data
        function IdMatchOnChange(e) {
            if (listMatchId.includes(e.target.value) === true) {
                setDisableInput(true)
                document.getElementById("createBtn").disabled = true
                document.getElementById("syncBtn").disabled = false
                GetMatchInfo(e.target.value)
                    .then((res) => {
                        document.getElementById('matchCreateBo').placeholder = res['bo']
                        document.getElementById('matchCreateTeam1').placeholder = res['team-1']
                        document.getElementById('matchCreateTeam2').placeholder = res['team-2']
                    })
            } else {
                setDisableInput(false)
                document.getElementById("syncBtn").disabled = true
                document.getElementById("createBtn").disabled = false
                document.getElementById('matchCreateBo').placeholder = "Best of"
                document.getElementById('matchCreateTeam1').placeholder = "Team 1"
                document.getElementById('matchCreateTeam2').placeholder = "Team 2"
            }

        }

        // Handle button click
        function HandleSyncButtonClick() {
            let idMatchInput = document.getElementById("matchIdInput").value
            if (idMatchInput.length === 0) {
                HandleNoti('Sync fail')
            } else if (listMatchId.includes(idMatchInput) === true) {
                window.localStorage.setItem('CurentMatch', idMatchInput)
            } else {

            }

            if (idMatchInput.length === 0) {
                GetMatchInfo(window.localStorage.getItem('CurentMatch'))
                    .then((res) => {
                        window.localStorage.setItem('MatchOnLoad', JSON.stringify(res))
                        setIsreload(!isreload)
                    })
            } else if (listMatchId.includes(idMatchInput) === true) {
                GetMatchInfo(idMatchInput)
                    .then((res) => {
                        window.localStorage.setItem('MatchOnLoad', JSON.stringify(res))
                        setIsreload(!isreload)
                    })
            } else {
                HandleNoti('Sync fail')
            }
            HandleNoti('Sync done')
        }
        // Handle create button
        function HandleCreateBTN() {
            let idMatchInput = document.getElementById("matchIdInput").value
            let newTeam1 = document.getElementById('matchCreateTeam1').value
            let newTeam2 = document.getElementById('matchCreateTeam2').value
            let newBo = document.getElementById('matchCreateBo').value
            if (newTeam1.length === 0 || newTeam2.length === 0 || newBo.length === 0) {
                HandleNoti('Create fail')
            } else if (listMatchId.includes(idMatchInput) === false) {
                fetch(`http://${hostIP}:14596/api/crn-${newTeam1}-${newTeam2}-${newBo}`)
                    .then(res => res.json())
                    .then((data) => {
                        window.localStorage.setItem('CurentMatch', data)
                        window.location.reload(true)
                    })
            } else if (listMatchId.includes(idMatchInput) === true) {
                HandleNoti('Create fail')
            }
        }

        // Return component
        return (
            <div id="match-create" className="box-ctn">
                <h1 className="box-title">MATCH CHECK</h1>
                <InputRender
                    name="MATCH"
                    placeholder="MATCH ID"
                    inputID="matchIdInput"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="match-id-id-data-list"
                    listData={listMatchId.slice((listMatchId.length - 3), listMatchId.length)}
                    inputOnChange={IdMatchOnChange}
                    value={GetLocalStorage('matchId')}
                />
                <InputRender
                    name="BO"
                    placeholder="BEST OF "
                    inputID="matchCreateBo"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="best-of-id-data-list"
                    listData={["1", "2", "3", "5", "7"]}
                    IsDisableInput={disableInput}
                    value={GetLocalStorage('bo')}
                />
                <InputRender
                    name="TEAM"
                    placeholder="TEAM 1"
                    inputID="matchCreateTeam1"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="team-1-id-data-list"
                    listData={listTeam}
                    IsDisableInput={disableInput}
                    value={GetLocalStorage('team-1')}
                />
                <InputRender
                    name="TEAM"
                    placeholder="TEAM 2"
                    inputID="matchCreateTeam2"
                    labelClassName="label-style"
                    inputClassName="input-style"
                    idDatalist="team-2-id-data-list"
                    listData={listTeam}
                    IsDisableInput={disableInput}
                    value={GetLocalStorage('team-2')}
                />
                <BtnRender
                    btnName="SYNC MATCH"
                    idBtn="syncBtn"
                    classBtn="btn"
                    btnClick={HandleSyncButtonClick}
                />
                <BtnRender
                    btnName="CREATE MATCH"
                    idBtn="createBtn"
                    classBtn="btn"
                    btnClick={HandleCreateBTN}
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
            HandleNoti('Sync data stream')
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
                    listData={[]}
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
        // Handle game win match config
        function HandleTeamWinBtn(e) {
            if (e.target.id === "leftWin") {
                window.localStorage.setItem("win", HandleGamePlaying('teamBlue'))
                let leftScore = Number(document.getElementById("blueScore").innerText)
                let rightScore = Number(document.getElementById("redScore").innerText)
                if ((leftScore + rightScore) < Number(HandleGamePlaying('game'))) {
                    window.localStorage.setItem("prvScoreL", leftScore)
                    window.localStorage.setItem("prvScoreR", rightScore)
                    document.getElementById("blueScore").innerText = leftScore + 1
                    HandleNoti(HandleGamePlaying('teamBlue') + " Win")
                } else if ((leftScore + rightScore) === Number(HandleGamePlaying('game')) && (leftScore + rightScore) < Number(GetLocalStorage('bo'))) {
                    document.getElementById("blueScore").innerText = window.localStorage.getItem("prvScoreL")
                    document.getElementById("redScore").innerText = window.localStorage.getItem("prvScoreR")
                    document.getElementById("blueScore").innerText = Number(document.getElementById("blueScore").innerText) + 1
                    HandleNoti(HandleGamePlaying('teamBlue') + " Win")
                } else if ((leftScore + rightScore) === Number(GetLocalStorage('bo'))) {

                }
            } else if (e.target.id === "rightWin") {
                window.localStorage.setItem("win", HandleGamePlaying('teamRed'))
                let leftScore = Number(document.getElementById("blueScore").innerText)
                let rightScore = Number(document.getElementById("redScore").innerText)
                if ((leftScore + rightScore) < Number(HandleGamePlaying('game'))) {
                    window.localStorage.setItem("prvScoreL", leftScore)
                    window.localStorage.setItem("prvScoreR", rightScore)
                    document.getElementById("redScore").innerText = rightScore + 1
                    HandleNoti(HandleGamePlaying('teamRed') + " Win")
                } else if ((leftScore + rightScore) === Number(HandleGamePlaying('game')) && (leftScore + rightScore) < Number(GetLocalStorage('bo'))) {
                    document.getElementById("blueScore").innerText = window.localStorage.getItem("prvScoreL")
                    document.getElementById("redScore").innerText = window.localStorage.getItem("prvScoreR")
                    document.getElementById("redScore").innerText = Number(document.getElementById("redScore").innerText) + 1
                    HandleNoti(HandleGamePlaying('teamRed') + " Win")
                } else if ((leftScore + rightScore) === Number(GetLocalStorage('bo'))) {

                }
            }
        }
        // Handle swap side match config
        //  Handle drag drop
        function disableDrop(e) {
            return false;
        }
        function allowDrop(e) {
            e.preventDefault();
        }
        function drag(e) {
            e.dataTransfer.setData('text', e.target.id)
        }
        function drop(e) {
            let target_data = [`${e.target.innerText}`]
            if (e.target.localName === 'li') {
                e.preventDefault();
                const data = e.dataTransfer.getData('text')
                document.getElementById(e.target.id).innerText = document.getElementById(data).innerText
                document.getElementById(data).innerText = target_data[0]
            }
            else {
                e.preventDefault();
            }
        }
        function dragEnd(e) {
            let mem = []
            if (e.target.parentNode.id === 'box-lineup-blue') {
                for (let i = 1; i < 6; i++) {
                    mem.push(document.querySelector(`#box-lineup-blue >li:nth-child(${i})`).innerText)
                }
                window.localStorage.setItem('lineup-blue', JSON.stringify(mem))
                let lineupBlue = (HandleGamePlaying('teamBlue') === GetLocalStorage('team-1') && GetLocalStorage('lineUpFull-1')) || GetLocalStorage('lineUpFull-2')
                let sortlist = [...mem]
                lineupBlue.forEach(player => {
                    mem.includes(player) || sortlist.push(player)
                });
                let matchOnload = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
                if (matchOnload['team-1'] === HandleGamePlaying('teamBlue')) {
                    matchOnload['lineUpFull-1'] = sortlist
                    window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchOnload))
                } else {
                    matchOnload['lineUpFull-2'] = sortlist
                    window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchOnload))
                }
                setIsreload(!isreload)
            } else if (e.target.parentNode.id === 'box-lineup-red') {
                for (let i = 1; i < 6; i++) {
                    mem.push(document.querySelector(`#box-lineup-red >li:nth-child(${i})`).innerText)
                }
                window.localStorage.setItem('lineup-red', JSON.stringify(mem))
                let lineupBlue = (HandleGamePlaying('teamBlue') === GetLocalStorage('team-1') && GetLocalStorage('lineUpFull-2')) || GetLocalStorage('lineUpFull-1')
                let sortlist = [...mem]
                lineupBlue.forEach(player => {
                    mem.includes(player) || sortlist.push(player)
                });
                let matchOnload = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
                if (matchOnload['team-1'] === HandleGamePlaying('teamBlue')) {
                    matchOnload['lineUpFull-2'] = sortlist
                    window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchOnload))
                } else {
                    matchOnload['lineUpFull-1'] = sortlist
                    window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchOnload))
                }
                setIsreload(!isreload)
            }
        }
        function renderListPlayerBlue(props, index) {
            return (
                <li key={index} className="player-lineup-blue" id={"playerBlue" + index} draggable='true' onDragStart={drag} onMouseDown={disableDrop} onDragEnd={dragEnd}>{props}</li>
            )
        }
        function renderListPlayerRed(props, index) {
            return (
                <li key={index} className="player-lineup-red" id={"playerRed" + index} draggable='true' onDragStart={drag} onMouseDown={disableDrop} onDragEnd={dragEnd}>{props}</li>
            )
        }

        return (
            <div id="match-info-result">
                <h1 className="box-title">MATCH ID | #{GetLocalStorage('matchId')} </h1>
                <div className="frag-ctn">
                    <InputRender
                        name="ROUND"
                        placeholder="NAME"
                        inputID="matchConfigRound"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={GetLocalStorage('round')}
                    />
                    <InputRender
                        name="MATCH"
                        placeholder="NUMBER"
                        inputID="matchConfigMatchNumber"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={GetLocalStorage('matchName')}
                    />
                    <InputRender
                        name="DATE"
                        placeholder="DATE"
                        inputID="matchConfigDate"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={[]}
                        value={GetLocalStorage('date')}
                    />
                    <InputRender
                        name="BEST OF"
                        placeholder="BO"
                        inputID="matchConfigBO"
                        labelClassName="label-style"
                        inputClassName="input-style"
                        idDatalist="id-data-list"
                        listData={["1", "2", "3", "5", "7"]}
                        value={GetLocalStorage('bo')}
                    />
                </div>
                <h1 className="box-title">GAME {HandleGamePlaying('game')} INFO</h1>
                <div className="frag-ctn">
                    <TextBoxRender
                        title={HandleGamePlaying('teamBlue')}
                        textContent={HandleScoreLR(HandleGamePlaying('teamBlue'))}
                        idTextBox="blueScore"
                    />
                    <TextBoxRender
                        title={HandleGamePlaying('teamRed')}
                        textContent={HandleScoreLR(HandleGamePlaying('teamRed'))}
                        idTextBox="redScore"
                    />
                    <BtnRender
                        btnName={HandleGamePlaying('teamBlue') + " WIN"}
                        idBtn="leftWin"
                        classBtn="btn"
                        btnClick={HandleTeamWinBtn}
                    />
                    <BtnRender
                        btnName={HandleGamePlaying('teamRed') + " WIN"}
                        idBtn="rightWin"
                        classBtn="btn"
                        btnClick={HandleTeamWinBtn}
                    />
                </div>
                <h1 className="box-title">GAME {HandleGamePlaying('game')} LINEUP</h1>
                <div className="frag-ctn">
                    <ul id='box-lineup-blue' className="box-lineup" onDrop={drop} onDragOver={allowDrop}>
                        {(GetLocalStorage('team-1') === HandleGamePlaying('teamBlue') && GetLocalStorage('lineUpFull-1').map(renderListPlayerBlue)) || GetLocalStorage('lineUpFull-2').map(renderListPlayerBlue)}
                    </ul>
                    <ul id='box-lineup-red' className="box-lineup" onDrop={drop} onDragOver={allowDrop}>
                        {(GetLocalStorage('team-1') === HandleGamePlaying('teamBlue') && GetLocalStorage('lineUpFull-2').map(renderListPlayerRed)) || GetLocalStorage('lineUpFull-1').map(renderListPlayerRed)}
                    </ul>
                </div>
            </div>
        )
    }
    // Match result component
    function MatchInfoResult() {
        return (
            <div id="match-info-result">
                <h1 className="box-title">MATCH INFO | #{GetLocalStorage('matchId')}</h1>
                <div className="frag-ctn">
                    <TextBoxRender
                        title="MATCH"
                        textContent={GetLocalStorage('matchName')}
                    />
                    <TextBoxRender
                        title="BO"
                        textContent={"Best of " + GetLocalStorage('bo')}
                    />
                    <TextBoxRender
                        title="ROUND"
                        textContent={GetLocalStorage('round')}
                    />
                    <TextBoxRender
                        title={GetLocalStorage('team-1')}
                        textContent={GetLocalStorage('fullNameTeam-1')}
                    />
                    <TextBoxRender
                        title={GetLocalStorage('team-2')}
                        textContent={GetLocalStorage('fullNameTeam-2')}
                    />
                </div>
                <h1 className="box-title">GAME {HandleGamePlaying('game')} INFO</h1>
                <div className="frag-ctn">
                    <TextBoxRender
                        title="GAME"
                        textContent={HandleGamePlaying('game')}
                    />
                    <TextBoxRender
                        title="SWAP"
                        textContent={((GetLocalStorage('team-1') === HandleGamePlaying('teamBlue') && "NO SWAP") || "SWAP")}
                    />
                    <TextBoxRender
                        title={HandleGamePlaying('teamBlue')}
                        textContent={HandleScoreLR(HandleGamePlaying('teamBlue'))}
                    />
                    <TextBoxRender
                        title={HandleGamePlaying('teamRed')}
                        textContent={HandleScoreLR(HandleGamePlaying('teamRed'))}
                    />
                </div>
                <h1 className="box-title">GAME {HandleGamePlaying('game')} Lineup</h1>
                <div className="frag-ctn">
                    <div className="lineupRS">
                        <TextBoxRender
                            title="DSL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-blue'))['0']}
                        />
                        <TextBoxRender
                            title="JGL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-blue'))['1']}
                        />
                        <TextBoxRender
                            title="MID"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-blue'))['2']}
                        />
                        <TextBoxRender
                            title="ADL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-blue'))['3']}
                        />
                        <TextBoxRender
                            title="SUP"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-blue'))['4']}
                        />
                    </div>
                    <div className="lineupRS">
                        <TextBoxRender
                            title="DSL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-red'))['0']}
                        />
                        <TextBoxRender
                            title="JGL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-red'))['1']}
                        />
                        <TextBoxRender
                            title="MID"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-red'))['2']}
                        />
                        <TextBoxRender
                            title="ADL"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-red'))['3']}
                        />
                        <TextBoxRender
                            title="SUP"
                            textContent={JSON.parse(window.localStorage.getItem('lineup-red'))['4']}
                        />
                    </div>
                </div>
            </div>
        )
    }

    // handle submit btn
    function SubmidBTN() {
        (async () => {
            let gameIDNow = GetLocalStorage('matchId')
            let matchEdit = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
            // def and nodelist
            let nodeListBlue = document.querySelectorAll('.player-lineup-blue')
            let nodeListRed = document.querySelectorAll('.player-lineup-red')
            let memBlue = []
            let memRed = []
            for (let i = 0; i < nodeListBlue.length; i++) {
                memBlue.push(nodeListBlue[i].innerText)
            }
            for (let i = 0; i < nodeListRed.length; i++) {
                memRed.push(nodeListRed[i].innerText)
            }
            // update lineup full (1st team)
            if (HandleGamePlaying('teamBlue') === GetLocalStorage('team-1')) {
                matchEdit['lineUpFull-1'] = memBlue
                matchEdit['lineUpFull-2'] = memRed
            } else {
                matchEdit['lineUpFull-1'] = memRed
                matchEdit['lineUpFull-2'] = memBlue
            }
            // config data 
            matchEdit['round'] = document.getElementById('matchConfigRound').value
            matchEdit['date'] = document.getElementById('matchConfigDate').value
            matchEdit['matchName'] = document.getElementById('matchConfigMatchNumber').value
            matchEdit['bo'] = document.getElementById('matchConfigBO').value
            matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1]['lineUpBlue'] = JSON.parse(window.localStorage.getItem('lineup-blue'))
            matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1]['lineUpRed'] = JSON.parse(window.localStorage.getItem('lineup-red'))
            // save data local storage
            window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchEdit))

            // fetch post data
            const rawResponse = await fetch(`http://${hostIP}:14596/api/post/${gameIDNow}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: window.localStorage.getItem('MatchOnLoad')
            });
            const content = await rawResponse.json();
            console.log(content)
            setIsreload(!isreload)
            HandleNoti('Push data done')
        })();
    }
    // handle swap side btn
    function SwapSide() {
        (async () => {
            let nodeListBlue = document.querySelectorAll('.player-lineup-blue')
            let nodeListRed = document.querySelectorAll('.player-lineup-red')
            let memBlue = []
            let memRed = []
            let prvScoreR = window.localStorage.getItem('prvScoreR')
            let prvScoreL = window.localStorage.getItem('prvScoreL')
            window.localStorage.setItem('prvScoreR', prvScoreL)
            window.localStorage.setItem('prvScoreL', prvScoreR)

            for (let i = 0; i < nodeListBlue.length; i++) {
                memBlue.push(nodeListBlue[i].innerText)
            }
            for (let i = 0; i < nodeListRed.length; i++) {
                memRed.push(nodeListRed[i].innerText)
            }
            // let gameIDNow = GetLocalStorage('matchId')
            let matchEdit = { ...JSON.parse(window.localStorage.getItem('MatchOnLoad')) }
            let gameOnLoad = { ...JSON.parse(window.localStorage.getItem('gameOnPlay')) }
            // config data 
            gameOnLoad['lineUpBlue'] = JSON.parse(window.localStorage.getItem('lineup-red'))
            gameOnLoad['lineUpRed'] = JSON.parse(window.localStorage.getItem('lineup-blue'))
            gameOnLoad['teamBlue'] = HandleGamePlaying('teamRed')
            gameOnLoad['teamRed'] = HandleGamePlaying('teamBlue')
            gameOnLoad['fullNameTeamBlue'] = HandleGamePlaying('fullNameTeamRed')
            gameOnLoad['fullNameTeamRed'] = HandleGamePlaying('fullNameTeamBlue')
            matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1] = gameOnLoad
            // update lineup full (2 team)
            if (HandleGamePlaying('teamBlue') === GetLocalStorage('team-1')) {
                matchEdit['lineUpFull-1'] = memBlue
                matchEdit['lineUpFull-2'] = memRed
            } else {
                matchEdit['lineUpFull-1'] = memRed
                matchEdit['lineUpFull-2'] = memBlue
            }
            // save data local storage
            window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchEdit))
            window.localStorage.setItem('gameOnPlay', JSON.stringify(gameOnLoad))
            window.localStorage.setItem('lineup-blue', JSON.stringify(gameOnLoad['lineUpBlue']))
            window.localStorage.setItem('lineup-red', JSON.stringify(gameOnLoad['lineUpRed']))
            setIsreload(!isreload)
            HandleNoti('Swap side done')
        })();
    }
    function NextGameBTN() {
        let totalScore = Number(document.getElementById('blueScore').innerText) + Number(document.getElementById('redScore').innerText)
        if (totalScore < Number(HandleGamePlaying('game'))) {
            HandleNoti('Score not update')
        } else if (totalScore === Number(HandleGamePlaying('bo'))) {
            HandleNoti('Game end')
        } else if (totalScore === Number(HandleGamePlaying('game'))) {
            // logic next game
            (async () => {
                let gameIDNow = GetLocalStorage('matchId')
                let matchEdit = JSON.parse(window.localStorage.getItem('MatchOnLoad'))
                // data match next
                let matchNextData = { ...matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1] }
                // config data 
                matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1]['win'] = window.localStorage.getItem('win')
                matchEdit['gameInfo'][Number(HandleGamePlaying('game')) - 1]['status'] = "end"

                // config last game in match
                if (totalScore < Number(GetLocalStorage('bo'))) {
                    matchEdit['gameInfo'][Number(HandleGamePlaying('game'))] = matchNextData
                    matchEdit['gameInfo'][Number(HandleGamePlaying('game'))]['game'] = `${Number(matchEdit['gameInfo'][Number(HandleGamePlaying('game'))]['game']) + 1}`
                    // record new game to sstorage
                    window.localStorage.setItem('gameOnPlay',JSON.stringify(matchEdit['gameInfo'][Number(HandleGamePlaying('game'))]))
                }
                // save data local storage
                window.localStorage.setItem('MatchOnLoad', JSON.stringify(matchEdit))

                // fetch post data
                const rawResponse = await fetch(`http://${hostIP}:14596/api/post/${gameIDNow}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: window.localStorage.getItem('MatchOnLoad')
                });
                const content = await rawResponse.json();
                console.log(content)
                HandleNoti(`Game ${HandleGamePlaying('game') - 1} Done`)
                setIsreload(!isreload)
            })();
        } else {

        }
    }
    // submit button
    function SubmitCTN() {
        return (
            <div className="center-ctn frag-ctn">
                <BtnRender
                    btnName={"SWAP SIDE"}
                    idBtn="SwapBTN"
                    classBtn="btn"
                    btnClick={SwapSide}
                />
                <BtnRender
                    btnName={"SUBMIT DATA"}
                    idBtn="SubmitBTN"
                    classBtn="btn"
                    btnClick={SubmidBTN}
                />
                <BtnRender
                    btnName={"PREV GAME"}
                    idBtn="SwapBTN"
                    classBtn="btn"
                    btnClick={SwapSide}
                />
                <BtnRender
                    btnName={"NEXT GAME"}
                    idBtn="SubmitBTN"
                    classBtn="btn"
                    btnClick={NextGameBTN}
                />
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
            <div className="colum-ctn left-ctn">
                <div className="box-ctn">
                    <SubmitCTN />
                </div>
                <div className="box-ctn">
                    <MatchInfoResult />
                </div>
            </div>
        </div>
    );
};
// Body END
// Export
function PopUpNoti() {
    return (
        <ul id="popUpNotiBox">
        </ul>
    )
}
function Backend() {
    const [isreload, setIsreload] = useState(false)
    try {
        fetch(`http://${hostIP}:14596/api/bracket`)
            .then(response => response.json())
            .then(data => window.localStorage.setItem('bracket', JSON.stringify(data)))
    } catch (error) {
        fetch(`http://${hostIP}:14596/api/${'last'}`)
            .then(response => response.json())
            .then((data) => {
                window.localStorage.setItem('bracket', JSON.stringify(data))
                window.localStorage.setItem('CurentMatch', data['matchId'])
            })
    }
    if (window.localStorage.getItem('CurentMatch') === null) {
        fetch(`http://${hostIP}:14596/api/last`)
            .then(response => response.json())
            .then((data) => {
                window.localStorage.setItem('CurentMatch', data['matchId'])
                window.localStorage.setItem('MatchOnLoad', JSON.stringify(data))
                for (let i = 0; i < data['bo']; i++) {
                    if (data['gameInfo'][`${i}`]['status'] === "start") {
                        window.localStorage.setItem('gameOnPlay', JSON.stringify(data['gameInfo'][`${i}`]))
                        window.localStorage.setItem('lineup-blue', JSON.stringify(data['gameInfo'][`${i}`]['lineUpBlue']))
                        window.localStorage.setItem('lineup-red', JSON.stringify(data['gameInfo'][`${i}`]['lineUpRed']))
                    }else {
                        window.localStorage.setItem('gameOnPlay', JSON.stringify(data['gameInfo'][`${data['bo'] - 1}`]))
                        window.localStorage.setItem('lineup-blue', JSON.stringify(data['gameInfo'][`${data['bo'] - 1}`]['lineUpBlue']))
                        window.localStorage.setItem('lineup-red', JSON.stringify(data['gameInfo'][`${data['bo'] - 1}`]['lineUpRed']))
                    }
                }
            })
    } else if (window.localStorage.getItem('CurentMatch') !== null) {
        fetch(`http://${hostIP}:14596/api/${window.localStorage.getItem('CurentMatch')}`)
            .then(response => response.json())
            .then((data) => {
                if (data === "notFound") {
                    fetch(`http://${hostIP}:14596/api/last`)
                        .then(response => response.json())
                        .then((data) => {
                            window.localStorage.setItem('CurentMatch', data['matchId'])
                            window.localStorage.setItem('MatchOnLoad', JSON.stringify(data))
                            for (let i = 0; i < data['bo']; i++) {
                                if (data['gameInfo'][`${i}`]['status'] === "start") {
                                    window.localStorage.setItem('gameOnPlay', JSON.stringify(data['gameInfo'][`${i}`]))
                                    window.localStorage.setItem('lineup-blue', JSON.stringify(data['gameInfo'][`${i}`]['lineUpBlue']))
                                    window.localStorage.setItem('lineup-red', JSON.stringify(data['gameInfo'][`${i}`]['lineUpRed']))
                                }
                            }
                            setIsreload(!isreload)
                        })
                } else {
                    window.localStorage.setItem('CurentMatch', data['matchId'])
                    window.localStorage.setItem('MatchOnLoad', JSON.stringify(data))
                    for (let i = 0; i < data['bo']; i++) {
                        if (data['gameInfo'][`${i}`]['status'] === "start") {
                            window.localStorage.setItem('gameOnPlay', JSON.stringify(data['gameInfo'][`${i}`]))
                            window.localStorage.setItem('lineup-blue', JSON.stringify(data['gameInfo'][`${i}`]['lineUpBlue']))
                            window.localStorage.setItem('lineup-red', JSON.stringify(data['gameInfo'][`${i}`]['lineUpRed']))
                        }
                    }
                }
            })
    }

    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowComponent(true);
        }, 50);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="main-container">
            <PopUpNoti />
            <NavBar />
            {showComponent && <BackendBody />}
        </div>
    )
}
export default Backend;
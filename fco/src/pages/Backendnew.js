import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import {hostIP} from '../api/FetchApi'

function Banpick() {
    return (
        <div id="banpick-ctn">

        </div>
    )
}

function Backend() {
    // eg usestate
    // const [logoTeam, setLogo] = useState('TN')
    // const [teamName, setTeamName] = useState('Hà Nội')
    // const [dataTeam, setDataTeam] = useState('1')
    // end eg
    const [phase,setPhase] = useState('none')
    const [ban1,setBan1] = useState('none')
    const [ban2,setban2] = useState('none')
    const [ban3,setban3] = useState('none')
    const [ban4,setban4] = useState('none')
    const [ban5,setban5] = useState('none')
    const [ban6,setban6] = useState('none')
    const [ban7,setban7] = useState('none')
    const [ban8,setban8] = useState('none')
    
    useEffect(() => {
        async function fetchMyAPI() {
            // get data ex
            // let response = await GetLineUpInfo('blue')
            // setLogo(response[0]['Team'])
            // setTeamName(response[0]['fullname'])
            
            // get data banpick
            let banpick = await fetch(`http://${hostIP}:14596/api/Getcrrmatch`)
                .then(response => response.json())
            setPhase(banpick['Phase'])
            // end get data banpick
        }
        fetchMyAPI()
      }, [])
    
    return (
        <div className="main-container">
            <div className="backend-container"></div>
            <NavBar/>
            <Banpick/>
        </div>
    )
}
export default Backend;
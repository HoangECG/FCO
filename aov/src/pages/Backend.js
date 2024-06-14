import React, { useEffect, useState } from "react";
import './Backend.css';
import NavBar from "./NavBar/NavBar"
import { GetMatchId, GetMatchInfo, hostIP, GetLineUpInfo } from '../api/FetchApi'


function Backend() {
    const [logoTeam, setLogo] = useState('TN')
    const [teamName, setTeamName] = useState('Hà Nội')
    const [dataTeam, setDataTeam] = useState('1')

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await GetLineUpInfo('blue')
            setLogo(response[0]['Team'])
            setTeamName(response[0]['fullname'])
        }
    
      }, [])
    return (
        <div className="main-container">
            <div className="backend-container"></div>
            <NavBar />
        </div>
    )
}
export default Backend;
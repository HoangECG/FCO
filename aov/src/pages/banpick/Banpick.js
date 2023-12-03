import React from "react"
import "./Banpick.css"
import NavBar from "../NavBar/NavBar"
// import { hostIP } from '../../api/FetchApi'

function BanpickBody() {
    return (
        <div id="BanpickBody">
        </div>
    )
}


function Banpick() {
    return (
        <div className="main-container">
            <NavBar />
            <BanpickBody />
        </div>
    )
}

export default Banpick
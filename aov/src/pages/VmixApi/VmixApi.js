import React from "react"
import "./VmixApi.css"
import NavBar from "../NavBar/NavBar"

function AddNewLine(props){

}
function ClearLines(){
    return (
        <div id="addButton"></div>
    )
}

function ControlVmixAPI(){
    return (
        <div id="controlBox">
            <button type="button" id="createButton" className="btnVmix" onClick={AddNewLine}>Create Request</button>
            <button type="button" id="clearButton" className="btnVmix" onClick={ClearLines}>Clear Request</button>
            <button type="button" id="PushButton" className="btnVmix" onClick={AddNewLine}>Push Request</button>
        </div>
    )
}



function VmixApi() {
    return (
        <div className="main-container">
            <ul id="requstsCTN">
                <li className="request-style">
                    <input type="checkbox" className="checkbox"/>
                    <label className="labelIP">IP </label>
                    <input type="input" className="inputIPRequest"/>
                    <label className="labelIP">PORT </label>
                    <input type="input" className="inputPortRequest" value={"8088"}/>
                </li>
            </ul>
            <ControlVmixAPI/>
            <NavBar/>
        </div>
    )
}

export default VmixApi
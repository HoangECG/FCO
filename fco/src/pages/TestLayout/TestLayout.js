import React from "react"
import "./TestLayout.css"
import NavBar from "../NavBar/NavBar"

var listPlayerBlue = ['Player1','Player2','Player3','Player4','Player5','Player6']
var listPlayerRed = ['Player1','Player2','Player3','Player4','Player5','Player6','Player7']
var memData = ""
function handleOnDrag(e){
    return memData = e.target
}
function handleOnDrop(e){
    e.target.appendChild(memData);
}
function allowDrop(e){
    e.preventDefault();
}
function clearContent(e){
    let idPlayer = e.target.id
    let nodeID = document.getElementById(idPlayer)
    let element = document.getElementById(nodeID.parentNode.id)
    element.remove()

}

function renderPlayer(playerName,index){
    return (
        <div key={playerName} className="drag-item" id={"playerID-"+index} draggable="true" onDragStart={handleOnDrag}>
            <div className="clearContent" id={"playerIDC-"+index} onClick={clearContent}></div>
            {playerName}
        </div>
    )
}

function TestLayout() {
    return (
        <React.Fragment>
            <NavBar/>
            <div id="master-box">
                <div id="drop-container">
                    <div id="box-drop-blue" onDrop={handleOnDrop} onDragOver={allowDrop}></div>
                    <div id="box-drop-red" onDrop={handleOnDrop} onDragOver={allowDrop}></div>
                </div>
                <div id="drag-container">
                    <div id="box-drag-blue">
                        {
                            listPlayerBlue.map(renderPlayer)
                        }
                    </div>
                    <div id="box-drag-red">
                        {
                            listPlayerRed.map(renderPlayer)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TestLayout
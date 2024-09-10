import React from 'react';
import './Tabs.css';
import * as beAPI from '../../api/FetchApi'
import * as Handleimport from "./LayoutHandle/HandleImport"



var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)


// function TabPredict() {
//     return (
//         <div id='tab-predic'>
//             <img id='predict-logo-left' src={Handleimport.importLogo('HN')} alt='img' />
//             <img id='predict-logo-right' src={Handleimport.importLogo('BD')} alt='img' />
//         </div>
//     )
// }


export default function Tab() {

    // show function
    function ShowTab(idTabs) {
        let tabWin = document.getElementById(idTabs)
        console.log(tabWin)
        const p = Promise.resolve(123)
        p.then(() => {
            tabWin.style.bottom = '15px'
            return new Promise(resolve => setTimeout(resolve, 15500))
        })
            .then(() => {
                tabWin.style.bottom = '-999px'
            })
    }

    // def tab
    function TabsWin(props) {
        return (
            <img id='tabsWin' src={Handleimport.importIMG('CPN1')} alt='img' />
        )
    }
    // follow ws
    ws.onmessage = function (event) {
        if (event.data === 'show-tabswin') {
            ShowTab('tabsWin')
        }
    }

    return (
        <div id="tabs">
            <TabsWin />
            {/* <TabPredict /> */}
        </div>
    )
}
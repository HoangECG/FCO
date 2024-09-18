import React, { useState , useEffect} from 'react';
import './Tabs.css';
import * as beAPI from '../../api/FetchApi'
import * as Handleimport from "./LayoutHandle/HandleImport"



var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



export default function Tab() {
    const [code, setCode] = useState('asdhjsahdkjas')
    const [minutes, setMinutes] = useState(0); // Input state for minutes
    const [seconds, setSeconds] = useState(0); // Input state for seconds
    const [timeLeft, setTimeLeft] = useState(0); // Total time in seconds
    const [isActive, setIsActive] = useState(false);
    // show function
    

    // def tab
    // function TabsWin(props) {
    //     return (
    //         <img id='tabsWin' src={Handleimport.importIMG('CPN1')} alt='img' />
    //     )
    // }
    const handleStart = () => {
        const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
        setTimeLeft(totalSeconds);
        setIsActive(true); // Start the countdown
        };
    
    useEffect(() => {
        let interval = null;
    
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsActive(false); // Stop when the countdown is over
        }
    
        return () => clearInterval(interval);
        }, [isActive, timeLeft]);
    
        // Format minutes and seconds display
        const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const secs = time % 60;
        return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
        };




    // function show time
    function ShowCountdown(){
        return (
            <div id='time-cd-id'>
                <div id='giftcode-name'>GIFTCODE COUNTDOWN</div>
                <div id='cd-num'>{formatTime(timeLeft)}</div>
                <div id='giftcode-show'>{code}</div>
            </div>
        )
    }
    // follow ws
    ws.onmessage = function (event) {
        if ((event.data.split(':').length === 4)&&(event.data.split(':')[0] === 'startcountdown')){
            setSeconds(event.data.split(':')[1])
            setMinutes(event.data.split(':')[2])
            setCode(event.data.split(':')[3])
        }
    }

    return (
        <div id="tabs">
            {/* <TabsWin /> */}
            {/* <TabPredict /> */}
            <ShowCountdown/>
        </div>
    )
}
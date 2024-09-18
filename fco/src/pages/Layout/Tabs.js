import React, { useState , useEffect, Fragment} from 'react';
import './Tabs.css';
import * as beAPI from '../../api/FetchApi'
import * as Handleimport from "./LayoutHandle/HandleImport"



var ws = new WebSocket(`ws://${beAPI.hostIP}:14596/ws/0`)



export default function Tab() {
    const [code, setCode] = useState('asdhjsahdkjas')
    const [minusTime, setMiunstime] = useState('00:00')
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
    // minus time
    const subtractTime = (min = 0, sec = 0) => {
        const subtractSeconds = min * 60 + sec;
        setTimeLeft((prevTime) => Math.max(0, prevTime - subtractSeconds)); // Ensure time doesn't go negative
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

    function StartCountdownLayout(){
        // end fetch api
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','100%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--opacity-minus','0')
                setRoot('--top-minus','55px')
                setRoot('--top-name','15px')
                setRoot('--box-height','25px')
                setRoot('--main-tab-pos','25px')
                setRoot('--name-tab-pos','15px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 700)
                })
            })
            .then(function(){
                setRoot('--opacity-minus','0')
                setRoot('--top-minus','55px')
                setRoot('--top-name','20px')
                setRoot('--box-height','75px')
                setRoot('--main-tab-pos','25px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 700)
                })
            })
    }
    function StopCountdownLayout(){
        // end fetch api
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','0%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--opacity-minus','0')
                setRoot('--top-minus','55px')
                setRoot('--top-name','15px')
                setRoot('--box-height','25px')
                setRoot('--main-tab-pos','25px')
                setRoot('--name-tab-pos','15px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 800)
                })
            })
            .then(function(){
                setRoot('--opacity-minus','0')
                setRoot('--top-minus','55px')
                setRoot('--top-name','15px')
                setRoot('--box-height','25px')
                setRoot('--main-tab-pos','25px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 800)
                })
            })
            .then(function(){
                setRoot('--opacity-minus','0')
                setRoot('--top-minus','55px')
                setRoot('--top-name','15px')
                setRoot('--box-height','25px')
                setRoot('--main-tab-pos','-325px')
                setRoot('--name-tab-pos','-325px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 500)
                })
            })
    }

    function ShowMinus(){
        // end fetch api
        const rootStyle = document.documentElement.style;
        function setRoot(a,b){
            return( rootStyle.setProperty(a,b)) 
        }
        rootStyle.setProperty('--opacity','100%')
        const p = Promise.resolve('pass')
            p.then(function(){
                setRoot('--opacity-minus','1')
                return new Promise( function(resolve){
                    setTimeout(resolve, 200)
                })
            })
            .then(function(){
                setRoot('--top-minus','90px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 3500)
                })
            })
            .then(function(){
                setRoot('--opacity-minus','0')
                return new Promise( function(resolve){
                    setTimeout(resolve, 800)
                })
            })
            .then(function(){
                setRoot('--top-minus','55px')
                return new Promise( function(resolve){
                    setTimeout(resolve, 800)
                })
            })
    }
    // function show time
    function ShowCountdown(){
        return (
            <Fragment>
                <div id='giftcode-name'>GIFTCODE COUNTDOWN</div>
                <div id='time-cd-id'>
                    <div id='cd-num'>{formatTime(timeLeft)}</div>
                    <div id='giftcode-show'>{code}</div>
                </div>
                <div id='popup-minus'>GOAL!!! Minus {minusTime}</div>
            </Fragment>
        )
    }
    // follow ws
    ws.onmessage = function (event) {
        if ((event.data.split('-').length === 4)&&(event.data.split('-')[0] === 'startcountdown')){
            setSeconds(parseInt(event.data.split('-')[2]))
            setMinutes(parseInt(event.data.split('-')[1]))
            setCode(event.data.split(':')[3])
            handleStart()
        }else if ((event.data.split('-').length === 3)&&(event.data.split('-')[0] === 'minus')){
            subtractTime(parseInt(event.data.split('-')[1]),parseInt(event.data.split('-')[2]))
            setMiunstime(`${parseInt(event.data.split('-')[1])}:${parseInt(event.data.split('-')[2])}`)
            setTimeout(() => {
                ShowMinus()
            }, 200);
        }else if((event.data === 'showcountdown')){
            StartCountdownLayout()
        }else if((event.data === 'stopcountdown')){
            StopCountdownLayout()
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
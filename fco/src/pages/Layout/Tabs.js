import React, { useState, useEffect, Fragment } from 'react';
import './Tabs.css';
import * as beAPI from '../../api/FetchApi';

// WebSocket initialization
var ws = new WebSocket(`ws://${beAPI.hostIP}:${beAPI.portApi}/ws/0`);

export default function Tab() {
  const [code, setCode] = useState('asdhjsahdkjas');
  const [minusTime, setMinusTime] = useState('00:00');
  const [minutes, setMinutes] = useState(0); 
  const [seconds, setSeconds] = useState(0); 
  const [timeLeft, setTimeLeft] = useState(0); 
  const [isActive, setIsActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Start the countdown
  const handleStart = () => {
    const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    setTimeLeft(totalSeconds);
    setIsActive(true);
    setIsComplete(false);
  };

  // Subtract time dynamically
  const subtractTime = (min = 0, sec = 0) => {
    const subtractSeconds = min * 60 + sec;
    setTimeLeft((prevTime) => Math.max(0, prevTime - subtractSeconds));
  };

  // Countdown logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsComplete(true);
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Format time for display
  const formatTime = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  // Countdown display component
  function ShowCountdown() {
    return (
      <Fragment>
        <div id='giftcode-name'>GIFTCODE COUNTDOWN</div>
        <div id='time-cd-id'>
          <div id='cd-num'>{isComplete ? code : formatTime(timeLeft)}</div>
          <div id='giftcode-show'>{code}</div>
        </div>
        <div id='popup-minus'>GOAL!!! Minus {minusTime}</div>
      </Fragment>
    );
  }

  // Layout control functions
  function StartCountdownLayout() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--main-tab-pos', '25px'); 
    rootStyle.setProperty('--name-tab-pos', '15px'); 
    rootStyle.setProperty('--top-name', '20px');     
    rootStyle.setProperty('--box-height', '75px');   
    rootStyle.setProperty('--cd-num-opacity', '1');  
    rootStyle.setProperty('--opacity-giftcode', '0');
  }

  function ShowMinus() {
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--opacity-minus', '1');   
    rootStyle.setProperty('--top-minus', '90px');    
    setTimeout(() => {
      rootStyle.setProperty('--opacity-minus', '0');
    }, 3500);
  }

  function StopCountdownLayout() {
    setIsComplete(true);
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--main-tab-pos', '-325px'); 
    rootStyle.setProperty('--name-tab-pos', '-325px'); 
    rootStyle.setProperty('--cd-num-opacity', '0');   
    rootStyle.setProperty('--opacity-giftcode', '0'); 
  }

  // Handle WebSocket messages
  ws.onmessage = function (event) {
    const data = event.data.split('-');
    if (data[0] === 'startcountdown' && data.length === 4) {
      setMinutes(parseInt(data[1]));
      setSeconds(parseInt(data[2]));
      setCode(data[3]);
      setTimeout(() => handleStart(), 100);
    } else if (data[0] === 'minus' && data.length === 3) {
      subtractTime(parseInt(data[1]), parseInt(data[2]));
      setMinusTime(`${data[1]}:${data[2]}`);
      setTimeout(() => ShowMinus(), 200);
    } else if (event.data === 'showcountdown') {
      StartCountdownLayout();
    } else if (event.data === 'stopcountdown') {
      StopCountdownLayout();
    }
  };

  return (
    <div id="tabs">
      <ShowCountdown />
    </div>
  );
}

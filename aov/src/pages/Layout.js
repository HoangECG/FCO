import './Layout.css';
import LineupBlue from './Layout/Lineup/LineupBlue'
import LineupRed from './Layout/Lineup/LineupRed'
import LineupNew from './Layout/Lineup/LineupNew'
import React, { } from "react";
import Tab from './Layout/Tabs'

function Layout() {
  return (
    <div id="layout">
      <div id='lineupBlue'>
        <LineupBlue/>
      </div>
      <div id='lineupRed'>
        <LineupRed/>
      </div>
      <div id='lineupNew'>
        <LineupNew/>
      </div>
      <Tab/>
    </div>
  );
}

export default Layout;

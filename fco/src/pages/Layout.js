import './Layout.css';
import LineupNew from './Layout/Lineup/LineupNew'
import React, { } from "react";
import Tab from './Layout/Tabs'

function Layout() {
  return (
    <div id="layout">
      <div id='lineupNew'>
        <LineupNew/>
      </div>
      <Tab/>
    </div>
  );
}

export default Layout;

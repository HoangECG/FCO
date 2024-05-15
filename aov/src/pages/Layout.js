import './Layout.css';
import LineupBlue from './Layout/Lineup/LineupBlue'
import LineupRed from './Layout/Lineup/LineupRed'
import React, { } from "react";
import Tab from './Layout/Tabs'

function Layout() {
  return (
    <div id="layout">
      <LineupBlue/>
      <LineupRed/>
      <Tab/>
    </div>
  );
}

export default Layout;

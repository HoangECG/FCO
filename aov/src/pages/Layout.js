import './Layout.css';
import LineupBlue from './Layout/Lineup/LineupBlue'
import React, { } from "react";
import Tab from './Layout/Tabs'

function Layout() {
  return (
    <div id="layout">
      <LineupBlue/>
      <Tab/>
    </div>
  );
}

export default Layout;

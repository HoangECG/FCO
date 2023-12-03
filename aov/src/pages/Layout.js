import './Layout.css';
import Lineup from './Layout/Lineup/Lineup'
import React, { } from "react";
import Tab from './Layout/Tabs'

function Layout() {
  return (
    <div id="layout">
      <Lineup/>
      <Tab/>
    </div>
  );
}

export default Layout;

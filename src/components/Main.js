import React from 'react';
import '../css/Main.css';
import Info from './main/Info';
import Sidebar from './main/Sidebar';

const Main = () => {
  return (
    <div id="Main">
      <Info />
      <Sidebar />
    </div>
  );
};

export default Main;

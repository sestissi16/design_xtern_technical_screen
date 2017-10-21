import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './SideBar'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="Top">
        <Header />
        <div className="Bottom">
          <SideBar/>
        </div>
      </div>
    );
  }
}

export default App;

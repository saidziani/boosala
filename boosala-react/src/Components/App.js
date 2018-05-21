import React, { Component } from 'react';
import './../css/App.css';
import './../css/index.css';
import logo_front from  './../images/logo_front.png';
import logo_back from './../images/logo_back.png';
import Search from './Search.js';

class App extends Component {

  constructor(props){
    super(props);
    this.loadSearch = this.loadSearch.bind(this);
    //Break up each text into english and arabic
    this.state = {
      language: 'english',
      heading:{
        english: 'بوصلة',
        arabic: ''
      },
      title: {
        english: 'Boosala',
        arabic: 'بوصلة'
      },
      caption: {
        english: 'Bring home the lost',
        arabic: '',
      },
      startButton: {
        english: 'Start',
        arabic: 'ابدأ'
      },
      current: "home" //keep track of which app stage
    }
  }

  renderLanguageBar() {
    return(
      <div id="languages">
          <ul>
            <li id="arabic">عربي</li>
            <li id="english">English</li>
          </ul>
      </div>
    );

  };

  loadSearch(){
    this.setState({current: "search"});
  }

  loadHome(){
    return (
      <div className="Homepage">
          <div id="logo-div" className="column">
              <img id="logo-back" className="logo" src={logo_back} alt="boosala logo"/>
              <img id="logo-front" className="logo" src={logo_front} alt="boosala logo"/>
          </div>
          <div className="text column">
            <div id="heading">{this.state.heading[this.state.language]}</div>
            <div id="title">{this.state.title[this.state.language]}</div>
            <div id="caption">{this.state.caption[this.state.language]}</div>
            <button id="start-button" onClick={this.loadSearch}>{this.state.startButton[this.state.language]}</button>
          </div>
        </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderLanguageBar()}
        {this.state.current === "home" ? this.loadHome() : null}
        {this.state.current === "search" ? <Search/> : null}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { FlowerShower } from './FlowerShower.js'
import Greeting from './Greeting.js'
import Volume from './Volume.js'
import About from './About.js'


import './App.css';

var PASSCODE = ['m','o','t','h','e','r','l','o','d','e'];
var current = 0;


class App extends Component {
  clicker(){
    console.log("yeehaw");
    var images = document.getElementsByTagName('img');
    var svg = document.getElementsByTagName('svg');
    var i;
    if (images) {
      for (i = 0; i < images.length; ++i) {
        images[i].style.display = 'block';
      }
    }
    if (svg) {
      for (i = 0; i < svg.length; ++i) {
        svg[i].style.display = 'none';
      }
    }
  }

  handleClick(e){
  }

  handleKeypress(event){
    var logger = document.getElementById('logger');
    var code = event.keyCode || event.which,
          str = String.fromCharCode(code);
        if(str === PASSCODE[current]){
            current++;
            logger.innerHTML += str;
            // console.log(current, PASSCODE.length);
            if(current >= PASSCODE.length){
              console.log('congrats nerd');
              var images = document.getElementsByTagName('img');
              var svg = document.getElementsByTagName('svg');
              var i;
              if (images) {
                for (i = 0; i < images.length; ++i) {
                  images[i].style.display = 'block';
                }
              }
              if (svg) {
                for (i = 0; i < svg.length; ++i) {
                  svg[i].style.display = 'none';
                }
              }
            }
      } else {
          console.log(str + ' ' + PASSCODE[current]);
          current = 0;
          logger.innerHTML = '';
      }
  }
  componentDidMount(){
    document.addEventListener("keypress", this.handleKeypress, false);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Volume/>
          <FlowerShower/>
          <Greeting/>
        </header>
        <About/>
        <div id="logger"></div>
      </div>
    );
  }
}

export default App;

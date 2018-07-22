import React, { Component } from 'react';
import { FlowerShower } from './FlowerShower.js'
import Greeting from './Greeting.js'
import logo from './logo.svg';
import Volume from './Volume.js'


import './App.css';

var PASSCODE = ['m','o','t','h','e','r','l','o','d','e'];
var current = 0;


class App extends Component {
  clicker(){
    console.log("yeehaw");
    var images = document.getElementsByTagName('img')
    var svg = document.getElementsByTagName('svg')
    if (images) {
            for (var i = 0; i < images.length; ++i) {
                images[i].style.display = 'block';
            }
        }
    if (svg) {
            for (var i = 0; i < svg.length; ++i) {
                svg[i].style.display = 'none';
            }
        }
  }

  keyFunction(event){
    var logger = document.getElementById('logger');
    var code = event.keyCode || event.which,
          str = String.fromCharCode(code);
        if(str === PASSCODE[current]){
            current++;
            logger.innerHTML += str;
            // console.log(current, PASSCODE.length);
            if(current >= PASSCODE.length){
              console.log('congrats nerd');
              var images = document.getElementsByTagName('img')
              var svg = document.getElementsByTagName('svg')
              if (images) {
                      for (var i = 0; i < images.length; ++i) {
                          images[i].style.display = 'block';
                      }
                  }
              if (svg) {
                      for (var i = 0; i < svg.length; ++i) {
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
    document.addEventListener("keypress", this.keyFunction, false);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Volume/>
          <FlowerShower/>
          <Greeting/>
        </header>
    
        <div id="bottom-circle">
          <div className="App-intro">
            She's a work in progress<span onClick={this.clicker}>.</span>
          </div>
        </div>
        <div id="logger"></div>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import Flower from './Flower.js'
import mp3_file from './ping.mp3';



class Greeting extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        color : 'white'
	    };
	}

	changeColor() {
		if(this.state.color == '#3a556a'){
			this.setState({
			  	color: 'white'
			});
		} else {
			this.setState({
			  	color: '#3a556a'
			});
		}
	}
	render(){
		return(
			<div id="top-circle" onClick={this.changeColor.bind(this)}>
			<h1 className="App-title" style={{color:this.state.color}}>Hello!</h1>
			</div>
		)
	}
}

export default Greeting


import React, { Component } from 'react';


class Greeting extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        color : 'white'
	    };
	}

	changeColor() {
		if(this.state.color === '#3a4b6a'){
			this.setState({
			  	color: 'white'
			});
		} else {
			this.setState({
			  	color: '#3a4b6a'
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

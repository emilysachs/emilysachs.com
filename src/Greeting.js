
import React, { Component } from 'react';


class Greeting extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        color : 'white'
	    };
	}

	changeColor() {
		if(this.state.color == 'blue'){
			this.setState({
			  	color: 'white'
			});
		} else {
			this.setState({
			  	color: '#BA91A4'
			});
		}
	}
	render(){
		return(
			<h1 className="App-title" style={{color:this.state.color}} onClick={this.changeColor.bind(this)}>Hello!</h1>
		)
	}
}

export default Greeting

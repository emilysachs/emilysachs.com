import React, { Component } from 'react';

class About extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        transform: '',
	        rotated: false,
	        height: 0,
	        height2: 20,
	        opacity: 1,
	        display: 'none',
	        animation: '',
	    };
	}

	transformClick() {
		console.log('hey');
		if(!this.state.rotated){
			this.setState({
			  	rotated: true,
			  	transform: 'rotate(180deg)',
			  	height: 180,
			  	height2: 0,
			  	opacity: 0,
	        	display: 'block',
	        	animation: '0',
			});
		} else {
			this.setState({
			  	rotated: false,
			  	transform: 'rotate(0deg)',
			  	height: 0,
			  	height2: 20,
			  	opacity: 1,
	        	display: 'none',
	        	animation: '',
			});
		}
	}
	render(){
		return(
			<div id="bottom-circle">
				<div id="about-page" style={{borderBottomLeftRadius: 140, borderBottomRightRadius: 140, overflow: 'hidden',  position: 'relative', background: '#3a4b6a', height: this.state.height, transition: 'height 1.05s ease-in-out'}}>
				<span style={{opacity: 1, position: 'absolute', left: 0, right: 0, bottom: 0, marginBottom: -20}}> My name is Emily.<br></br> <br></br>Here's a bit of<br></br><a href="https://github.com/emilysachs" target="_blank">my code</a><br></br><a href="https://www.linkedin.com/in/eesachs/" target="_blank">my experience</a><br></br><a href="https://www.instagram.com/emilysachs/" target="_blank">my adventures</a><br></br><br></br></span></div>
			  <div className="App-intro" style={{height: this.state.height2, opacity: this.state.opacity, transition: "height 1.05s ease-in-out, opacity 1.05s ease-in-out"}}>
			    Nice to meet you!
			    {/*<span onClick={this.clicker}>.</span>*/}
			  </div>
			  <i title="About me" id="about" className="material-icons" style={{transform: this.state.transform, animation: this.state.animation, transition: "transform 1.05s ease-in-out"}} onClick={this.transformClick.bind(this)}>person</i>

			</div>
							)
	}
}

export default About

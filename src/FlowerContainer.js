import React, { Component } from 'react';
import { Flower } from "./Flower";
import { findDOMNode } from 'react-dom';
import ReactDOM from 'react-dom';
import ping1 from './audio/pingg.mp3';
import ping2 from './audio/pinga.mp3';
import ping3 from './audio/pingbb.mp3';
import ping4 from './audio/pingd.mp3';
import ping5 from './audio/pingee.mp3';
import oping1 from './audio/pingg.ogg';
import oping2 from './audio/pinga.ogg';
import oping3 from './audio/pingbb.ogg';
import oping4 from './audio/pingd.ogg';
import oping5 from './audio/pingee.ogg';

export class FlowerContainer extends Component {
	constructor(props){
		super(props);
		const colorIndex = Math.floor(Math.random() * (3));
		const colors = ["#BA91A4", "#A77285", "#DAC3CF"];
		const size = Math.random() * (40 - 10) + 10;

		this.state = {
			fsize: size,
			delay: Math.random() * (16),
			animation: size/2 + 10,
			rotation: Math.random() * (180 - 30) + 30,
			rotation2: Math.random() * (-180 + 30) - 30,
			position: Math.random() * (92 - 8) + 8,
			color: colors[colorIndex]
		}
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
	}

	componentDidMount() {
	    ReactDOM.findDOMNode(this).addEventListener("mouseenter", this.handleMouseEnter);
	    this.audio.volume = 0.1;
	  }

	  componentWillUnmount() {
	    ReactDOM.findDOMNode(this).removeEventListener("mouseenter", this.handleMouseEnter);
	  }

	handleMouseEnter(e){
		this.audio.play();
	}

	render() {
		const sounds = [ping1, ping2, ping3, ping4, ping5];
		const osounds = [oping1, oping2, oping3, oping4, oping5];
		const size = this.state.fsize;
		var pitch = 2;
		if(size > 34){
			pitch = 0;
		} else if (size > 28){
			pitch = 1;
		} else if (size > 22){
			pitch = 2;
		} else if (size > 16){
			pitch = 3;
		} else if (size > 10){
			pitch = 4;
		}
		return (<div className="flower-container">
					<Flower 
					fsize={this.state.fsize} 
					delay={this.state.delay} 
					animation={this.state.animation} 
					rotation={this.state.rotation} 
					rotation2={this.state.rotation2} 
					position={this.state.position} 
					name={this.props.name}
					color={this.state.color}/>
					<audio volume="0.1" ref={(audioTag) => { this.audio = audioTag }} style={{display: 'none'}}>
						<source class="mp3" src={sounds[pitch]}/>
						<source class="ogg" src={osounds[pitch]}/>
					</audio>
				</div>
			);
	}
}
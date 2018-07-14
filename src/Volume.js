
import React, { Component } from 'react';
import Flower from './Flower.js'
import mp3_file from './ping.mp3';



class Volume extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        volume : 'volume_up'
	    };
	}

	changeVolume() {
		if(this.state.volume == 'volume_off'){
			var audio = document.getElementsByTagName("audio");
			for(var i = 0; i < audio.length; i++){
			   //do something to each div like
			   audio[i].volume = 0.05;
			}
			this.setState({
			  	volume: 'volume_up'
			});
		} else {
			var audio = document.getElementsByTagName("audio");
			for(var i = 0; i < audio.length; i++){
			   //do something to each div like
			   audio[i].volume = 0;
			}
			this.setState({
			  	volume: 'volume_off'
			});
		}
	}
	render(){
		return(
			<i id="vol" class="material-icons" onClick={this.changeVolume.bind(this)}>
			{this.state.volume}
			</i>
		)
	}
}

export default Volume

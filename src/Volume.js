
import React, { Component } from 'react';
import Flower from './Flower.js'



class Volume extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        muted : 'volume_up'
	    };
	}

	changeVolume() {
		if(this.state.muted == 'volume_off'){
			var audio = document.getElementsByTagName("audio");
			for(var i = 0; i < audio.length; i++){
			   audio[i].muted = false;
			}
			this.setState({
			  	muted: 'volume_up'
			});
		} else {
			var audio = document.getElementsByTagName("audio");
			for(var i = 0; i < audio.length; i++){
			   audio[i].muted = true;
			}
			this.setState({
			  	muted: 'volume_off'
			});
		}
	}
	render(){
		return(
			<i id="vol" class="material-icons" onClick={this.changeVolume.bind(this)}>
			{this.state.muted}
			</i>
		)
	}
}

export default Volume

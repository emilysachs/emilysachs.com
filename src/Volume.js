
import React, { Component } from 'react';

class Volume extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	        muted : 'volume_up'
	    };
	}

	changeVolume() {
		var audio = document.getElementsByTagName("audio");
		var i;
		if(this.state.muted === 'volume_off'){
			for(i = 0; i < audio.length; i++){
			   audio[i].muted = false;
			}
			this.setState({
			  	muted: 'volume_up'
			});
		} else {
			for(i = 0; i < audio.length; i++){
			   audio[i].muted = true;
			}
			this.setState({
			  	muted: 'volume_off'
			});
		}
	}
	render(){
		return(
			<i id="vol" className="material-icons" onClick={this.changeVolume.bind(this)}>
			{this.state.muted}
			</i>
		)
	}
}

export default Volume

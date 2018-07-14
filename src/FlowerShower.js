import React, { Component } from 'react';
import Flower from './Flower.js'
import ping1 from './pingg.mp3';
import oping1 from './pingg.ogg';

var audioStyle = {
	display: 'none'
}

class FlowerShower extends Component {
	render(){
		return(
			<div class="flower-shower">
				{Array.apply(null, Array(80)).map((el,index)=>
					<div class="group">
					<Flower name={index} key={index}/>
					</div>
				)}
				<audio id="music" volume="0.05" controls style={audioStyle}>
					<source class="mp3" src={ping1}/>
					<source class="ogg" src={oping1}/>
				</audio>
			</div>

		)
	}
}

export default FlowerShower

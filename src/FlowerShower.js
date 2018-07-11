import React, { Component } from 'react';
import Flower from './Flower.js'


class FlowerShower extends Component {
	render(){
		return(
			<div>
				{Array.apply(null, Array(100)).map((i)=>
				<Flower/>
				)}
			</div>
		)
	}
}

export default FlowerShower

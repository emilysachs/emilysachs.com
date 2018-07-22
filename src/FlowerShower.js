import React, { Component } from 'react';
import { FlowerContainer } from "./FlowerContainer";


export class FlowerShower extends Component {
	render(){
		return(
			<div class="flower-shower">
				{Array.apply(null, Array(80)).map((el,index)=>
					<div class="group">
					<FlowerContainer name={index} key={index}/>
					</div>
				)}
			</div>

		)
	}
}


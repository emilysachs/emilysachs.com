
import React, { Component } from 'react';
import { FlowerSvg } from "./FlowerSvg";
import myg from './myg.png';


export class Flower extends Component {

	render(){
		const fsize = this.props.fsize;
		const delay = this.props.delay;
		const animation = this.props.animation;
		const rotation = this.props.rotation;
		const rotation2 = this.props.rotation2;
		const position = this.props.position;
		const color = this.props.color;

		const flowerAnimation = `
		@-webkit-keyframes flowerFall${"-"+this.props.name} {
				0% { opacity: 0; }
				1% {opacity: 1;}
				25% { opacity: 0.9; transform:  translate(0px, 55vh) rotate(${Math.floor(rotation)%2 === 0 ? rotation : -rotation}deg);}
				50% { transform: translate(${Math.floor(fsize)%2 === 0 ? fsize : -fsize}px, 104vh) rotate(${Math.floor(rotation2)%2 === 0 ? rotation2 : -rotation2}deg);opacity: 0.9;}
				100% { opacity: 0; transform: translate(${Math.floor(fsize)%2 === 0 ? fsize : -fsize}px, 104vh)}
			}`

		const flowerStyle = {
			top: '-10vh',
			height: fsize,
			width: fsize,
			position: 'absolute',
			zIndex: '0',
			opacity: '0',
			left: position + '%', 
			animation: 'flowerFall-' + this.props.name + ' ' + animation + 's linear infinite',
			animationDelay: delay + 's',
			animationFillMode: 'forwards'
		}

		const styleElement = document.createElement('style');
		  let styleSheet = null;
		  document.head.appendChild(styleElement);
		  styleSheet = styleElement.sheet;
		  styleSheet.insertRule(flowerAnimation, styleSheet.cssRules.length);

		return(
			<div>
				<img alt="flower" src={myg} style={flowerStyle}/>
				<FlowerSvg class="flower-child" svgStyle={flowerStyle} color={color}/>
			</div>
		)
	}
 };







import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import { FlowerSvg } from "./FlowerSvg";
import myg from './myg.png';
import $ from 'jquery';


export class Flower extends Component {

	render(){
		const fsize = this.props.fsize;
		const delay = this.props.delay;
		const animation = this.props.animation;
		const rotation = this.props.rotation;
		const rotation2 = this.props.rotation2;
		const position = this.props.position;
		const color = this.props.color;

		console.log(Math.floor(rotation)%2 == 0 ? rotation : -rotation);

		const flowerAnimation = `
		@-webkit-keyframes flowerFall${"-"+this.props.name} {
				0% { opacity: 0; }
				1% {opacity: 1;}
				25% { opacity: 0.9; transform:  translate(0px, 55vh) rotate(${Math.floor(rotation)%2 == 0 ? rotation : -rotation}deg);}
				50% { transform: translate(${Math.floor(fsize)%2 == 0 ? fsize : -fsize}px, 105vh) rotate(${Math.floor(rotation2)%2 == 0 ? rotation2 : -rotation2}deg);opacity: 0.9;}
				100% { opacity: 0; transform: translate(${Math.floor(fsize)%2 == 0 ? fsize : -fsize}px, 105vh)}
			}`

		const flowerStyle = {
			top: '-10vh',
			height: fsize,
			width: fsize,
			position: 'fixed',
			zIndex: '0',
			opacity: '0',
			left: position + '%', 
			animation: 'flowerFall-' + this.props.name + ' ' + animation + 's ' +  'linear infinite',
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
				<img src={myg} style={flowerStyle}/>
				<FlowerSvg class="flower-child" svgStyle={flowerStyle} color={color}/>
			</div>
		)
	}
 };






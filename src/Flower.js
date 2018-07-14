
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { findDOMNode } from 'react-dom';
import logo from './logo.svg';
import myg from './myg.png';
import mp3_file from './ping.mp3';
import $ from 'jquery';



function BounceAnimation (props) {
	return keyframes`
		0% { opacity: 0; }
		1% {opacity: 1;}
		25% { opacity: 0.9; transform:  translate(0px, 55vh) rotate(${Math.floor(props.rot1)%2 == 0 ? props.rot1 : -props.rot1}deg);}
		50% { transform: translate(${Math.floor(props.rheight)%2 == 0 ? props.rheight : -props.rheight}px, 105vh) rotate(${Math.floor(props.rot2)%2 == 0 ? props.rot2 : -props.rot2}deg);opacity: 0.9;}
		100% { opacity: 0; transform: translate(${Math.floor(props.rheight)%2 == 0 ? props.rheight : -props.rheight}px, 105vh)}
	`
}

function getRand(min, max){
	return Math.random() * (max - min) + min;
}

function getRandP(props){
	var p = props => props.rleft
	return (p - 20) + "%";
}

function getColor(){
	var choice = Math.floor(getRand(0,3));
	var colors = ["#BA91A4", "#A77285", "#DAC3CF"];
	var color = colors[choice];
	return color
}

const FlowerChild = styled.svg`
	top: -10vh;
	height: ${props => props.rheight}px;
	width: ${props => props.rheight}px;
	position: fixed;
	fill: #BA91A4;
	z-index: 0;
	opacity: 0;
	left: ${props => props.rleft}%;
	animation: ${BounceAnimation} ${props => props.rheight/2 + 10}s linear infinite;
	animation-delay: ${props => props.delay}s;
	animation-fill-mode: forwards;
`

const FlowerMan = styled.img`
	top: -10vh;
	height: ${props => props.rheight}px;
	width: ${props => props.rheight}px;
	position: fixed;
	z-index: 0;
	opacity: 0;
	left: ${props => props.rleft}%;
	animation: ${BounceAnimation} ${props => props.rheight/2 + 10}s linear infinite;
	animation-delay: ${props => props.delay}s;
	animation-fill-mode: forwards;
`
const FlowerWrapper = styled('div')`
`;

class FlowerParent extends Component {
	renderChildren = () => {
		const { children } = this.props;
		return React.Children.map(children, (child) => React.cloneElement(child, {
			rot1: this.props.rot1,
			rot2: this.props.rot2,
			delay: this.props.delay,
			rheight: this.props.rheight,
			rleft: this.props.rleft
		}));
	}
	render() {
		return (
			<FlowerWrapper>{this.renderChildren()}</FlowerWrapper>
		)
	}
}


function audioId(id){
	return "myAudio-"+ id;
}

class Flower extends Component {

	render(){
		return(
			<div class="flower" >
				<FlowerParent delay={getRand(0,16)} rheight={getRand(10, 40)} rot1={getRand(30, 180)}px rot2={getRand(-180, -30)}px rleft={getRand(8, 92)}>
					<FlowerMan src={myg}/>
					<FlowerChild class="flower-child">
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							 viewBox="150 170 140 120">
						    	<g fill={getColor()}>
									<path class="st16" d="M273.9,210.5c-2.3-7.4-8.4-7.1-12.7-11.6c-3.9-4,1.1-13.9-10-11.7c2.3,3.4,3.8,7.6,4.9,11.5
										c0.2,0.9,0.2,1.9,0.2,2.8c0,1.8,0,3.7-0.1,5.5c-0.1,2-0.2,4-0.6,6c-0.1,0.8-0.3,1.6-0.6,2.4c-0.2,0.7-0.7,1.4-0.9,2.1
										c0,0.2-0.1,0.3-0.1,0.5c0,1,1.3,0.9,2.1,1.1c0.9,0.2,1.9,0.4,2.9,0.6c2.2,0.5,4.1,1.5,5.5,3.2c2,2.3,3.3,6.1,4.5,9
										C272.8,225.9,276,217.8,273.9,210.5z"/>
									<path class="st16" d="M189.1,201.4c11.6-15.2,28.4-16.9,40.3-2.4c3.6,4.4,10.6,17.9,15.7,18.6c11.6,1.7,9.9-14,7.5-20.9
										c-5.1-15.3-12.6-13.1-26.1-13.5c-2.8-0.1-3.6-2-6.2-2.3c-8.1-0.9-16.5-0.2-23.8,4.2c-7.6,4.5-13.3,12.7-11.2,22.1
										C186.4,205.1,187.7,203.2,189.1,201.4z"/>
									<path class="st16" d="M176.7,229.5c0.3-5.6,5.2-10.2,5.5-16.3c0.3-6.3-2.1-11.9,0.8-18.5c-23.4,1-24,22.2-13.6,37.7
										c4.5,6.6,7.1,14.5,14,19.6C179.6,245.7,176.2,236.9,176.7,229.5z"/>
									<path class="st16" d="M215.2,192.3c-13.5-3-25.3,11.6-29.2,22.9c-3.1,9.2-1.5,18,6.9,23.8c3.6,2.5,13.3,7.3,16.7,6.8
										c-11.8-5.8-15.9-19.6-11.3-31.1c3.2-8.1,10.2-20.8,20-21.3C217.4,192.7,216.4,192.3,215.2,192.3z"/>
									<path class="st16" d="M266.5,235.7c-4.1-15.7-10.9-15.2-24.3-15.1c1.8,13.9,22.8,29.8,3.9,42.2c-11.3,7.5-33.1,7.5-45.1,2.3
										c7.4,11.4,30.1,15.7,42,8.4c6.6-4.1,7.7-12,12.7-16.4C263.5,250.3,270.6,249.5,266.5,235.7z"/>
									<path class="st16" d="M203,261.7c7,3.4,15.2,5.3,23,4c5.4-0.9,14.8-1.7,19.1-4.2c12.7-7.6,2.2-24-4.4-31.9
										c-9.7,24.7-52.3,23.6-59.8-2.2c-3.5,6.2,4.5,22.1,9.1,26.6C193.3,257.3,198.9,259.7,203,261.7z"/>
									<path class="st16" d="M236.2,214.1c-2-4.9-4.6-3.8-7.3-6.9c-2-2.3-3.6-7.2-5.9-8.8c-8.8-6.1-18.2,8.5-16.5,16.3
										c8.1-11.4,20.3-2.9,21.2,8.8C229.4,222,236.7,215.3,236.2,214.1z"/>
									<path class="st16" d="M222.5,216c-1.4-2-2.2-1.4-3.6-0.8c3.7,2.9,3.5,6.8,4.7,9.3C224.6,220.3,224.1,218.3,222.5,216z"/>
									<g>
										<path class="st16" d="M220.7,221.5c-1.6-7.4-12.4-7.2-11.1,1c3.5-1.6,9.2,2.1,11.3,4.3C221.8,226.5,220.9,222.5,220.7,221.5z"/>
									</g>
									<path class="st16" d="M212.1,224.8c-1.4-0.7-1.4,5.8,3.7,2.9C215.9,225.2,213,225.3,212.1,224.8z"/>
									<path class="st16" d="M235.3,232.4c3.1-4,5.1-10.9,2.6-15.7c-4.5,5.6-9.7,10.5-16.6,12.9c-13.8,4.9-16.3-3.1-19.1-14.4
										c-4.5,7.7-3.2,14.2,2.3,20.8C214.5,248.1,226.8,242.5,235.3,232.4z"/>
								</g>
						</svg>
					</FlowerChild>
				</FlowerParent>
			</div>
		)
	}
 };

 export default Flower






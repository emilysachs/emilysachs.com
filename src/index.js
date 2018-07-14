import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';
import ping1 from './pingg.mp3';
import ping2 from './pinga.mp3';
import ping3 from './pingbb.mp3';
import ping4 from './pingd.mp3';
import ping5 from './pingee.mp3';
import oping1 from './pingg.ogg';
import oping2 from './pinga.ogg';
import oping3 from './pingbb.ogg';
import oping4 from './pingd.ogg';
import oping5 from './pingee.ogg';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


document.addEventListener("touchstart", function(){}, true);

var sounds = [ping1, ping2, ping3, ping4, ping5];
var osounds = [oping1, oping2, oping3, oping4, oping5];

$(".flower-shower > div > .flower ") // loop each menu item
  .each(function(i) {
     // only clone if more than one needed
      var music = $("#music").clone()
        .attr("id", "music-" + i)
        .prop("volume", 0.05);
        var height = $(this).find('svg').height();
        var pitch = 2;
        if(height > 34){
        	pitch = 0;
        } else if (height > 28){
        	pitch = 1;
        } else if (height > 22){
        	pitch = 2;
        } else if (height > 16){
        	pitch = 3;
        } else if (height > 10){
        	pitch = 4;
        }
        music.find(".mp3").attr("src", sounds[pitch]);
        music.find(".ogg").attr("src", osounds[pitch]);
        music.appendTo($(this)); 
    
    $(this).data("beeper", i); // save reference 
  })
  .mouseenter(function() {
    	$("#music-" + $(this).data("beeper"))[0].play();
  })
  .click(function() {
    	$("#music-" + $(this).data("beeper"))[0].play();
  });
$("#music").attr("id", "music-0");

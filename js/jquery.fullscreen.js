(function($){
	"use strict";
	function supportFullScreen(){
		var doc = document.documentElement;
		return ('requestFullscreen' in doc) ||
				('mozRequestFullScreen' in doc && document.mozFullScreenEnabled) ||
				('webkitRequestFullScreen' in doc);
	}
	function requestFullScreen(elem){
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullScreen) {
			elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	}
	function fullScreenStatus(){
		return document.fullscreen ||
				document.mozFullScreen ||
				document.webkitIsFullScreen ||
				false;
	}
	function cancelFullScreen(){
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
	function onFullScreenEvent(callback){
		$(document).on("fullscreenchange mozfullscreenchange webkitfullscreenchange", function(){
			callback(fullScreenStatus());
		});
	}
	$.support.fullscreen = supportFullScreen();
	$.fn.fullScreen = function(props){
		if(!$.support.fullscreen || this.length !== 1) {
			return this;
		}
		if(fullScreenStatus()){
			cancelFullScreen();
			return this;
		}
		var options = $.extend({
			'background'      : '#111',
			'callback'        : $.noop( ),
			'fullscreenClass' : 'fullScreen'
		}, props),
		elem = this,
		fs = $('<div>', {
			'css' : {
				'overflow-y' : 'auto',
				'background' : options.background,
				'width'      : '100%',
				'height'     : '100%'
			}
		})
			.insertBefore(elem)
			.append(elem);
		elem.addClass( options.fullscreenClass );
		requestFullScreen(fs.get(0));
		fs.click(function(e){
			if(e.target == this){
				cancelFullScreen();
			}
		});
		elem.cancel = function(){
			cancelFullScreen();
			return elem;
		};
		onFullScreenEvent(function(fullScreen){
			if(!fullScreen){
			        $(document).off( 'fullscreenchange mozfullscreenchange webkitfullscreenchange' );
				elem.removeClass( options.fullscreenClass ).insertBefore(fs);
				fs.remove();
			}
			if(options.callback) {
                            options.callback(fullScreen);
                        }
		});
		return elem;
	};
	$.fn.cancelFullScreen = function( ) {
			cancelFullScreen();
			return this;
	};
}(jQuery));
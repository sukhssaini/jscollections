/*
	KeyCatcher 

	It takes three arguments element , keyCode and callBack function.

	CallBack function is executed when the keyCode passed to the function matches the keycode from 
	event.

	Element  : HtmlElement
	KeyCode  : Number
	Callback : Function

*/


"use strict";

/*
	KeyCatcher 

	It takes three arguments element , keyCode and callBack function.

	CallBack function is executed when the keyCode passed to the function matches the keycode from 
	event.

	Element  : HtmlElement
	KeyCode  : Number
	Callback : Function

*/


"use strict";

(function(global) {

	var KeyCatcher = function(element, keyCode, callback) {

		element = (typeof(element) == 'object') && element;
		keyCode = (typeof(keyCode) == 'number') && (keyCode >= 0) && keyCode;
		callback = (typeof(callback) == 'function') && callback;

		if (keyCode && element && callback) {

			var validateAndExecute = function(event) {
				if (event.keyCode == keyCode) {
					callback(event);
				}
			}

			if (element.addEventListener) {
				element.addEventListener('keyup', validateAndExecute);
			} else {
				console.error('Element doesnot have addEventListener');
			}

		} else {
			console.error('Arguments invalid', element, keyCode, callback);
		}

	};


	if (global.KeyCatcher == null || global.KeyCatcher == undefined) {
		global.KeyCatcher = KeyCatcher;
	}

})(window);



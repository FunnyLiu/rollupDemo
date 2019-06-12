(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.webMonitorSdk = {}));
}(this, function (exports) { 'use strict';

	const ABOUT = 'about';

	var index = hehe = `${ABOUT} me`;

	exports.ABOUT = ABOUT;
	exports.default = index;

	Object.defineProperty(exports, '__esModule', { value: true });

}));

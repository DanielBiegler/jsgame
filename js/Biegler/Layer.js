/**
 * 
 */

var Biegler = Biegler || {};

Biegler.Layer = class {

	constructor() {
		
	}
	
	onEvent(e) {
		Biegler.err("Override me.");
	}

	/**
	 * 
	 * @param {Number} delta To calculate logic between frames.
	 */
	onUpdate(delta) {
		Biegler.err("Override me.");
	}

	onRender() {
		Biegler.err("Override me.");
	}

	onAttach() {
		Biegler.err("Override me.");
	}

	onDetach() {
		Biegler.err("Override me.");
	}

}
 
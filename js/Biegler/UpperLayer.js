/**
 * JUST FOR TESTING!!!! CATCH MOUSEEVENTS
 */

var Biegler = Biegler || {};

Biegler.UpperLayer = class extends Biegler.Layer {

	constructor() {
		super();
	}
	
	/**
	 * 
	 * @param {Biegler.Event} e 
	 */
	onEvent(e) {
		if(e.type === Biegler._eventTypes.NONE) {
			Biegler.warn('Empty.');
		} else {
			Biegler.info("UpperLayer ignoring Event!");
		}
	}

	onUpdate() {

	}

	onMouseButtonEvent(e) {
		
	}
	
}
 
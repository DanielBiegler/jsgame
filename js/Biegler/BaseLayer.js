/**
 * TESTING: CATCH KEY EVENTS HERE
 */

var Biegler = Biegler || {};

Biegler.BaseLayer = class extends Biegler.Layer {

	constructor() {
		super();
	}
	
	/**
	 * 
	 * @param {Biegler.Event} e 
	 */
	onEvent(e) {

		switch (e.type) {
			case Biegler._eventTypes.KEY_DOWN:
				this.onKeyPressEvent(e);
				return e.gotHandled = true;
		
			default:
				break;
		}
		
	}

	onUpdate() {

	}

	/**
	 * 
	 * @param {Biegler.Event} e 
	 */
	onKeyPressEvent(e) {
		Biegler.info("Baselayer just handled KeyPress: " + (e.gotHandled = true));
	}
	
}
 
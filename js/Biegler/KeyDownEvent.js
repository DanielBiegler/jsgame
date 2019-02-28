/**
 * 
 */

var Biegler = Biegler || {};

Biegler.KeyDownEvent = class extends Biegler.KeyEvent {

	constructor(keycode) {
		super(keycode);
		this.type = Biegler._eventTypes.KEY_DOWN;
	}

}

/**
 * 
 */

var Biegler = Biegler || {};

Biegler.KeyEvent = class extends Biegler.Event {

	constructor(keycode) {
		super();
		this._keycode = keycode;
	}

	get keycode() { return this._keycode; }

}

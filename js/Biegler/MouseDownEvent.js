/**
 * 
 */

var Biegler = Biegler || {};

Biegler.MouseDownEvent = class extends Biegler.MouseEvent {

	constructor(button, x, y) {
		super(button, x, y);
		this.type = Biegler._eventTypes.MOUSE_DOWN;
	}

}

/**
 * 
 */

var Biegler = Biegler || {};

Biegler.MouseEvent = class extends Biegler.Event {

	constructor(button, x, y) {
		super();
		this._button = button;
		this._x = x;
		this._y = y;
	}

	get button() { return this._button; }
	get x() { return this._x; }
	get y() { return this._y; }

}

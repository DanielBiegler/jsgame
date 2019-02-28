/**
 * 
 */

var Biegler = Biegler || {};

Biegler._eventTypes = {
	NONE: 0,
	KEY_DOWN: 1,
	KEY_UP: 2,
	MOUSE_DOWN: 3,
	MOUSE_UP: 4
};
Object.freeze(Biegler._eventTypes);


Biegler.Event = class {

	constructor() {
		this._gotHandled = false;
		this.type = undefined;
	}

	get gotHandled() { return this._gotHandled; }
	set gotHandled(val) { this._gotHandled = val; return this._gotHandled; }
}

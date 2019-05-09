/**
 * This is supposed to be my a game powered by my engine.
 */

class Example extends Biegler.Application {

	constructor() {
		super();

		this._layerStack.stack.push(new WorldLayer());
	}
	
}

/**
 * Overwrite so main gets executed.
 */
function createApplication()  {
	return new Example();
}
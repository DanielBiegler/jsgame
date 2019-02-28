/**
 * This is supposed to be an application.
 */

var Biegler = Biegler || {};

Biegler.Application = class {

	constructor() {
		this._isRunning = true;
		
		this._layerStack = new Biegler.LayerStack();
		this._layerStack.stack.push(new Biegler.BaseLayer());
		this._layerStack.stack.push(new Biegler.UpperLayer());

		this.initEventCallbacks();
	}


	/**
	 * This is specifically in its own function so we can retain a reference to Application
	 * 
	 * Maybe put this in its own file, not sure right now
	 */
	initEventCallbacks() {
		let self = this;

		document.addEventListener('keypress', function(e) {
			let event = new Biegler.KeyDownEvent(e.keyCode);
			self.onEvent( event );
		});

		document.addEventListener('mousedown', function(e) {
			let event = new Biegler.MouseDownEvent(e.button, e.clientX, e.clientY);
			self.onEvent( event );
		});
	}
	

	/**
	 * 
	 * @param {Biegler.Event} e 
	 */
	onEvent(e) {
		Biegler.debug(e);

		// highest to lowest layer
		// stop propagating an event if it got handled
		for(let i = this._layerStack.stack.length - 1; i >= 0; i--) {
			this._layerStack.stack[i].onEvent(e);
			if(e.gotHandled) {
				break;
			}
		}
	}
	
	set isRunning(val) { this._isRunning = val; return this._isRunning; }
	
	main() {

		while(this._isRunning) {
			
			// update lowest to highest layer
			for(let i = 0; i < this._layerStack.stack.length; i++) {
				this._layerStack.stack[i].onUpdate();
			}

			this.isRunning = false;
			Biegler.info("Ran once. Turn off now.");
		}
		
	}
	
	
}

function createApplication() {
	Biegler.err('Overwrite me.');
}

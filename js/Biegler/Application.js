/**
 * This is supposed to be an application.
 */

var Biegler = Biegler || {};

Biegler.Application = class {

	constructor() {
		this._isRunning = true;
		this._oldTime = Date.now();
		
		this._layerStack = new Biegler.LayerStack();

		this.initEventCallbacks();
		this.initGraphicsContext();
		this.initPhysicsEngine();
	}


	/**
	 * This is specifically in its own function so we can retain a reference to Application
	 * 
	 * Maybe put this in its own file, not sure right now
	 * 
	 * Probably just for debugging stuff atm
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

	initGraphicsContext() {
		// todo refactor magic vars
		const pixiConfig = {
			width: 800,
			height: 600,
			backgroundColor: 0x1099bb,
			resolution: window.devicePixelRatio || 1
		};
		
		Biegler.pixi = new PIXI.Renderer(pixiConfig);
		document.body.appendChild(Biegler.pixi.view);
	}

	initPhysicsEngine() {
		Biegler.info("initPhysicsEngine does nothing.");
	}
	

	/**
	 * 
	 * @param {Biegler.Event} e 
	 */
	onEvent(e) {
		Biegler.debug("Event fired:", e);

		// highest to lowest layer
		// stop propagating an event if it got handled
		for(let i = this._layerStack.stack.length - 1; i >= 0; i--) {
			this._layerStack.stack[i].onEvent(e);
			if(e.gotHandled) {
				Biegler.info(`Event (${e}) got handled.`);
				break;
			}
		}
	}
	
	set isRunning(val) { this._isRunning = val; return this._isRunning; }
	get isRunning() { return this._isRunning; }

	tick() {
		// TODO rm magic vars?
		const newTime = Date.now();
		let deltaTime = newTime - app._oldTime;
		app._oldTime = newTime;	
		if (deltaTime < 0) deltaTime = 0;
		if (deltaTime > 1000) deltaTime = 1000;
		const deltaFrame = deltaTime * 60 / 1000; // 1.0 is for single frame

		
		// update lowest to highest layer
		for(let i = 0; i < app._layerStack.stack.length; i++) {
			app._layerStack.stack[i].onUpdate(deltaFrame);
		}
	
		// update lowest to highest layer
		// TODO Lookup how DDD ECS would implement this?
		for(let i = 0; i < app._layerStack.stack.length; i++) {
			app._layerStack.stack[i].onRender();
		}
		
		requestAnimationFrame(app.tick);
	}
	
	main() {
		requestAnimationFrame(this.tick);
	}
	
}

function createApplication() {
	Biegler.err('Overwrite me.');
}

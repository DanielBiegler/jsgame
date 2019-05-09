/**
 * 
 */


class WorldLayer extends Biegler.Layer {

    constructor() {
		// debugger;
        super();

        // this.world = require('nano-ecs');
        // debugger;
    }

    onEvent(e) {
		Biegler.info(this, "ignoring event:", e);
	}

	onUpdate() {
		// Biegler.err("Override me.");
	}

	onAttach() {
		// Biegler.err("Override me.");
	}

	onDetach() {
		// Biegler.err("Override me.");
	}
    
}

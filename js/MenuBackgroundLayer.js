/**
 * 
 */


class MenuBackgroundLayer extends Biegler.Layer {

    constructor() {
		super();

		this._options = { QUIT: 0, PRINT: 1 };
		Object.freeze(this._options);

		this._currentOption = this._options[Object.keys(this._options)[0]];

		this._container = new PIXI.Container();

		this._textQuit = new PIXI.Text('This is a PixiJS text', {fontSize: 24, fill : 0xff1010, align : 'center'});
		this._textQuit.anchor.set(0.5);
		this._textQuit.position.set(Biegler.pixi.screen.width/2, Biegler.pixi.screen.height/2);
		this._textQuit.interactive = true;
		this._textQuit.buttonMode = true;
		this._textQuit.on('pointerdown', function() {
			this.scale.x *= 1.25;
			this.scale.y *= 1.25;
		});
		this._container.addChild(this._textQuit);
    }

    onEvent(e) {
		Biegler.info("Got event:", e);
	}

	onUpdate(delta) {
		// Biegler.err("Override me.");
	}

	onRender() {
		Biegler.pixi.render(this._container);
	}

	onAttach() {
		// Biegler.err("Override me.");
	}

	onDetach() {
		// Biegler.err("Override me.");
	}
    
}

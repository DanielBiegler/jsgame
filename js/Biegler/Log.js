var Biegler = Biegler || { };


Biegler._logLevels = { NONE: 0, ERR: 1, WARN: 2, INFO: 3, LOG: 4, DEBUG: 5, TRACE: 6 };
Object.freeze(Biegler._logLevels);

// Default
Biegler._logLevel = Biegler._logLevels.TRACE;

Biegler._log = function(level, ...printables) {
	
	switch (level) {
		case Biegler._logLevels.NONE:
			return;

		case Biegler._logLevels.ERR:
			if(Biegler._logLevel >= level) { 
				console.error(`%cERROR %c${new Date().getTime()}%c:`
					, `color: #FF0000;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;
			
		case Biegler._logLevels.WARN:
			if(Biegler._logLevel >= level) {
				console.warn(`%cWARNING %c${new Date().getTime()}%c:`
					, `color: #FF8C00;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;

		case Biegler._logLevels.INFO:
			if(Biegler._logLevel >= level) { 
				console.info(`%cINFO %c${new Date().getTime()}%c:`
					, `color: #00BFFF;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;

		case Biegler._logLevels.LOG:
			if(Biegler._logLevel >= level) { 
				console.log(`%cLOG %c${new Date().getTime()}%c:`
					, `color: #FFFFFF;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;

		case Biegler._logLevels.DEBUG:
			if(Biegler._logLevel >= level) { 
				console.debug(`%cDEBUG %c${new Date().getTime()}%c:`
					, `color: #00FF7F;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;

		case Biegler._logLevels.TRACE:
			if(Biegler._logLevel >= level) { 
				console.trace(`%cTRACE %c${new Date().getTime()}%c:`
					, `color: #FF00FF;`
					, `color: #7777AA;`
					, `color: #FFFFFF`
					, ...printables
				);
			}
		break;

		default:
			console.trace(`%cUNKNOWN LOGLEVEL %c${new Date().getTime()}%c:`
				, `color: #FF0000;`
				, `color: #7777AA;`
				, `color: #FFFFFF`
				, ...printables
			);
		break;
	}
}

Biegler.warn = function(...printables) {
	Biegler._log(Biegler._logLevels.WARN, ...printables);
}

Biegler.err = function(...printables) {
	Biegler._log(Biegler._logLevels.ERR, ...printables);
}

Biegler.info = function(...printables) {
	Biegler._log(Biegler._logLevels.INFO, ...printables);
}

Biegler.trace = function(...printables) {
	Biegler._log(Biegler._logLevels.TRACE, ...printables);
}

Biegler.log = function(...printables) {
	Biegler._log(Biegler._logLevels.LOG, ...printables);
}

Biegler.debug = function(...printables) {
	Biegler._log(Biegler._logLevels.DEBUG, ...printables);
}

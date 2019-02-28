/**
 * Wrapper for logging so I can change the logger in the future without breaking older stuff.
 * 
 * 01:TODO(Dan): The ifs are useless since the logger itself replaces functions higher than the current level with noops.
 * 02:TODO(Dan): Maybe just ignore ulog and do it myself via console.log ..
 * 03:TODO(Dan): MAKE THIS DRY, JESUS CHRIST
 */

// This is ulog
!function(e,n,o){"function"==typeof define&&define.amd?define(n,[],o):e[n]=o()}(this,"ulog",function(){"use strict";function log(e){return e?mods[e]||(mods[e]=extend(create(e),log)):extend(log)}log.formats=[],log.extends=[],log.enable=function(e){var n,o=(e||"").split(/[\s,]+/);for(n=0;n<o.length;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?skipMods.push(new RegExp("^"+e.substr(1)+"$")):dbgMods.push(new RegExp("^"+e+"$")));for(n in mods)patch(mods[n])},log.enabled=function(e){var n;for(n=0;n<skipMods.length;n++)if(skipMods[n].test(e))return;for(n=0;n<dbgMods.length;n++)if(dbgMods[n].test(e))return!0},log.disable=log.enable.bind(log,"");var LVL={ERROR:1,WARN:2,INFO:3,LOG:4,DEBUG:5,TRACE:6},names={error:1,warn:2,info:3,log:4,verbose:4,debug:5,trace:6,silly:6,dir:0,table:0,time:0,timeEnd:0,assert:0},mods={},dbgMods=[],skipMods=[];function create(n,r){return eval("r = {'"+n+"': function() {var a = [].slice.call(arguments), m = a.length > 1 && names[a[0]] ? a.shift() : 'debug'; for (var i=0; i<log.formats.length; i++) log.formats[i](mods[n],m,a); return mods[n][m].apply(mods[n], a)}}[n]"),r.name?r:Object.defineProperty(r,"name",{get:function(){return n}})}function extend(o,t,r){if(!o.log){for(var e in o.NONE=0,o.ulog={version:"2.0.0-beta.6"},LVL)o[e]=LVL[e];Object.defineProperty(o,"level",{get:function(){return void 0!==r?r:t&&t.level},set:function(e){if(void 0===e&&t)r=void 0;else{var n=e&&(Number(e)!=Number(e)?o[e.toUpperCase()]:Number(e));0<=n&&n<=6&&(r=n)}if(patch(o),!t)for(mod in mods)patch(mods[mod])}}),patch(o);for(var n=0;n<log.extends.length;n++)log.extends[n](o,t);return o}}function patch(e){var n=Math.max(e.name&&log.enabled(e.name)&&e.DEBUG||e.level,e.level);for(var o in names)e[o]=n<names[o]?nop:bnd(o)||"function"==typeof print&&print||nop}function bnd(e,n){return(n=log.con())&&(n[e]||n.log).bind(n)}function nop(){}/*module.exports=log;*/var qs=location.search.substring(1),args=qs&&qs.split("&"),lvl,dbg,i,m;try{lvl=localStorage.getItem("log"),dbg=localStorage.getItem("debug")}catch(e){}for(i=0;m=args&&args[i]&&args[i].split("=");i++)"log"==m[0]&&(lvl=m[1]),"debug"==m[0]&&(dbg=m[1]);return log.con=function(){return window.console},dbg&&log.enable(dbg),log(),log.level=lvl||log.WARN,log});

var Biegler = Biegler || { };


Biegler._logger = ulog('Biegler');
Biegler._logger.level = Biegler._logger.TRACE;


Biegler.err = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.ERR) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #ff0000;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('error', msg);
		ulog.formats.pop();
	}
}

Biegler.warn = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.WARN) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #FF8C00;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('warn', msg);
		ulog.formats.pop();
	}
}

Biegler.info = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.INFO) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #00BFFF;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('info', msg);
		ulog.formats.pop();
	}
}

Biegler.log = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.LOG) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #ffffff;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('log', msg);
		ulog.formats.pop();
	}
}

Biegler.debug = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.DEBUG) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #00FF7F;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('debug', msg);
		ulog.formats.pop();
	}
}

Biegler.trace = function(msg) {
	if(Biegler._logLevel >= Biegler._logLevels.TRACE) {
		ulog.formats.push(function(logger, method, args) { args.unshift(`%c${method.toUpperCase()} %c${new Date().getTime()}%c:`, 'color: #ff00ff;', 'color: #7777AA;', 'color: #ffffff;') });
		Biegler._logger('trace', msg);
		ulog.formats.pop();
	}
}

Biegler._logLevels = { NONE: 0, ERR: 1, WARN: 2, INFO: 3, LOG: 4, DEBUG: 5, TRACE: 6 };
Object.freeze(Biegler._logLevels);

// Default
Biegler._logLevel = Biegler._logLevels.TRACE;

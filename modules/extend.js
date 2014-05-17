define(function (require, exports, module) {

	var Module = module.constructor;
	Module.prototype.filename = function (arg) {
		var id = arg.id;
		var parts = id.split('/');
		return parts[parts.length - 1];
	}
	
	exports.filename = function (arg) {
		return module.filename(arg);
	}
});
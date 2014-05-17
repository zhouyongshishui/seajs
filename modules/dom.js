define(function (require, exports, module) {

	var $ = require('jquery');
	var data = require('data');
	var dependecies = module.dependencies;
	var path = require.resolve('style');
	var extend = require('extend');
	var filename = extend.filename(module);


	exports.sendDate = function () {
		$('span','.author').html(data.name);
		$('p','.blog').html(data.content);
		$('span','.url').html(path);
		$('span','.dep').html(dependecies);
		$('span','.filname').html(filename);
	}
});
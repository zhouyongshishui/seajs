define(function (require, exports, module) {

	//引入依赖
	var css = require('style');
	var dom = require('dom');

	console.log(exports, exports == module.exports, module.id);
	dom.sendDate();
});
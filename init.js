define(function (require, exports, module) {

	//引入依赖
	var $ = require('jquery');
	var data = require('data');
	var css = require('style.css');

	$('span','.author').html(data.name);
	$('p','.blog').html(data.content);

});
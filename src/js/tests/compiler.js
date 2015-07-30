var fs = require('fs'),
	ReactTools = require('react-tools'),
	origJs = require.extensions['.js'];

var reactStub = 'module.exports = require("react").createClass({render:function(){return null;}});';

function shouldStub(filename) {
	if (!global.reactModulesToStub) return false;

	// check if the file name ends with any stub path
	var stubs = global.reactModulesToStub;
	for (var i = 0; i < stubs.length; i++) {
		if (filename.substr(-stubs[i].length) == stubs[i]) {
			return true;
		}
	}
	return false;
}

function transform(filename) {
	if (shouldStub(filename)) {
		return reactStub;
	} else {
		var content = fs.readFileSync(filename, 'utf8');
		return ReactTools.transform(content, {harmony: true});
	}
}

require.extensions['.js'] = function(module, filename) {
	// external code never needs compilation
	if (filename.indexOf('node_modules/') >= 0) {
		return (origJs || require.extensions['.js'])(module, filename);
	}
	return module._compile(transform(filename), filename);
};
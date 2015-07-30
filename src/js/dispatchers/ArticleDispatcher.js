var Dispatcher  = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');


var ArticleDispatcher = assign(new Dispatcher() , {

	handleViewAction : function(action){
		console.log('dispatcher : action',action);
		this.dispatch({
			source 	: 	'VIEW_ACTION',
			action 	: 	action
		});
	}
});

module.exports = ArticleDispatcher;
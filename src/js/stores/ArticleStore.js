var ArticleConstants 		= require('../constants/ArticleConstants');
	ArticleDispatcher 		= require('../dispatchers/ArticleDispatcher')
	assign 					= require('react/lib/Object.assign')
	EventEmitter 			= require('events').EventEmitter 
	CHANGE_EVENT  			= 'change';


/**
	@var : _articles 
	Contains 
*/
var _articles 		= [],
	_addArticles 	= function(data){
	    	data.forEach(function(elem, index){
	  			_articles.push(elem);	
  			});
	}


var ArticleStore = assign(EventEmitter.prototype,{
	emitChange:function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener:function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},
	getArticles : function(){
		 return _articles;
	},	
	dispatcherIndex :ArticleDispatcher.register(function(payload){
		var action = payload.action;
		switch(action.actionType){
			case ArticleConstants.LOAD_MORE:
				_addArticles(action.data);
				break;
			
		}
		ArticleStore.emitChange();
		return true;
	})

});



module.exports = ArticleStore;








var ArticleConstants 		= require('../constants/ArticleConstants'),
	ArticleDispatcher 		= require('../dispatchers/ArticleDispatcher'),
	$ 						= require('jquery');



	
var ArticleAction 			= {
		loadMoreArtiles: function(query){
		  	$.ajax({
		      url: 'js/articles.json',
		      dataType: 'json',
		      cache: false,
		      success: function(data) {
		      	var newArticles = data.articles.splice(query.index,query.skip);
		      	
		      	ArticleDispatcher.handleViewAction({
					actionType:ArticleConstants.LOAD_MORE,
					data:newArticles
				});
		      },
		      error: function(xhr, status, err) {
		       console.log('error ajax : ',xhr, status, err);
		      }
		    });
	}
};

module.exports 			= ArticleAction;
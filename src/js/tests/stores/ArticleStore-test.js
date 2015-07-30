var ArticleStore = require('../../stores/ArticleStore');
var ArticleDispatcher = require('../../dispatchers/ArticleDispatcher');
var ArticleConstants = require('../../constants/ArticleConstants');
var ArticleAction = require('../../actions/ArticleAction');
var assert = require('assert');
var sinon = require('sinon');

describe('ArticleStore', function() {

	it('Should make sure our initial articles are empty ', function() {
		assert.equal(ArticleStore.getArticles().length,0);
	});

	it('Should load 3 articles from ariticles.json files when called ', function() {
		var articles = [
				{
					"id": 1,
					"title": "article title 1",
					"image": "http://placehold.it/300x250&text=image 1"
				},
				{
					"id": 2,
					"title": "article title 2",
					"image": "http://placehold.it/300x250&text=image 2"
				},
				{
					"id": 3,
					"title": "article title 3",
					"image": "http://placehold.it/300x250&text=image 3"
				}
			];

		ArticleDispatcher.dispatch({
	    	source 	: 		'VIEW_ACTION',
		    action 	: 	{	
		      				actionType:ArticleConstants.LOAD_MORE,
							data:articles	
		      			}
		});
		assert.equal(ArticleStore.getArticles(),articles.toString());
	});

	
});
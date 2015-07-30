var React = require('react');
var ArticleAction = require('../actions/ArticleAction');
var Articles = require('../components/Articles');

var App = React.createClass({
	loadedArticles : 0,
	skip : 3,
	getInitialState:function(){
		ArticleAction.loadMoreArtiles({index:this.loadedArticles,skip:this.skip});
		return null;
	},
	loadMore:function(){
		this.loadedArticles+=this.skip;
		ArticleAction.loadMoreArtiles({index:this.loadedArticles,skip:this.skip});
	},
	render: function() {
		return (
			<div>
				<h2>Articles</h2>
				<Articles/>
				<button className="btn btn-primary pull-right" onClick={this.loadMore}>Load More ...</button>`
			</div>
		);
	}
});

module.exports = App;
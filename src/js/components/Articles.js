var React = require('react');
var ArticleStore = require('../stores/ArticleStore');
var getArticles = function(){
	return {articles : ArticleStore.getArticles()};
}
var Articles = React.createClass({
	getInitialState:function(){
		return getArticles();
	},
	componentWillMount: function() {
		ArticleStore.addChangeListener(this._onChange);
	},
	_onChange:function () {
		this.setState(getArticles());
	},
	render: function() {
		var articles = this.state.articles.map(function(item) {
			return (
					<div key={item.id} className="row well">
						<div className="">
							<div className="col-md-9">
								<h3>{item.title}</h3>
							</div>
							<div className="col-md-3">
								<img src={item.image} className="img-responsive" />
							</div>
						</div>
					</div>
				);	
		});


		return (
			<div className="container">
				{articles}
			</div>
		);
	}
});

module.exports = Articles;
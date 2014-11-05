/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
		return res.view('index',{welcome:'Bienvenido'});
	},
	postBlog: function(req, res){
		Blog.create(req.body).exec(function (err, result){
			if(err) return res.send(err);
			sails.log.info(result);
		});
		return res.redirect('/mostrar');
	},
	getBlog: function(req, res){
		Blog.find().exec(function (err, blogs){
			if(err) return res.send(err)
			return res.view('mostrar',{blogs:blogs});
		});
	},
	getBlogid: function(req, res){
		Blog.findById(req.params.id).exec(function (err, blog){
			if(err) return res.send(err);
			return res.view('mostrarid',{blog:blog});
		});
	}
	
};


/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
		return res.view('index',{welcome:'Welcome'});
	},

	postBlog: function(req, res){
		Blog.create(req.body).exec(function (err, result){
			if(err) return sails.log.info(err);
			console.log(result);
		});
		return res.redirect('mostrar');
	},
	getPost: function(req, res){

		Blog.find().exec(function (err, blog){
				if(err) return res.send(err);
				res.view('mostrar',{blogs:blog});
		});
	},
	getPostid: function(req, res){
		Blog.findOne(req.id).exec(function (err,blogid){
			res.view('mostrarid',{blogid:blogid});
		});
	}
}



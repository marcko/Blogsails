var fs = require('fs');

module.exports = {


  write: function(req, res){

 fs.writeFile('./file.json','hola mundo',function(err){
	if(err) return console.log(err);

	console.log('se escribio');

});
  	
  },
  leer: function(req, res){

fs.readFile('./file.json','utf8',function(err, data){
	if(err) return console.log(err);
	

		return console.log(data);
});
  	
  }


	
}

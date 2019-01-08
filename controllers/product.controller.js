const Product = require('../models/product.model');
var path = require('path');
//Simple version, without validation or sanitation

exports.index = function (req, res) {
	var root = path.dirname(require.main.filename);
	res.sendFile(root+"/views/index.html");
};
/*
exports.addname = function(req,res){
	 res.send("Hello World");
};

*/
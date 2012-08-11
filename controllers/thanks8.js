var template=require('../views/template-main');
exports.post=function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
	res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'><font style='background-color:#B0AAAA'>Thanks for participating in polls...</font></p></body></html>");
	res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
	res.end();
}
var template=require('../views/template-main');
exports.post=function(req,res){
	var mysql=require('mysql');
	var connecti=mysql.createConnection({
		host:'localhost',
		user:'sbcd90',
		password:'algo..addict965431',
	});
	connecti.connect();
	connecti.query('select disease from sbcd90.prescription;',function(err,rows,fields){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
		res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'><font style='background-color:#B0AAAA'>Displaying the list of diseases</font></p></body></html>");
		res.write("<p></p>");
		var u=new Array();
		var j=0,w;
		for(var i in rows){
			//res.write(rows[i].disease);
			//res.write("<p></p>");
			for(w=0;w<j;w++){
				if(u[w]==rows[i].disease)
					break;
			}
			if(w==j){
				u[j]=rows[i].disease;
				j++;
			}				
		}	
		res.write("<html><body><p align='center' style='color:#00FF00'><font style='background-color:#B0AAAA'>Disease Name</font></p></body></html>");
		for(w=0;w<j;w++){
			res.write("<html><body><p align='center' style='color:#00FF00'><font style='background-color:#B0AAAA'>"+u[w]+"</font></p></body></html>");
			res.write("<p></p>");
		}
		res.write("<html><body><form action='/thanks10' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Disease name:</font> <input type='text' title='Enter the disease name from the list to get the list of prescriptions' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Bank Account Details:</font> <input type='text' title='Enter your account number & password separated by space' name='value4'/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>");
		res.end();
	});
}
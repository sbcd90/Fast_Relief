var template=require('../views/template-main');
exports.post=function(req,res){
	var mysql=require('mysql');
	var connecti=mysql.createConnection({
		host:'localhost',
		user:'sbcd90',
		password:'algo..addict965431',
	});
	connecti.connect();
	connecti.query('select id5,med_name,disease from sbcd90.medicine;',function(err,rows,fields){
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net'><img src='http://www.freeimagehosting.net/newuploads/lqzua.jpg' alt='Free Image Hosting'></a></div></body></html>");
		res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>Here is the list of medicines on which you can create your prescription..Kindly enter Medicine ID & then press <go> to see the details of that particular medicine</font></p></body></html>");
		res.write("<p></p>");
		for(var i in rows){
			var v='';
			//v=v+'	'+rows[i].id5.toString()+'	'+rows[i].med_name+'	'+rows[i].disease;
			res.write("<p></p>");
			res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'>The Medicine details are as follows:</p></body></html>");
			v=rows[i].id5.toString();
			res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Medicine ID: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
			v=rows[i].med_name;
			res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Medicine Name: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
			v=rows[i].disease;
			res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Disease: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
			res.write("<p></p>");
		}
		res.write("<html><body><form action='/thanks9' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Medicine ID:</font> <input type='text' title='Enter the Medicine ID for the details of the medicine you wish to see' name='value0'/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>");
		res.end();
	});
}
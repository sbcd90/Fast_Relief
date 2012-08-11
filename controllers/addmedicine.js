var template=require('../views/template-main');
exports.post=function(req,res){
	var mysql=require('mysql');
	var connecti=mysql.createConnection({
		host:'localhost',
		user:'sbcd90',
		password:'algo..addict965431',
	});
	connecti.connect();
	connecti.query('select max(id5) as z from sbcd90.medicine;',function(err,rows,fields){
		var u=rows[0].z;
		u++;
		var z1='';
		z1=z1+"Enter the following number as your medicine id:	"+u.toString();
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net'><img src='http://www.freeimagehosting.net/newuploads/lqzua.jpg' alt='Free Image Hosting'></a></div></body></html>");
		res.write("<html><body><p style='color:#00FF00'>Warning: Once you create a medicine descriptor you cannot edit it.You have to create a new medicine descriptor in case of any mistake.</p></body></html>");
		res.write("<html><body><p style='color:#00FF00;font-size:12pt'>"+z1+"</p></body></html>");
		res.write("<p></p>");
		res.write("<html><body><form action='/thanks5' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Medicine ID:</font> <input type='text' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Medicine Name:</font> <input type='text' title='Enter the new medicine name' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Disease:</font> <input type='text' title='Enter Disease which it can cure' name='value2'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Cost:</font> <input type='text' title='Enter per bottle cost or per tablet cost' name='value3'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Contents:</font> <input type='text' title='Chemical contents of the medicine' name='value4'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Similar to:</font> <input type='text' title='Similar to which medicine..give an example' name='value5'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Other Importants:</font> <input type='text' title='Any side effects..dependency medicines' name='value6'/></div><div style='color:#00FF00' align='center'><input type='submit' value='add'/></div></form></body></html>");
		res.end();
	});
	connecti.end();
}
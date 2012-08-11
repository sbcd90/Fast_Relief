var template=require('../views/template-main');
exports.post=function(req,res){
	var x='';
	req.on('data',function(data){
		x=x+data;
	});
	req.on('end',function(){
		if(x[7]=='d'){
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			connecti.query('select max(id1) as z from sbcd90.doctor;',function(err,rows,fields){
				var u=rows[0].z;
				u++;
				var z1='';
				z1=z1+"Enter the following number as your ID to create your account:	"+u.toString();
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/x89sj'><img src='http://www.freeimagehosting.net/newuploads/x89sj.jpg'></a></div></body></html>");
				res.write("<html><body><p align='center' style='font-size:32pt'>Enter the details to get started</p></body></html>");
				res.write("<html><body><p style='font-size:24pt'><font style='background-color:#B0AAAA'>Guidelines:Please follow the rules written below & in the tooltip to proceed</font></p></body></html>");
				res.write("<html><body><p style='font-size:16pt'><font style='background-color:#B0AAAA'>"+z1+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><form action='/thanks1' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Health Centre ID:</font> <input type='text' title='Enter your Health Centre ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Name:</font> <input type='text' title='Enter your official name' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Degrees:</font> <input type='text' title='enter degrees separated by commas' name='value2'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Years in Profession:</font> <input type='text' title='Enter no. of years as an integer' name='value3'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Disease specializing:</font> <input type='text' title='enter your specialization' name='value4'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Time to consult:</font> <input type='text' title='enter the time when you are free like this: <hh:mm>-<hh:mm>' name='value5'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Contact Number:</font> <input type='text' title='enter your contact details,like <contact no.>,<email-id>' name='value6'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Fees:</font> <input type='text' title='Enter your fees as an integer calculated in INR' name='value7'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Password:</font> <input type='password' title='enter your password' name='value8'/></div><div style='color:#00FF00' align='center'><input type='submit' value='add'/></div></form></body></html>");
				res.end();
			});
			connecti.end();
		}
		else if(x[7]=='p'){
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			connecti.query('select max(id2) as z from sbcd90.patient;',function(err,rows,fields){
				var u=rows[0].z;
				u++;
				var z1='';
				z1=z1+"Enter the following number as your ID to create your account:	"+u.toString();
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/ut5x1'><img src='http://www.freeimagehosting.net/newuploads/ut5x1.jpg'></a></div></body></html>");
				res.write("<html><body><p align='center' style='font-size:32pt'>Enter the details to get started</p></body></html>");
				res.write("<html><body><p style='font-size:24pt'><font style='background-color:#B0AAAA'>Guidelines:Please follow the rules written below & in the tooltip to proceed</font></p></body></html>");
				res.write("<html><body><p style='font-size:16pt'>"+z1+"</p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><form action='/thanks2' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Health Centre ID:</font> <input type='text' title='Enter your Health Centre ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Name:</font> <input type='text' title='Enter your official name' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Password:</font> <input type='password' title='enter your password' name='value2'/></div><div style='color:#00FF00' align='center'><input type='submit' value='add'/></div></form></body></html>");
				res.end();
			});
			connecti.end();
		}
		else if(x[7]=='m'){
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			connecti.query('select max(id3) as z from sbcd90.medirep;',function(err,rows,fields){
				var u=rows[0].z;
				u++;
				var z1='';
				z1=z1+"Enter the following number as your ID to create your account:	"+u.toString();
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/8bz3i'><img src='http://www.freeimagehosting.net/newuploads/8bz3i.png'></a></div></body></html>");
				res.write("<html><body><p align='center' style='font-size:32pt'>Enter the details to get started</p></body></html>");
				res.write("<html><body><p style='font-size:24pt'><font style='background-color:#B0AAAA'>Guidelines:Please follow the rules written below & in the tooltip to proceed</font></p></body></html>");
				res.write("<html><body><p style='font-size:16pt'>"+z1+"</p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><form action='/thanks3' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Health Centre ID:</font> <input type='text' title='Enter your Health Centre ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Name:</font> <input type='text' title='Enter your official name' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Password:</font> <input type='password' title='Enter your password' name='value2'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Company name:</font> <input type='text' title='Enter your Company name' name='value3'/></div><div style='color:#00FF00' align='center'><input type='submit' value='add'/></div></form></body></html>");
				res.end();
			});
			connecti.end();
		}
	});
}
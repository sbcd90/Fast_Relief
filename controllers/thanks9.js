var template=require('../views/template-main');
exports.post=function(req,res){
	var x='';
	req.on('data',function(data){
		x=x+data;
	});
	req.on('end',function(){
		var i,j;
		var a1=new Array();
		j=0;
		for(i=7;i<x.length;i++){
			if(x[i]=='+')
				a1[j]=' ';
			else	
			a1[j]=x[i];
			j++;
		}
		var z1=a1.join("");
		var z2=parseInt(z1);
		var mysql=require('mysql');
		var connecti=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti.connect();
		var v='select * from sbcd90.medicine where id5='+connecti.escape(z2);
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/8bz3i'><img src='http://www.freeimagehosting.net/newuploads/8bz3i.png'></a></div></body></html>");
			res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'>Here are the Medicine details</p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Medicine ID: <font style='color:#B0AAAA'>"+rows[0].id5.toString()+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Medicine Name: <font style='color:#B0AAAA'>"+rows[0].med_name+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Disease: <font style='color:#B0AAAA'>"+rows[0].disease+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Cost per bottle or per tablet: <font style='color:#B0AAAA'>"+rows[0].cost+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Chemical Contents: <font style='color:#B0AAAA'>"+rows[0].contents+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Similar to: <font style='color:#B0AAAA'>"+rows[0].similar_to+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt;'>Other Importants: <font style='color:#B0AAAA'>"+rows[0].other_imp+"</font></p></body></html>");
			res.write("<p></p>");
			res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
			res.end();
		});
	});
}
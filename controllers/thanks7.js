var template=require('../views/template-main');
exports.post=function(req,res){
	var x='';
	req.on('data',function(data){
		x=x+data;
	});
	req.on('end',function(){
		var i,j,u;
		var a1=new Array();
		j=0;
		for(i=7;;i++){
			if(x[i]=='&')
				break;
			else if(x[i]=='+')
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
		var v='update sbcd90.prescription set rating=rating+4 where id4='+connecti.escape(z2);
		connecti.query(v,function(err,rows,fields){
			//res.writeHead(200,{'Content-Type':'text/html'});
			//res.write("Thanks for participating in polls... :-)");
			//res.end();
		});
		connecti.end();
		j=0;
		u=(i+8);
		var a2=new Array();
		for(;u<x.length;u++){
			if(x[u]=='+')
				a2[j]=' ';
			else	
				a2[j]=x[u];
			j++;
		}
		var z3=a2.join("");
		var connecti1=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti1.connect();
		var v1='update sbcd90.doctor set rating=rating+4 where name='+connecti.escape(z3);
		connecti1.query(v1,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
			res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'><font style='background-color:#B0AAAA'>Thanks for participating in polls...</font></p></body></html>");
			res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
			res.end();
		});	
		connecti1.end();
	});
}	
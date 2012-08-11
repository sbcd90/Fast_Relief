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
		u=(i+8);
		j=0;
		var a2=new Array();
		for(;u<x.length;u++){
			if(x[u]=='+')
				a2[j]=' ';
			else
				a2[j]=x[u];
			j++;
		}
		var z9=a2.join("");
		var z1=a1.join("");
		var z2=parseInt(z1);
		var mysql=require('mysql');
		var connecti=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti.connect();
		var v='select * from sbcd90.doctor where name=(select name from sbcd90.prescription where id4='+connecti.escape(z2)+')';
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			var f=0;
			for(var i in rows){
				if(rows[i].name==z9)
					f=1;
			}
			if(f==0){
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
				res.write("<html><body><p style='color:00FF00;font-family:verdana;font-size:32pt'>Processing...Press 'go' to continue</p></body></html>"); 
				var v1="<html><body><form action='/thanks6' method='post'><div style='color:#00FF00' align='center'><input type='hidden' name='value0' value="+z1+"/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>";
				res.write(v1);
			}
			else if(f==1)
				res.write("<html><body><p align='center' style='color:#00FF00'>Wrong Inputs</p></body></html>");
			res.end();	
		});
		connecti.end();
	});
}	
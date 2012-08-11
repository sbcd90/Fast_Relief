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
		j=0;
		u=(i+8);
		var a2=new Array();
		for(;;u++){
			if(x[u]=='&')
				break;
			else if(x[u]=='+')
				a2[j]=' ';
			else
				a2[j]=x[u];
			j++;
		}
		var z2=a2.join("");
		j=0;
		i=(u+8);
		var a3=new Array();
		for(;;i++){
			if(x[i]=='&')
				break;
			else if(x[i]=='+')
				a3[j]=' ';
			else
				a3[j]=x[i];
			j++;
		}
		var z3=a3.join("");
		j=0;
		u=(i+8);
		var a4=new Array();
		for(;;u++){
			if(x[u]=='&')
				break;
			else if(x[u]=='+')
				a4[j]=' ';
			else
				a4[j]=x[u];
			j++;
		}
		var z4=a4.join("");
		j=0;
		i=(u+8);
		var a5=new Array();
		for(;;i++){
			if(x[i]=='&')
				break;
			else if(x[i]=='+')
				a5[j]=' ';
			else
				a5[j]=x[i];
			j++;
		}
		var z5=a5.join("");
		j=0;
		u=(i+8);
		var a6=new Array();
		for(;;u++){
			if(x[u]=='&')
				break;
			else if(x[u]=='+')
				a6[j]=' ';
			else
				a6[j]=x[u];
			j++;
		}
		var z6=a6.join("");
		j=0;
		i=(u+8);
		var a7=new Array();
		for(;;i++){
			if(x[i]=='&')
				break;
			else if(x[i]=='+')
				a7[j]=' ';
			else
				a7[j]=x[i];
			j++;
		}
		var z7=a7.join("");
		j=0;
		u=(i+8);
		var a8=new Array();
		for(;;u++){
			if(x[u]=='&')
				break;
			else if(x[u]=='+')
				a8[j]=' ';
			else
				a8[j]=x[u];
			j++;
		}
		var z8=a8.join("");
		j=0;
		i=(u+8);
		var a9=new Array();
		for(;i<x.length;i++){
			if(x[i]=='+')
				a9[j]=' ';
			else	
				a9[j]=x[i];
			j++;
		}
		var z9=a9.join("");
		var mysql=require('mysql');
		var connecti=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti.connect();
		//check for errors
		var v='insert into sbcd90.doctor values ('+connecti.escape(parseInt(z1))+','+connecti.escape(z2)+','+connecti.escape(z3)+','+connecti.escape(z4)+','+connecti.escape(z5)+','+connecti.escape(z6)+','+connecti.escape(z7)+',0,'+connecti.escape(parseInt(z8))+','+connecti.escape(z9)+')';
		connecti.query(v,function(err,rows,fields){
			//console.log(rows);
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
			res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>Thank You for Registering...</font></p></body></html>");
			res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
			res.end();
		});
		connecti.end();
	});
}	
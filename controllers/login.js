var template=require('../views/template-main');
exports.post=function(req,res){
	var x='';
	req.on('data',function(data){
		x=x+data;
	});
	req.on('end',function(){
		if(x[7]=='d'){
			var i,j=0;
			var a1=new Array();
			for(i=21;;i++){
				if(x[i]=='&')
					break;
				else if(x[i]=='+')
					a1[j]=' ';
				else
					a1[j]=x[i];
				j++;
			}
			var a_str=a1.join("");
			var u=(i+8);
			var a2=new Array();
			j=0;
			for(;u<x.length;u++){
				if(x[u]=='+')
					a2[j]=' ';
				else
					a2[j]=x[u];
				j++;
			}
			var b=a2.join("");
			var a=parseInt(a_str);
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			var v='select * from sbcd90.doctor where id1='+connecti.escape(a)+' and password='+connecti.escape(b);
			connecti.query(v,function(err,rows,fields){
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/x89sj'><img src='http://www.freeimagehosting.net/newuploads/x89sj.jpg'></a></div></body></html>");
				var i2=0;
				for(var i1 in rows){
					res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'>Doctor Information</p></body></html>");
					res.write("<html><body><p style='color:#00FF00;font-size=12pt;'>Health Care ID: <font style='color:#B0AAAA'>"+rows[i1].id1.toString()+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Doctor Name: <font style='color:#B0AAAA'>"+rows[i1].name+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Degrees: <font style='color:#B0AAAA'>"+rows[i1].degrees+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Years in profession: <font style='color:#B0AAAA'>"+rows[i1].years_in_prof+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Disease specialization:	<font style='color:#B0AAAA'>"+rows[i1].disease+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Time to check patients:	<font style='color:#B0AAAA'>"+rows[i1].timing+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Contact details: <font style='color:#B0AAAA'>"+rows[i1].contact+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Health Centre rating: <font style='color:#B0AAAA'>"+rows[i1].rating.toString()+"</font></p></body></html>");
					res.write("<p></p>");
					var i3=rows[i1].money+(rows[i1].rating/10);
					res.write("<html><body><p style='color:#00FF00;font-family:12pt;'>Money:<font style='color:#B0AAAA'>"+" INR"+i3.toString()+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-family:12pt;'>Password:	<font style='color:#B0AAAA'>"+rows[i1].password+"</font></p></body></html>");
					res.write("<p></p>");
					i2++;
				}
				if(i2>0){
					res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>As a Doctor you can 'check for new medicine' by clicking on 'check new medicines',</font></p><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>You can 'add a new prescription' by clicking on 'add a new prescription',</font></p><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>You can 'vote for other prescriptions' by entering your official name & clicking on 'participate in polls'.</font></p></body></html>");
					res.write("<html><body><form action='/prescription' method='post'><div style='color:#00FF00' align='center'><input type='submit' value='add a new prescription'/></div></form></body></html>");
					res.write("<html><body><form action='/polls' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Enter name:</font> <input type='text' title='Enter your official name' name='value0'/></div><div style='color:#00FF00' align='center'><input type='submit' value='participate in polls'/></div></form></body></html>");
					res.write("<html><body><form action='/medicines' method='post'><div style='color:#00FF00' align='center'><input type='submit' value='check new medicines'/></div></form></body></html>");
					res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
				}
				else{
					res.write("Error while Login...Please check your password");
				}
				res.end();
			});
			connecti.end();
		}	
		else if(x[7]=='p'){
			var i,j=0;
			var a1=new Array();
			for(i=22;;i++){
				if(x[i]=='&')
					break;
				else if(x[i]=='+')
					a1[j]=' ';
				else
					a1[j]=x[i];
				j++;
			}
			var a_str=a1.join("");
			var u=(i+8);
			var a2=new Array();
			j=0;
			for(;u<x.length;u++){
				if(x[u]=='+')
					a2[j]=' ';
				else
					a2[j]=x[u];
				j++;
			}
			var b=a2.join("");
			var a=parseInt(a_str);
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			var v='select * from sbcd90.patient where id2='+connecti.escape(a)+' and password='+connecti.escape(b);
			connecti.query(v,function(err,rows,fields){
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/ut5x1'><img src='http://www.freeimagehosting.net/newuploads/ut5x1.jpg'></a></div></body></html>");
				var i2=0;
				for(var i1 in rows){
					res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'>Patient Information</p></body></html>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Health Care ID:	<font style='color:#B0AAAA'>"+rows[i1].id2.toString()+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Patient Name: <font style='color:#B0AAAA'>"+rows[i1].name+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Password: <font style='color:#B0AAAA'>"+rows[i1].password+"</font></p></body></html>");
					res.write("<p></p>");
					i2++;
				}
				if(i2>0){
					res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>As a patient you can click 'get prescription' button to get doctors advice,</font></p><html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>You can get contact details of doctors for treating your disease by clicking on 'get doctor info' button</font></p></body></html>"); 
					res.write("<html><body><form action='/prescribed' method='post'><div style='color:#00FF00' align='center'><input type='submit' value='get prescription'/></div></form></body></html>");
					res.write("<html><body><form action='/doctorinfo' method='post'><div style='color:#00FF00' align='center'><input type='submit' value='get doctor info'/></div></form></body></html>");
					res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
				}
				else{
					res.write("Error while login...please check your login details");
				}
				res.end();
			});	
			connecti.end();
		}	
		else if(x[7]=='m'){
			var i,j=0;
			var a1=new Array();
			for(i=22;;i++){
				if(x[i]=='&')
					break;
				else if(x[i]=='+')
					a1[j]=' ';
				else
					a1[j]=x[i];
				j++;
			}
			var a_str=a1.join("");
			var u=(i+8);
			var a2=new Array();
			j=0;
			for(;u<x.length;u++){
				if(x[u]=='+')
					a2[j]=' ';
				else	
					a2[j]=x[u];
				j++;
			}
			var b=a2.join("");
			var a=parseInt(a_str);
			var mysql=require('mysql');
			var connecti=mysql.createConnection({
				host:'localhost',
				user:'sbcd90',
				password:'algo..addict965431',
			});
			connecti.connect();
			var v='select * from sbcd90.medirep where id3='+connecti.escape(a)+' and password='+connecti.escape(b);
			connecti.query(v,function(err,rows,fields){
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/8bz3i'><img src='http://www.freeimagehosting.net/newuploads/8bz3i.png'></a></div></body></html>");
				var i2=0;
				for(var i1 in rows){
					res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'>Medical Representative Information</p></body></html>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Health Care ID: <font style='color:#B0AAAA'>"+rows[i1].id3.toString()+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Medical Representative Name: <font style='color:#B0AAAA'>"+rows[i1].name+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Password: <font style='color:#B0AAAA'>"+rows[i1].password+"</font></p></body></html>");
					res.write("<p></p>");
					res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Company Name: <font style='color:#B0AAAA'>"+rows[i1].company+"</font></p></body></html>");
					res.write("<p></p>");
					i2++;
				}
				if(i2>0){
					res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>As a Medical Representative you can 'add new medicine' by clicking on 'add new medicine' button</font></p></body></html>");
					res.write("<html><body><form action='/addmedicine' method='post'><div style='color:#00FF00' align='center'><input type='submit' value='add new medicine'/></div></form></body></html>");
					res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
				}
				else{
					res.write("Error while login...please check your login details");
				}
				res.end();
			});
		}	
	});
}	
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
		var mysql=require('mysql');
		var connecti=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti.connect();
		var v='select id4,name,date,disease from sbcd90.prescription where date > "01/01/2012" and name != '+connecti.escape(z1);
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a></div></body></html>");
			res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style:'background-color:#B0AAAA'>Here is the list of prescriptions..Kindly enter Prescription ID & then press <go> to see the details of that particular prescription</p></body></html>");
			res.write("<p></p>");
			for(var i in rows){
				var v='';
				//v=v+'	'+rows[i].id4.toString()+'	'+rows[i].name+'	'+rows[i].date+'	'+rows[i].disease;
				res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'>The prescription details are as follows:</p></body></html>");
				v=rows[i].id4.toString();
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Prescription ID: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
				v=rows[i].name;
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Doctor Name: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
				v=rows[i].date;
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Date: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
				v=rows[i].disease;
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Disease: <font style='color:#B0AAAA'>"+v+"</font></p></body></html>");
				res.write("<p></p>");
			}
			res.write("<html><body><form action='/thanks12' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Prescription ID:</font> <input type='text' title='Enter the prescription Id of your chosen prescription' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Your name:</font> <input type='text' title='Enter Your official name' name='value1'/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>");
			res.end();
		});
	});	
}
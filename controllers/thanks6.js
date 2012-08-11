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
		var v='select * from sbcd90.prescription where id4='+connecti.escape(z2);
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/hzlme'><img src='http://www.freeimagehosting.net/newuploads/hzlme.jpg'></a></div></body></html>");
			res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt'>The prescription details are given below:</p></body></html>");
			for(var i in rows){
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Prescription ID: <font style='color:#B0AAAA'>"+rows[i].id4.toString()+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Doctor Name: <font style='color:#B0AAAA'>"+rows[i].name+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Date: <font style='color:#B0AAAA'>"+rows[i].date+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Medicine Name: <font style='color:#B0AAAA'>"+rows[i].med_name+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Disease: <font style='color:#B0AAAA'>"+rows[i].disease+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dose for <10 yrs.: <font style='color:#B0AAAA'>"+rows[i].dose_10+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dose for between 10 & 30 yrs.: <font style='color:#B0AAAA'>"+rows[i].dose_30+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dose for between 30 & 40 yrs.: <font style='color:#B0AAAA'>"+rows[i].dose_40+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dose for between 40 & 60 yrs.: <font style='color:#B0AAAA'>"+rows[i].dose_60+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dose for beyond 60 yrs.: <font style='color:#B0AAAA'>"+rows[i].dose_beyond+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Dependency medicine & dose: <font style='color:#B0AAAA'>"+rows[i].dependencies+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Tests preffered: <font style='color:#B0AAAA'>"+rows[i].tests+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00;font-size:12pt;'>Rating: <font style='color:#B0AAAA'>"+rows[i].rating.toString()+"</font></p></body></html>");
				res.write("<p></p>");
			}
			res.write("<html><body><p style='color:#00FF00;font-size:16pt'><font style='background-color:#B0AAAA'>If you want to vote in favour of prescription,press the 'yes' button or else press the 'no' button</font></p></body></html>");
			res.write("<html><body><form action='/thanks7' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Prescription ID:</font> <input type='text' title='Enter the prescription ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Doctor Name:</font> <input type='text' title='Enter the doctors name given in the prescription' name='value1'/></div><div style='color:#00FF00' align='center'><input type='submit' value='yes'/></div></form></body></html>");
			res.write("<html><body><form action='/thanks8' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Prescription ID:</font> <input type='text' title='Enter the prescription ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Doctor Name:</font> <input type='text' title='Enter the doctors name given in the prescription' name='value1'/></div><div style='color:#00FF00' align='center'><input type='submit' value='no'/></div></form></body></html>");
			res.end();
		});
		connecti.end();
	});
}
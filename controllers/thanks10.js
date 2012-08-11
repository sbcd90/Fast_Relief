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
		var mysql=require('mysql');
		var connecti=mysql.createConnection({
			host:'localhost',
			user:'sbcd90',
			password:'algo..addict965431',
		});
		connecti.connect();
		var v='select * from sbcd90.prescription where disease='+connecti.escape(z1)+' order by rating desc limit 0,3';
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/hzlme'><img src='http://www.freeimagehosting.net/newuploads/hzlme.jpg'></a></div></body></html>");
			res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'><font style='background-color:#B0AAAA'>Displaying the top 3 rated prescriptions for your disease</font></p></body></html>");
			res.write("<p></p>");
			for(var i1 in rows){
				res.write("<p></p>");
				res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'>The prescription details are given below:</p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Prescription ID: <font style='color:#B0AAAA'>"+rows[i1].id4.toString()+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Doctor Name: <font style='color:#B0AAAA'>"+rows[i1].name+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Date: <font style='color:#B0AAAA'>"+rows[i1].date+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Medicine Name: <font style='color:#B0AAAA'>"+rows[i1].med_name+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Disease: <font style='color:#B0AAAA'>"+rows[i1].disease+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dose for <10 yrs.: <font style='color:#B0AAAA'>"+rows[i1].dose_10+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dose for between 10 & 30 yrs.: <font style='color:#B0AAAA'>"+rows[i1].dose_30+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dose for between 30 & 40 yrs.: <font style='color:#B0AAAA'>"+rows[i1].dose_40+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dose for between 40 & 60 yrs.: <font style='color:#B0AAAA'>"+rows[i1].dose_60+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dose for beyond 60 yrs.: <font style='color:#B0AAAA'>"+rows[i1].dose_beyond+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Dependency medicine & dose: <font style='color:#B0AAAA'>"+rows[i1].dependencies+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Tests preffered: <font style='color:#B0AAAA'>"+rows[i1].tests+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Rating: <font style='color:#B0AAAA'>"+rows[i1].rating.toString()+"</font></p></body></html>");
				res.write("<p></p>");
			}
			res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
			res.end();
		});
		connecti.end();
	});
}
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
		var v='select * from sbcd90.doctor where disease='+connecti.escape(z1)+' order by rating desc limit 0,3';
		connecti.query(v,function(err,rows,fields){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/x89sj'><img src='http://www.freeimagehosting.net/newuploads/x89sj.jpg'></a></div></body></html>");
			res.write("<html><body><p align='center' style='font-family:verdana;font-size:24pt;'><font style='background-color:#B0AAAA'>Displaying the top 3 rated doctors for treatment of your disease</font></p></body></html>");
			res.write("<p></p>");
			for(var i1 in rows){
				res.write("<p></p>");
				res.write("<html><body><p align='center' style='color:#00FF00;font-size:16pt;'>Doctor Information</p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Doctor Name: <font style='color:#B0AAAA'>"+rows[i1].name+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Degrees: <font style='color:#B0AAAA'>"+rows[i1].degrees+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Years in profession: <font style='color:#B0AAAA'>"+rows[i1].years_in_prof+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Disease specialization: <font style='color:#B0AAAA'>"+rows[i1].disease+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>time to check patients: <font style='color:#B0AAAA'>"+rows[i1].timing+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Contact details: <font style='color:#B0AAAA'>"+rows[i1].contact+"</font></p></body></html>");
				res.write("<p></p>");
				res.write("<html><body><p style='color:#00FF00'>Health Centre rating: <font style='color:#B0AAAA'>"+rows[i1].rating.toString()+"</font></p></body></html>");
				res.write("<p></p>");
				var i3=rows[i1].money+(rows[i1].rating/10);
				res.write("<html><body><p style='color:#00FF00'>Money: <font style='color:#B0AAAA'>"+"INR"+i3.toString()+"</font></p></body></html>");
				res.write("<p></p>");
			}
			res.write("<html><body><form action='/start' method='get'><div style='color:#00FF00' align='center'><input type='submit' value='back'/></div></form></body></html>");
			res.end();
		});
		connecti.end();
	});
}
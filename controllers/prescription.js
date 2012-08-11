var template=require('../views/template-main');
exports.post=function(req,res){
	var mysql=require('mysql');
	var connecti=mysql.createConnection({
		host:'localhost',
		user:'sbcd90',
		password:'algo..addict965431',
	});
	connecti.connect();
	connecti.query('select max(id4) as z from sbcd90.prescription;',function(err,rows,fields){
		var u=rows[0].z;
		u++;
		var z1='';
		z1=z1+"Enter the following number as your prescription id:	"+u.toString();
		res.writeHead(200,{'Content-Type':'text/html'});
		res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/hzlme'><img src='http://www.freeimagehosting.net/newuploads/hzlme.jpg'></a></div></body></html>");
		res.write("<html><body><p style='color:#00FF00'>Warning: Once you create a prescription you cannot edit it.You have to create a new prescription in case of any mistake.</p></body></html>");
		res.write("<html><body><p style='font-size:12pt'>"+z1+"</p></body></html>");
		res.write("<p></p>");
		res.write("<html><body><form action='/thanks4' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Prescription ID:</font> <input type='text' title='Enter the required Prescription ID' name='value0'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Doctor Name:</font> <input type='text' title='Enter your official name' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Date:</font> <input type='text' title='Enter date in <dd/mm/yyyy> format' name='value2'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Medicine Name:</font> <input type='text' title='Enter the medicine name you want to prescribe' name='value3'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Disease:</font> <input type='text' title='Enter the disease for which the medicine can be used' name='value4'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Dose-for < 10 yrs.:</font> <input type='text' title='Enter data as a string with underscores like <Gelusil>_<before_breakfast:2 spoons>...' name='value5'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>for between 10 & 30 yrs.:</font> <input type='text' title='Enter data as a string with underscores like <Gelusil>_<before_breakfast:2 spoons>...' name='value6'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>for between 30 & 40 yrs.:</font> <input type='text' title='Enter the data with underscores' name='value7'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>for between 40 & 60 yrs.:</font> <input type='text' title'Enter the data with underscores' name='value8'/><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>for 60 yrs. & beyond:</font> <input type='text' title='Enter the data using underscores' name='value9'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Dependency medicines & dose:</font> <input type='text' title='Enter in this format:<medicine name>_<disease name>_<dose>' name='valu11'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Tests preffered:</font> <input type='text' title='Suggestion of suitable tests before contacting you' name='valu12'/></div><div style='color:#00FF00' align='center'><input type='submit' value='add'/></div></form></body></html>");
		res.end();
	});
	connecti.end();
}
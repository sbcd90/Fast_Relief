var template=require('../views/template-main');
exports.get=function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("<html><body style='background-color:#A57E3A'><div align='center'><a href='http://www.freeimagehosting.net/3dpyq'><img src='http://www.freeimagehosting.net/newuploads/3dpyq.jpg'></a><a href='http://www.freeimagehosting.net/kmww5'><img src='http://www.freeimagehosting.net/newuploads/kmww5.jpg'></a></div></body></html>");
	res.write("<html><body><p align='center' style='font-family:verdana;font-size:32pt;color:#00FF00'>Fast Relief</p></body></html>");
	res.write("<html><body><p></p></body></html>");
	res.write("<html><body><p style='font-family:verdana;font-size:32pt;'><font style='background-color:#B0AAAA'>About</font></p></body></html>");
	res.write("<html><body><p><font style='background-color:#B0AAAA'>Hello & Welcome to the Internet Health Centre.In this fast moving world,we generally don't have time to take care of our own health.This app just allows you to do the same in a matter of seconds.</font></p></body></html>");
	res.write("<html><body><p><font style='background-color:#B0AAAA'>This application benefits doctors,medical companies,& patients of course...Here are a couple of points which will benefit each class of people</font></p></body></html>");
	res.write("<html><body><p><font style='background-color:#B0AAAA'>For Doctors:</font></p><p><font style='background-color:#B0AAAA'>1. Upto What Radius do your circle of influence covers?Now you can prescribe & treat patients from all around the globe and increase your monthly income..</font></p><p><font style='background-color:#B0AAAA'>2. Would you love to know what amazing drugs are pharmaceutical companies developing?...Now get to know about new medicine from around the globe and prescribe them using your experience</font></p></body></html>");
	res.write("<html><body><p><font style='background-color:#B0AAAA'>For Patients:</font></p><p><font style='background-color:#B0AAAA'>1. Are you too busy to consult a doctor for small diseases like fever,cough & cold,headache?Now you can get expert advice in just a matter of seconds...</font></p><p><font style='background-color:#B0AAAA'>2. Have you ever felt that getting treated by a US Doctor is too costly?Now use medicines from prescriptions rated highly by doctors from across the globe.</font></p></body></html>"); 
	res.write("<html><body><p><font style='background-color:#B0AAAA'>For Medical Representatives:</font></p><p><font style='background-color:#B0AAAA'>1. Is it tiring to visit each doctors chamber & explain to him/her the details of a new medicine?Now,you can do it in seconds...</p><p><font style='background-color:#B0AAAA'>2. What is your domain of doctors who are aware of your new product?Now doctors from around the globe can know about your product & prescribe them,thus increasing your sales..</font></p></body></html>");
	res.write("<html><body><p style='color:#00FF00'><font style='background-color:#B0AAAA'>GuideLines:Please look at the tooltip while filling that particular field.</font></p></body></html>");
	res.write("<html><body><form action='/login' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Login as :</font> <input type='text' title='Enter <doctor> if you are a doctor,<patient> if you are a patient,<medirep> if you are a medical representative,<> for clarity' name='value1'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Health Centre ID:</font> <input type='text' title='Enter the Health Centre ID' name='value2'/></div><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Password:</font> <input type='password' title='Enter your password' name='value3'/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>");
	res.write("<html><body><form action='/register' method='post'><div style='color:#00FF00' align='center'><font style='background-color:#B0AAAA'>Register as :</font> <input type='text' title='Enter <doctor> if you are a doctor,<patient> if you are a patient,<medirep> if you are a medical representative' name='value2'/></div><div style='color:#00FF00' align='center'><input type='submit' value='go'/></div></form></body></html>");
	res.end();
}
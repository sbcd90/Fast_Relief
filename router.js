var url=require('url');
var fs=require('fs');
exports.get=function(req,res){
	req.requrl=url.parse(req.url,true);
	var path=req.requrl.pathname;
	if(/\.(css)$/.test(path)){
		res.writeHead(200,{'Content-type':'text/css'});
		fs.readFile(__dirname+path,'utf8',function(err,data){
			if(err) throw err;
			res.write(data,'utf8');
			res.end();
		});
	}
	else{
		if( path=='/' || path=='/start' ){
			require('./controllers/start').get(req,res);
		}
		else if( path=='/login' ){
			require('./controllers/login').post(req,res);
		}
		else if( path=='/register' ){
			require('./controllers/register').post(req,res);
		}
		else if( path=='/thanks1' ){
			require('./controllers/thanks1').post(req,res);
		}
		else if( path=='/thanks2' ){
			require('./controllers/thanks2').post(req,res);
		}
		else if( path=='/thanks3' ){
			require('./controllers/thanks3').post(req,res);
		}
		else if( path=='/thanks4' ){
			require('./controllers/thanks4').post(req,res);
		}
		else if( path=='/thanks5' ){
			require('./controllers/thanks5').post(req,res);
		}
		else if( path=='/prescription' ){
			require('./controllers/prescription').post(req,res);
		}
		else if( path=='/addmedicine' ){
			require('./controllers/addmedicine').post(req,res);
		}
		else if( path=='/polls' ){
			require('./controllers/polls').post(req,res);
		}
		else if( path=='/medicines' ){
			require('./controllers/medicines').post(req,res);
		}
		else if( path=='/thanks6' ){
			require('./controllers/thanks6').post(req,res);
		}
		else if( path=='/thanks7' ){
			require('./controllers/thanks7').post(req,res);
		}
		else if( path=='/thanks8' ){
			require('./controllers/thanks8').post(req,res);
		}
		else if( path=='/thanks9' ){
			require('./controllers/thanks9').post(req,res);
		}
		else if( path=='/prescribed' ){
			require('./controllers/prescribed').post(req,res);
		}
		else if( path=='/thanks10' ){
			require('./controllers/thanks10').post(req,res);
		}
		else if( path=='/doctorinfo' ){
			require('./controllers/doctorinfo').post(req,res);
		}
		else if( path=='/thanks11' ){
			require('./controllers/thanks11').post(req,res);
		}
		else if( path=='/thanks12' ){
			require('./controllers/thanks12').post(req,res);
		}
	}
}



var express = require('express');
var pg = require('pg');
var app = express();
var client = new pg.Client(process.env.DATABASE_URL || "postgres:///")

client.connect();

app.get('/player2action', function(req, res) {
    var randomnumber = Math.floor(Math.random() * 3) + 1;
    switch (randomnumber) {
        case 1:
            res.send("rock");
			console.log("rock")
			break;
        case 2:
            res.send("paper");
			console.log("paper")
			break;
        case 3:
            res.send("scissors");
			console.log("scissors")
			break;
    }
});

app.get('/getstats', function(req, res) {
	client.query('SELECT type_name,value FROM game_stats order by type_id', function(err, result) {
		  if (err)
		   { console.error(err); res.send("Error " + err); }
		  else
		   { 
				res_html="<html><body><b>"
				for (var i=0, numRows=result.rows.length; i<numRows;i++) {
				res_html+=result.rows[i]["type_name"] + " statistics is " + result.rows[i]["value"] +"</br>";
				}
				res_html+="</b></body></html>";
				res.send(res_html);
				}
		});
});

app.get('/results', function(req, res) {
	console.log(req.query['res']);
	res.send(null);
	if (!isNaN(req.query['res']) && parseInt(req.query['res']) >= 0 && parseInt(req.query['res']) <= 3) {
		query = client.query('update game_stats set value=value+1 where type_id=' + req.query['res']);
		console.log("update completed");
		}
});

app.get("/",function(req, res) {
	res.sendFile(__dirname + "/public/rps.html")
	})
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080);


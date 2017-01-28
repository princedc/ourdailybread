var http = require('http');


var options = {
  host: 'odb.org',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
var body = '';
  console.log("Got response: " + res.statusCode);
  console.log(res.body);
 res.on('data',function(data){
   body += data;
	});
res.on('end', function() {
    console.log(body);
    process(body)
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

//<audio id="audio-player-864512378" src="http://dzxuyknqkmi1e.cloudfront.net/odb/2017/01/odb-01-26-17.mp3" type="audio/mp3" preload="none"></audio>

var process = function(body){
	var x = /<audio\s+id="(.*?)"\s+src="(.*?)"(.*?)><\/audio>/gi;
	var myArray = x.exec(body);
	for( x of myArray){
		console.log(x);
	}
}




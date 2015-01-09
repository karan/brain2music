var neurosky = require('node-neurosky');
var fs = require('fs');

var client = neurosky.createClient({
  appName:'NodeNeuroSky',
  appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
})

client.on('data',function(data){
  fs.appendFile('/tmp/brain-data', data, function (err) {
    if (err) throw err;
  });
});

client.connect();

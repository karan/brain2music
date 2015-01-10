var neurosky = require('./node-neurosky');
var fs = require('fs');

var client = neurosky.createClient({
  appName:'NodeNeuroSky',
  appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
});

var written = 0;

client.on('data',function(data){
  if (data.poorSignalLevel === 0) {
    var data = {'beta_waves': (data.eegPower.lowBeta + data.eegPower.highBeta) / 2}
    fs.appendFile('/tmp/brain-data', JSON.stringify(data) + '\n', function (err) {
      if (err) throw err;
      written++;
      if (written % 5 === 0) {
        console.log('===> Written', written);
      }
    });
  }
});

client.connect();

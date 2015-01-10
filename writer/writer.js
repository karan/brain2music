var neurosky = require('./node-neurosky');
var fs = require('fs');
var T = require("timbre");

var client = neurosky.createClient({
  appName:'NodeNeuroSky',
  appKey:'0fc4141b4b45c675cc8d3a765b8d71c5bde9390'
});

var written = 0;

client.on('data',function(data){
  if (data.poorSignalLevel === 200) {
    console.log(data);
  } else {
    var beta_wave = (data.eegPower.lowBeta + data.eegPower.highBeta) / 2
    T("sin", {freq: beta_wave, mul: 0.5}).play();
  }
});

client.connect();

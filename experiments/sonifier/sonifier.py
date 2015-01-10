import json
import OSC

client = OSC.OSCClient()
client.connect( ( '127.0.0.1', 57110 ) )

def oscgrain( frequency, vol, sustain ):
  msg = OSC.OSCMessage()
  msg.setAddress("s_new")
  msg.append("grain")
  msg.append(-1)
  msg.append(0)
  msg.append(1)
  msg.append("amp")
  msg.append(vol)
  msg.append("freq")
  msg.append(frequency)     #read in data points
  msg.append("sustain")
  msg.append(sustain)
  client.send(msg)

# read and parse brain-data file
with open('/tmp/brain-data') as f:
  lines = f.readlines()

data = [json.loads(line) for line in lines]

beta_waves = []

for d in data:
  avg = (d.get('eegPower').get('highBeta') + d.get('eegPower').get('lowBeta')) / 2
  beta_waves.append(avg)
  oscgrain(avg, 100/(avg), 1.00)

print beta_waves

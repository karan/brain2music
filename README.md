# brain2music

EEG brainwave data to music in realtime.

## What you need

- [Neurosky Mindwave EEG Headset](http://store.neurosky.com/products/mindwave-1)
- Nodejs

## What it is

This is very experimental code that reads your brain wave data from the Mindwave headset and produces sounds (or music) from it.

## How to run it

**Mindwave doesn't work on OS X Yosemite. I realized that after spending an embarrasingly long time trying to make it work. I ended up installing Mountain Lion on a separate partition, which works flawlessly.**

Make sure the headset is paired with your computer, is on and on your head.

```bash
$ cd src
$ npm install node-neurosky timbre
$ node sonifier.js
```

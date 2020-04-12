# node-cron
Simple cron for nodejs
## Install
```
npm i simple-node-cron
```
## How does it work
Cron(pattern, callback)  
pattern - "second minute hour day month"  
callback - callback function
## Example
Print in the console every hour in 30 minutes and 0 seconds
```
const Cron = require('simple-node-cron').Cron;

var cron = new Cron('0 30 * * *', function() {
	console.log('I AM WORKING');
});
cron.start();
```
To stop
```
cron.stop();
```
For single operation
```
const Cron = require('simple-node-cron').Cron;

var cron = new Cron('0 0 12 * *', function() {
	console.log('ONCE');
});
cron.once();
```

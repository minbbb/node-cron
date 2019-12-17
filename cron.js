class Cron{
	constructor(time, func){
		this.reTime = /(.+)\s+(.+)\s+(.+)\s+(.+)\s+(.+)/;
		if(!this.reTime.test(time))
			throw "wrong pattern time";
		this.time = time;
		this.func = func;
	}
	start(){
		var correctTime = function(execReTime, calcTime){
			if((execReTime[5] == "*" || calcTime.getMonth() == parseInt(execReTime[5], 10)) && (execReTime[4] == "*" || calcTime.getDate() == parseInt(execReTime[4], 10)) && (execReTime[3] == "*" || calcTime.getHours() == parseInt(execReTime[3], 10)) && (execReTime[2] == "*" || calcTime.getMinutes() == parseInt(execReTime[2], 10)) && (execReTime[1] == "*" || calcTime.getSeconds() == parseInt(execReTime[1], 10))){
				return true;
			}
			return false;
		}
		var now = new Date();
		var calcTime = new Date();
		var execReTime = this.reTime.exec(this.time);
		calcTime.setMilliseconds(0);
		var toTime = 0;
		while(toTime <= 0){
			while(true){
				calcTime.setSeconds(calcTime.getSeconds() + 1);
				if(correctTime(execReTime, calcTime))
					break;
			}
			toTime = calcTime - now;
		}
		this.timerId = setTimeout(() => {
			this.func();
			this.start();
		}, toTime);
	}
	stop(){
		if(this.timerId != undefined){
			clearTimeout(this.timerId);
		}
	}
}
exports.Cron = Cron;
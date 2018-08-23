  
 // ################################################################
 // ##                                                            ##
 // ##                 __ _   _ __    _ __    ___                 ##
 // ##                / _` | | '_ \  | '_ \  / __|                ##
 // ##               | (_| | | | | | | | | | \__ \                ##
 // ##                \__,_| |_| |_| |_| |_| |___/                ##
 // ##                                                            ##
 // ##                                                            ##
 // ################################################################
 // ##                                                            ##
 // ##    Code by andresbarrones | Visit me on https://anns.es    ##
 // ##                                                            ##
 // ################################################################
   

// Invokes functions as soon as window loads
window.onload = function(){
	time();
	setInterval(function(){
		time();
	}, 1000);
};


// Gets current time and changes html to reflect it
function time(){
	var date = new Date(),
		hours = date.getHours(),
		minutes = date.getMinutes(),
		seconds = date.getSeconds();


	// Invokes function to make sure number has at least two digits
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);

	// Changes the html to match results
	document.getElementsByClassName('hours')[0].innerHTML = hours;
	document.getElementsByClassName('minutes')[0].innerHTML = minutes;
	document.getElementsByClassName('seconds')[0].innerHTML = seconds;
}

// Turns single digit numbers to two digit numbers by placing a zero in front
function addZero (val){
	return (val <= 9) ? ("0" + val) : val;
}

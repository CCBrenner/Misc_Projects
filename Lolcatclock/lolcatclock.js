var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime = -1;
var evening = 18;

// Gettng it to show current time on the page.
var showCurrentTime = function() {

	var clock = document.getElementById('clock');
	
	var currentTime = new Date();
	
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM";
	
	if (hours >= noon) {
		meridian = "PM";
	}

	if (hours > 12) {
		hours -= 12;
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
	
	clock.innerText = clockTime;
}

// Getting the clock to incrememnt on its own and change out messages and pictures.
var updateClock = function() {
	
	var time = new Date().getHours();
	var messageText;
	var image = "normaltime.png"
	
	var lolcatImageJS = document.getElementById('lolcatimage');
	var imageText = document.getElementById('timeEvent');
	
	if (time == partytime)
	{
		image = "partytime.png";
		messageText = "Let's Party!";
	} 
	else if (time == wakeuptime)
	{
		image = "cat1.png";
		messageText = "Rise and shine!";
	}
	else if (time == lunchtime) 
	{
		image = "cat2.png";
		messageText = "Grub Time!";
	}
	else if (time == naptime)
	{
		image = "cat3.png";
		messageText = "Nap time yo.";
	}
	else if (time < noon)
	{
		image = "dbe5f0727b69487016ffd67a6689e75a.png";
		messageText = "Good Morning!";
	}
	else if (time >= noon)
	{
		image = "afternoon_cat.png";
		messageText = "Good Afternoon!";
	}
	else 
	{
		image = "normaltime.png";
		messageText = "Good Evening!";
	}
	
	imageText.innerText = messageText;
	lolcatImage.src = image;
	
	showCurrentTime();
};
updateClock();

// Getting the clock to increment once per second.
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the party time button to work.
var partyButton = document.getElementById('partyTimeButton');

var partyEvent = function()
{
	if (partytime <0)
	{
		partytime = new Date().getHours();
		partyButton.innerText = "Party's Over!";
		partyTimeButton.style.backgroundColor = "#55A";
	}
	else
	{
		partytime = -1;
		partyButton.innerText = "Party Time!";
		partyTimeButton.style.backgroundColor = "#000";
	}
};

partyButton.addEventListener("click", partyEvent);

// Activates Wakeup selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
	wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch Time selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() 
{
	naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener("change", napEvent);
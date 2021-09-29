var billAmt;
var partySize;
var tipAmt;

function calculateTip() {

	//initializes variable values
	var billAmt = document.getElementById('billAmt').value;
	var partySize = document.getElementById('partySize').value;
	var tipPercentage = document.getElementById('tipPercentage').value;

	//accounts for alternate scenarios to successful calculation + calculation
	//final two account for more than one person in splitting tip
	if (billAmt == "" || partySize == "" || tipPercentage == 0) {
		alert("Please fill all three fields.");
		return;
	} else if (partySize == 0) {
		var tipAmt = "Why do you need this calculator bro??"
	} else if (billAmt == 0) {
		var tipAmt = "I want to eat where you're eating!!"
	} else if (partySize > 1) {
		document.getElementById('each').style.display = "block";
		var tipAmt = (billAmt * tipPercentage) / partySize;
	}
	else {
		document.getElementById('each').style.display = "none";
		var tipAmt = (billAmt * tipPercentage) / partySize;
	}

	//tipAmt = Math.round(tipAmt * 100) /100; //could use but found unneccessary

	//rounds and fixes price to two decimal places
	tipAmt = tipAmt.toFixed(2);

	//assigns tip value to element + displays tip amount content
	document.getElementById('output').innerHTML = tipAmt;
	document.getElementById('outputdiv').style.display = "block";
};

//event listener for executing primary function of page
document.getElementById('calculateButton').onclick = function() {
	calculateTip();
};


// Parse the website
let parser = new DOMParser();
let txt = "https://amxhealthcare.blueskymss.com/applyonline/default.aspx?applyform=2&alias=amxhealthcare&locid=3";
let txt2 = "<p content='this is cool'></p><p>How about this?</p>";
let htmlDoc = parser.parseFromString(txt, 'text/html');
console.log(htmlDoc);

// Grab the form from the parsed document
let form = htmlDoc.getElementById("divForm");
console.log(form);

// Insert the form into the DOM
let element = document.getElementById("form");
element.appendChild("This is a test. Woo!");
        
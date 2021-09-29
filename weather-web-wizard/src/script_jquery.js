//I am aware of the violation code in the console
$(document).ready(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lon = String(position.coords.longitude);
            var lat = String(position.coords.latitude);
            $.getJSON("https://fcc-weather-api.glitch.me/api/current?lon=" + lon + "&lat=" + lat, function(json){
                $("#location").text(JSON.stringify(json));    /*<---for viewing JSON*/
                //labels weather jurisdiction
                var locationText = json.name;
                $("#location").text(locationText);
                //loads temperatures
                var tempF = 35;/*Math.round(json.main.temp*9/5+32);*/
                var tempC = Math.round(json.main.temp);
                $("#temp-desc1").html(tempF);
                $("#temp-desc2").html("F");
                $("#temp-desc3").html(tempC);
                $("#temp-desc4").html("C");
                $("#tempB").hide();
                //switches temperature on click
                $("#temp-switch").on('click', function() {
                    $("#tempA").toggle(2000);
                    $("#tempB").toggle(2000);
                });
                //gives icon based on weather description
                $("#weather-icon").html("<img src='" + json.weather[0].icon + "' alt='Weather icon'>")
                //formats background image based on temperature
                if (tempF <= 32) {
                    $(".text-back-format").append().css('background-image', 'url("https://s20.postimg.org/g518snzrh/Code_Pen_Freezing.jpg")');
                } else if (tempF > 32 && tempF <= 78) {
                    $(".text-back-format").append().css('background-image', 'url("https://s20.postimg.org/mvhq24a2l/Code_Pen_Spring.png")');
                } else if (tempF > 78 && tempF <= 95) {
                    $(".text-back-format").append().css('background-image', 'url("https://s20.postimg.org/rhduagg65/Code_Pen_Summer.jpg")');
                } else if (tempF > 95) {
                    $(".text-back-format").append().css('background-image', 'url("https://s20.postimg.org/7mrsoc8od/Code_Pen_Super_Hot_Day.jpg")');
                };
            });
        }); 
    };  
});
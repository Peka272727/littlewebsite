// JavaScript Document// Set the date of the countdown
var countDownDate = new Date("May 1, 2024 15:37:25").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the remaining time
    var distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the element with id="timer"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

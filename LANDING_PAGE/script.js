let countdownDate = new Date("Jan 19, 2020 00:00:00").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();
    let distance = countdownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const Circle_Day = document.getElementById("day");
    const Circle_Hour = document.getElementById("hour");
    const Circle_Minut = document.getElementById("minuts");
    const Circle_Second = document.getElementById("seconds");

    Circle_Day.innerHTML = String(days);
    Circle_Hour.innerHTML = String(hours);
    Circle_Minut.innerHTML = String(minutes);
    Circle_Second.innerHTML = String(seconds);




});


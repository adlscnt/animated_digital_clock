

function displayTime() {
    //new Date object stored in variable "date"
    var date = new Date();

    //getHours method on "date"; gives us the current hours value between 0 and 23
    var hour = date.getHours();

    //getMinutes method on "date"; gives us the current minutes value between 0 and 59
    var min = date.getMinutes();

    //getSeconds method on "date"; gives us the current second value between 0 and 59
    var sec = date.getSeconds();

    //Define a variable called amOrPm and store the string "AM" in it
   // var amOrPm = "AM";

    //If the value for hour is greater than or equal to 12, we will replace the value of amOrPm with "PM"
    //if(hour >= 12)
   // {
       // amOrPm = "PM";
    //}

    //Since we want to show a 12 hour clock, check if the value of hours is greater than 12; if true, subtract 12 with hours
    if(hour > 12)
    {
        hour = hour - 12;
    }

    //Show a leading zero when any of the values for hour, minute, and second becomes a single digit; check if the value of hour is less than 10; if true, concatenate a leading zero
    if(hour < 10)
        hour = "0" + hour;
    if(min < 10)
        min = "0" + min;
    if(sec < 10)
        sec = "0" + sec;

    //Concatenate the full time; get paragraph element with id of "clock" using document.getElementById method, and put the time inside of it
    document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec //+ " " + amOrPm;
}



//Call "setInterval" method and pass the method name, "displayTime" and 1000 milliseconds as parameters
//This will call the displayTime method in one second intervals; every second it will check the time and update the value; ensures the time does not lag behind
setInterval(displayTime, 1000);





//Toggle on/off
function onOffFunction() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Set alarm
function alarmFunction() {
    var x = document.getElementById("clock");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById("zero");
    if (x.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
        
}


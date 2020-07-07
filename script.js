
// This is taking the current date/time from moment.js
function secondUpdater() {
    $(".time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
   
}
setInterval(secondUpdater, 1000)


// This function is updating the colors for the current time of the day
function updateColors() {
    var currentTime = moment().format("HH");
    console.log("currentTime: ", currentTime);
    // console.log(localStorage.getItem);
    var hour = $('.textcolor');
    for (var i = 8; i < 17; i++) {
        if (i < currentTime) {
            hour.addClass("past");
        } else if (i === currentTime) {
            hour.addClass("present");
        } else {
            hour.addClass("future");
        }
    }
}
updateColors()



// This function is loggin our calendar data as well as storing it for when the page is reopened.
var saveBtn = $('.button');
saveBtn.on('click', function () {
   
    var eventId = $(this).attr('id');
    var eventText = $(this).parent().children('textarea').val(); 
    console.log(eventId);
    console.log(eventText);
    var temp = JSON.parse(localStorage.getItem("userData")) || [];
    var userData = {
        time: eventId,
        note: eventText
    }
    temp.push(userData);
    localStorage.setItem("userData",JSON.stringify(temp));
    
});
var temp = JSON.parse(localStorage.getItem("userData"));
for (var i = 0; i < temp.length; i++){
    var time = "description-"+temp[i].time;
    console.log("Text area id: "+time);
    $("#"+time).val(temp[i].note);
    }

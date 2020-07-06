//we need a variable for the current time
var currentTime = moment().hour();

function secondUpdater() {
    $(".time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
   
}
setInterval(secondUpdater, 1000)


//when the page loads. I want to look into local storage. The keys in localstorage will be numbers that refer to an hour of the day. (9 - 18)

//The values in local storage are the descriptions of that hour's task.

//For each key in local storage, update the text-are with an id of "description-{hour}" with that value from local storage.

// function getLocalStorage() {
//     $(".button").each(function (elem) {
//         $(this).parent().siblings().children('.col-md-9').val(localStorage.getItem($(this).attr("class")))

function toStandardTime(militaryTime) {
    militaryTime = militaryTime.split(':');
    if (militaryTime[0].charAt(0) == 1 && militaryTime[0].charAt(1) > 2) {
      return (militaryTime[0] - 12) + ':' + militaryTime[1] + ':' + militaryTime[2] + ' P.M.';
    } else {
      return militaryTime.join(':') + ' A.M.';
    }
  }

for (var i = 8; i < 18; i++) {
    var hour = $('.description' + i);
    if (i < currentTime) {
        hour.addClass("past");
    } else if (i === currentTime) {
        hour.addClass("present");
    } else {
        hour.addClass("future");
    }
}

var saveBtn = $('.button');
saveBtn.on('click', function () {
    // console.log("just clicked save")
    // console.log(this)
    var eventId = $(this).attr('id');
    var eventText = $(this).parent().children('textarea').val(); //this line might need work.
    // console.log("eventId")
    console.log(eventId);
    // console.log("eventText")
    console.log(eventText);
    localStorage.setItem(eventId, eventText);
});



//         // let value = localStorage.getItem(key);
//         // console.log(value);
//         // if (value) {
//         //     $(`#text${key}`).text(value);
//         // }
//     });
// }
// getLocalStorage()


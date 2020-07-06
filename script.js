function secondUpdater() {
    $(".time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    setInterval(secondUpdater, 1000)
}
secondUpdater();

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
    console.log(this)
    var eventId = $(this).attr('id');
    var eventText = $(this).parent().siblings().children('#description').val();
    // console.log(eventId);
    // console.log(eventText);
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


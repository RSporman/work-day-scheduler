function secondUpdater() {
    $(".time").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    setInterval(secondUpdater, 1000)
}
secondUpdater();


function getLocalStorage() {
    $(".button").each(function (elem) {
        $(this).parent().siblings().children('.col-md-9').val(localStorage.getItem($(this).attr("class")));
        // let value = localStorage.getItem(key);
        // console.log(value);
        // if (value) {
        //     $(`#text${key}`).text(value);
        // }
    });
}
getLocalStorage()
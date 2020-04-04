$(document).ready(function () {

    var inputElement;

    //check current hour with moment.js
    //add class 

    setInterval(function () {

        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        $("#currentDay").text(currentTime);
        for (var i = 9; i < 18; i++) {
            if (i === moment().hour()) {
                $("#hour-" + i).removeClass("past present future").addClass("present");
            } else if (i < moment().hour()) {
                $("#hour-" + i).removeClass("past present future").addClass("past");
            } else {
                $("#hour-" + i).removeClass("past present future").addClass("future");
            }

        }

    }, 1000);

    //add click event to button, get user input and save to localstorage

    $(".saveBtn").on("click", function () {

        event.preventDefault();
        inputElement = $(this).siblings("textarea")
        var userInput = inputElement.val();

        var timeBlock = inputElement.attr("id");
        localStorage.setItem(timeBlock, userInput);

    });


    //This for loop is a short cut for 
    // var hourNine = localStorage.getItem("hour-9");
    // $("#hour-9").val(hourNine);
    //get localstorage

    function getLocalStorage() {
        for (var i = 9; i < 18; i++) {
            $("#hour-" + i).val(localStorage.getItem("hour-" + i));
        }
    }
    getLocalStorage();

});
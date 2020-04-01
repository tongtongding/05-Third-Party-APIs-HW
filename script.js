$(document).ready(function(){

    var inputElement;

     //check current hour with moment.js
     //add class 

    setInterval(function(){

        let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
        $("#currentDay").text(currentTime);
        for(var i = 9; i < 18; i++){
            if(i === moment().hour()){
                $("#hour-" + i).removeClass("past present future").addClass("present");
            }else if(i<moment().hour()){
                $("#hour-" + i).removeClass("past present future").addClass("past");
            }else{
                $("#hour-" + i).removeClass("past present future").addClass("future");
            }

        }

    },1000);
    
    //add click event to button, get user input and save to localstorage

    $(".saveBtn").on("click",function(){

        inputElement=$(this).siblings("textarea")
        var userInput = inputElement.val();

        var timeBlock = inputElement.attr("id");
        localStorage.setItem(timeBlock,userInput);
        
    });

    // var hourTen = localStorage.getItem("hour-10");
    // var hourEleven = localStorage.getItem("hour-11");
    // var hourTwelve = localStorage.getItem("hour-12");
    // var hourThirteen = localStorage.getItem("hour-13");
    // var hourFourteen = localStorage.getItem("hour-14");
    // var hourFifteen = localStorage.getItem("hour-15");
    // var hourSixteen = localStorage.getItem("hour-16");
    // var hourSeventeen = localStorage.getItem("hour-17");

    // $("#hour-10").val(hourTen);
    // $("#hour-11").val(hourEleven);
    // $("#hour-12").val(hourTwelve);
    // $("#hour-13").val(hourThirteen);
    // $("#hour-14").val(hourFourteen);
    // $("#hour-15").val(hourFifteen);
    // $("#hour-16").val(hourSixteen);
    // $("#hour-17").val(hourSeventeen);

    //This for loop is a short cut for 
    // var hourNine = localStorage.getItem("hour-9");
    // $("#hour-9").val(hourNine);
    //get localstorage

    function getLocalStorage(){
        for(var i=9;i<18;i++){
            $("#hour-" + i).val(localStorage.getItem("hour-"+i));
         }
    }
    getLocalStorage();

});
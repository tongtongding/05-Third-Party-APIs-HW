$(document).ready(function(){


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
   

//get localstorage
//check current hour with moment.js
//add class 

//add click event to button, get user input and save to localstorage

var inputElement=$(this).siblings("textarea")

$(".saveBtn").on("click",function(){

    
    var userInput = inputElement.val();

    var timeBlock = inputElement.attr("id");
    console.log(timeBlock);
    localStorage.setItem(timeBlock,userInput);
    
});

var localStorage = window.localStorage
var timeBlock=localStorage.getItem(timeBlock);
var userInput=localStorage.getItem(userInput);

function getInput(){
    userInput=timeBlock.value

}












})
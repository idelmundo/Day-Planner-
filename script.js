// 1 Display current Date

// code drill 04 local Storage

// 2 Present timeblock in html via JSON

// 3 figure out how to shade time blocks past present future

// 4 click time block can enter text event 

// 5 save the event 

// 6 when page refresh the s

$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
})
var getLocalStorageData = JSON.parse(localStorage.getItem("descriptionItem"));
var descriptionBox = [];


$("button").on("click", function() {
    event.preventDefault();
    var bigBox = $(this).parent().parent();
    var inputValue = bigBox.find("input").val();
    var inputId = bigBox.find("input").attr("id");
    var descriptionObj = {
        "input-id": inputId,
        "input-value": inputValue
    };
    if (descriptionObj["input-Value"] !== "") {
        descriptionBox.push(descriptionObj);
        localStorage.setItem("descriptionItem", JSON.stringify(descriptionBox));
    }
});
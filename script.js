// 1 Display current Date

// code drill 04 local Storage

// 2 Present timeblock in html via JSON

// 3 figure out how to shade time blocks past present future

// 4 click time block can enter text event 

// 5 save the event 

// 6 when page refresh the s

$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    const slots = $(".slot");
    var currentTime = moment().format("H");
    slots.each((i, e) => {});


    for (let i = 0; i < testData.length; i++) {
        const slotElement = testData[i];
        const slotHour = moment.unix(slotElement.startDate).format("H");
        $("#textI" + slotHour).val(slotElement.description);


    }

    //local storage 
    const getLocalStorageData = testData;
    var getLocalStorageData = JSON.parse(localStorage.getItem("descriptionItem"));
    var descriptionBox = [];

    // if getLocalStroagedata //not empty then save it to descriptionBox.
    // if (getLocalStorageData !== null) {
    //     descriptionBox = getLocalStorageData;
    // }

    // THIS directing button
    $("button").on("click", function() {
        event.preventDefault();
        var bigBox = $(this).parent().parent();

        const theInput = bigBox.find("input");

        var descriptionObj = {
            "input-id": theInput.attr("id"),
            "input-value": theInput.val()
        };
        if (descriptionObj["input-value"] !== "") {
            descriptionBox.push(descriptionObj);
            localStorage.setItem("descriptionItem", JSON.stringify(descriptionBox));
        }
    });
});
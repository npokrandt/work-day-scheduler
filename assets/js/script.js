// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - check
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours of 9am-5pm - check
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future - check


// WHEN I click into a timeblock
// THEN I can enter an event - ??
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page 
// THEN the saved events persist

function addDateAppendage(today){
  if (today[today.length - 1] == 1){
    console.log("test")
    today = today + "st"
  } else if (today[today.length - 1] == 2){
    today = today + "nd"
  } else if (today[today.length - 1] == 3){
    today = today + "rd"
  } else {
    today = today + "th"
  }
}

$(function () {

  var today = dayjs().format("dddd, MMMM D")

  //determines whether the date ends in "st","nd","rd", of "th"
  addDateAppendage(today)
  
  //updating the date header
  var timeHeader = $('#currentDay')

  timeHeader.text(today)

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //the classes are 'past', 'present' and 'future'
  colorTimeBoxes()

  function colorTimeBoxes(){

    //this will provide the current hour
    var currentHour = dayjs().hour()
    console.log(typeof(currentHour))

    for (var i = 9; i < 18; i++){
      var hourId = JSON.stringify(i)
      var timeBox = $("#hour-" + hourId)

      if (JSON.parse(hourId) < currentHour){
        //console.log(timeBox.attr("id"))
        timeBox.addClass("past")
      } else if (JSON.parse(hourId) === currentHour){
        timeBox.addClass("present")
      } else {
        timeBox.addClass("future")
      }
      //console.log(timeboxtest.attr('id'))
    }
  }
   
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

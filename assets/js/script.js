// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
 
  var today = dayjs().format("dddd, MMMM D")

  //updating the date header
  var timeHeader = $('#currentDay')

  //determines whether the date ends in "st","nd","rd", of "th"
  function addDateAppendage(today){
    if (today[today.length - 1] == 1){     
      today = today + "st"
    } else if (today[today.length - 1] == 2){
      today = today + "nd"
    } else if (today[today.length - 1] == 3){
      today = today + "rd"
    } else {
      today = today + "th"
    }
    return today
  }
  
  timeHeader.text(addDateAppendage(today)) 

  //functions on page startup
  addPreviousEvents()
  colorTimeBoxes()

  function addPreviousEvents(){
    for (var i = 9; i < 18; i++){
      var id = "hour-" + i
      var textArea = $("#hour-" + i).children("textarea")
      var data = localStorage.getItem(id)
      if (data != null){
        textArea.val(data) 
      }     
    }
  }

  function colorTimeBoxes(){
    
    //this will provide the current hour
    var currentHour = dayjs().hour()

    for (var i = 9; i < 18; i++){
      var hourId = i
      //for getting each element by id
      var hourIdStr = JSON.stringify(i)
      var timeBox = $("#hour-" + hourIdStr)

      if (hourId < currentHour){
        timeBox.addClass("past")
      } else if (hourId === currentHour){
        timeBox.addClass("present")
      } else {
        timeBox.addClass("future")
      }
      //console.log(timeboxtest.attr('id'))
    }
  }
  
  function saveData(){
    var parentDiv = $(this).parents("div.row")
    var id = parentDiv.attr("id")
    var eventToBeSaved = parentDiv.children("textarea").val()
    if (eventToBeSaved != ""){
      localStorage.setItem(id, eventToBeSaved)
    }
  }

  //click event for saving data
  $(".btn").click(saveData)
});

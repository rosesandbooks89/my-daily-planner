// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //variables
  var saveBtn9 = document.getElementById("hour-9");
  var saveBtn10 = document.getElementById("hour-10");
  var saveBtn11 = document.getElementById("hour-11");
  var saveBtn12 = document.getElementById("hour-12");
  var saveBtn13 = document.getElementById("hour-13");
  var saveBtn14 = document.getElementById("hour-14");
  var saveBtn15 = document.getElementById("hour-15");
  var saveBtn16 = document.getElementById("hour-16");
  var saveBtn17 = document.getElementById("hour-17");

  //event listeners

  saveBtn9.addEventListener('click', () => {
  
      document.getElementById('hour9Input').value
    ;
  })
  saveBtn10.addEventListener('click', () => {
    
      document.getElementById('hour10Input').value
    ;
  })
  saveBtn11.addEventListener('click', () => {
      document.getElementById('hour11Input').value
    ;
  })
  saveBtn12.addEventListener('click', () => {
      document.getElementById('hour12Input').value
    ;
  })
  saveBtn13.addEventListener('click', () => {
      document.getElementById('hour13Input').value
    ;
  })
  saveBtn14.addEventListener('click', () => {
  
      document.getElementById('hour14Input').value
    ;
  })
  saveBtn15.addEventListener('click', () => {
    
      document.getElementById('hour15Input').value
  ;
  })
  saveBtn16.addEventListener('click', () => {
      document.getElementById('hour16Input').value
    ;
  })
  saveBtn17.addEventListener('click', () => {
      document.getElementById('hour17Input').value;
  })

  //current day
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to display the current date in the header of the page.
  for (var i = 9; i < 18; i++) {

    if (i < dayjs().format("H")) {
      $(`#hour-${i}`).addClass("past");
    } else if (i > dayjs().format("H")) $(`#hour-${i}`).addClass("future");
    else if (i >= dayjs().format("H")) $(`#hour-${i}`).addClass("present");
  }
});

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

$('.time-block .saveBtn9').on('click', function() {
  var textarea = $(this).closest('.time-block').find('textarea');
  var key = $(this).closest('.time-block').attr('id');
  var value = textarea.val();
  localStorage.setItem(key, value);
});

$(document).ready(function() {
  $('.time-block textarea').each(function() {
    var key = $(this).closest('.time-block').attr('id');
    var value = localStorage.getItem(key);
    if (value) {
      $(this).val(value);
    }
  });
});
//
//extract id value, then the hour value
//substring value from javascrips

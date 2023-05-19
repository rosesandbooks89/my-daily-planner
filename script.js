$(function () {
  //current day
  // code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM D, YYYY"));

  for (var i = 9; i < 18; i++) {
    if (i < dayjs().format("H")) {
      $(`#hour-${i}`).addClass("past");
    } else if (i > dayjs().format("H")) $(`#hour-${i}`).addClass("future");
        else if (i >= dayjs().format("H")) $(`#hour-${i}`).addClass("present");
          else if (i <= dayjs().format("H")) $(`#hour-${i}`).addClass("future");
  }
});
//code for local storage saving
$(".time-block .saveBtn").on("click", function () {
  var textarea = $(this).closest(".time-block").find("textarea");
  var key = $(this).closest(".time-block").attr("id");
  var value = textarea.val();
  localStorage.setItem(key, value);
});
//code for recalling local storage
$(document).ready(function () {
  $(".time-block textarea").each(function () {
    var key = $(this).closest(".time-block").attr("id");
    var value = localStorage.getItem(key);
    if (value) {
      $(this).val(value);
    }
  });
});
//
//extract id value, then the hour value
//substring value from javascrips

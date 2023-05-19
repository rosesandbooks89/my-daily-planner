$(function () {
  // code to display the current date in the header of the page.
  $("#currentDay").text(dayjs().format("MMMM D, YYYY h:mm A"));

  for (var i = 9; i < 18; i++) {
    if (i < dayjs().format("H")) {
      $(`#hour-${i}`).children(".hour").addClass("past");
    } else if (i > dayjs().format("H")) $(`#hour-${i}`).addClass("future");
    else if (i >= dayjs().format("H")) $(`#hour-${i}`).addClass("present");
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

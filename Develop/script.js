// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour13 = $('#hour-13');
  var hour14 = $('#hour-14');
  var hour15 = $('#hour-15');
  var hour16 = $('#hour-16');
  var hour17 = $('#hour-17');
  var currentDayEl = $('#currentDay');
  var currentDay = dayjs().format('dddd, MMMM DD');
  var saveButton = $('.saveBtn');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButton.click(function() {
    if(this.id == 'btn9'){
      localStorage.setItem('hour9txt', hour9txt.value);
    } else if (this.id == 'btn10') {
      localStorage.setItem('hour10txt', hour10txt.value);
    } else if (this.id == 'btn11') {
      localStorage.setItem('hour11txt', hour11txt.value);
    } else if (this.id == 'btn12') {
      localStorage.setItem('hour12txt', hour12txt.value);
    } else if (this.id == 'btn13') {
      localStorage.setItem('hour13txt', hour13txt.value);
    } else if (this.id == 'btn14') {
      localStorage.setItem('hour14txt', hour14txt.value);
    } else if (this.id == 'btn15') {
      localStorage.setItem('hour15txt', hour15txt.value);
    } else if (this.id == 'btn16') {
      localStorage.setItem('hour16txt', hour16txt.value);
    } else if (this.id == 'btn17') {
      localStorage.setItem('hour17txt', hour17txt.value);
    }
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentTime = dayjs().format('H');

  if(currentTime < 9) {
    hour9.addClass('future');
    hour10.addClass('future');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 9) {
    hour9.removeClass('future');
    hour9.addClass('present');
    hour10.addClass('future');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 10) {
    hour9.removeClass('present');
    hour9.addClass('past');
    hour10.removeClass('future');
    hour10.addClass('present');
    hour11.addClass('future');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 11) {
    hour9.addClass('past');
    hour10.removeClass('present');
    hour10.addClass('past');
    hour11.removeClass('future');
    hour11.addClass('present');
    hour12.addClass('future');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 12) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.removeClass('present');
    hour11.addClass('past');
    hour12.removeClass('future');
    hour12.addClass('present');
    hour13.addClass('future');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 13) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.removeClass('present');
    hour12.addClass('past');
    hour13.removeClass('future');
    hour13.addClass('present');
    hour14.addClass('future');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 14) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.removeClass('present');
    hour13.addClass('past');
    hour14.removeClass('future');
    hour14.addClass('present');
    hour15.addClass('future');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 15) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.removeClass('present');
    hour14.addClass('past');
    hour15.removeClass('future');
    hour15.addClass('present');
    hour16.addClass('future');
    hour17.addClass('future');
  } else if(currentTime == 16) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.removeClass('present');
    hour15.addClass('past');
    hour16.removeClass('future');
    hour16.addClass('present');
    hour17.addClass('future');
  } else if(currentTime == 17) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.removeClass('present');
    hour16.addClass('past');
    hour17.removeClass('future');
    hour17.addClass('present');
  } else if(currentTime > 17) {
    hour9.addClass('past');
    hour10.addClass('past');
    hour11.addClass('past');
    hour12.addClass('past');
    hour13.addClass('past');
    hour14.addClass('past');
    hour15.addClass('past');
    hour16.addClass('past');
    hour17.removeClass('present');
    hour17.addClass('past');
  }


  // The below code gets any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
render();

function render() {
  var text9 = localStorage.getItem('hour9txt');
  var text10 = localStorage.getItem('hour10txt');
  var text11 = localStorage.getItem('hour11txt');
  var text12 = localStorage.getItem('hour12txt');
  var text13 = localStorage.getItem('hour13txt');
  var text14 = localStorage.getItem('hour14txt');
  var text15 = localStorage.getItem('hour15txt');
  var text16 = localStorage.getItem('hour16txt');
  var text17 = localStorage.getItem('hour17txt');

  $("#hour9txt").text(text9);
  $("#hour10txt").text(text10);
  $("#hour11txt").text(text11);
  $("#hour12txt").text(text12);
  $("#hour13txt").text(text13);
  $("#hour14txt").text(text14);
  $("#hour15txt").text(text15);
  $("#hour16txt").text(text16);
  $("#hour17txt").text(text17);
}
  
  // The below code displays the current date in the header of the page.
  currentDayEl.text(currentDay);
  
});

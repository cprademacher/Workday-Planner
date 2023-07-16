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
      if (hour9txt.value == '') {
        alert('Nothing to save');
      } else {
        localStorage.setItem('hour9txt', hour9txt.value);
      }
    } else if (this.id == 'btn10') {
      if (hour10txt.value == '') {
        alert('Nothing to save');
      } else {
        localStorage.setItem('hour10txt', hour10txt.value);
      }
    } else if (this.id == 'btn11') {
      if (hour11txt.value == '') {
        alert('Nothing to save');
      } else {
        localStorage.setItem('hour11txt', hour11txt.value);
      }
    } else if (this.id == 'btn12') {
      if (hour12txt.value == '') {
        alert('Nothing to save');
      } else {
        localStorage.setItem('hour12txt', hour12txt.value);
      }
    } else if (this.id == 'btn13') {
      if (hour13txt.value == '') {
        alert('Nothing to save');
      } else {
        localStorage.setItem('hour13txt', hour13txt.value);
      }
    } else if (this.id == 'btn14') {
      hour14.attr(
        'style',
        'background-color: black'
      )
    } else if (this.id == 'btn15') {
      hour15.attr(
        'style',
        'background-color: gray'
      )
    } else if (this.id == 'btn16') {
      hour16.attr(
        'style',
        'background-color: teal'
      )
    } else if (this.id == 'btn17') {
      hour17.attr(
        'style',
        'background-color: maroon'
      )
    }
  });
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
render();

function render() {
  var text = localStorage.getItem('hour9txt');

  $("#hour9txt").text(text);
}
  
  //
  // TODO: Add code to display the current date in the header of the page.
  currentDayEl.text(currentDay);
});

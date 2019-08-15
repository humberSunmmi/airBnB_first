$(function() {
            $("#datepicker1").datepicker();
            $("#datepicker2").datepicker();
         
        });


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});

const validateDate = () => {
  let date1= Date.parse($("#datepicker1").val());
  let date2= Date.parse($("#datepicker2").val());
  if(isNaN(date1) || isNaN(date2)) {
    alert("You must fill all fields!!")
  } else {
    if(date1 > date2) {
      alert("Your initial date cannot be bigger than your final date!")
    }else {
      window.location.href="bookingpage_rooms.html";
    }
  } 
}



//$(document).ready(function() {
//
//  // Check for click events on the navbar burger icon
//  $(".navbar-burger").click(function() {
//
//      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//      $(".navbar-burger").toggleClass("is-active");
//      $(".navbar-menu").toggleClass("is-active");
//
//  });
//});
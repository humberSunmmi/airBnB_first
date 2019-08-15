// 1. press search button
const searchingButtonPressed = () => {
  // get things from input box   (done)
  // if boxes are empty:
  // --- show error message
  // else
  // -- show email confirmation
  
  let date1 = document.getElementById("datepicker1").value
  
  let date2 = document.getElementById("datepicker2").value
  
//  console.log("Checkin: " + date1)
//  console.log("Checkout: " + date2)
  
  // check if boxes are emtpy:
  if (date1 == "" || date2 == "" ) {
    alert("Sorry, please fill in dates")
  } else {
      let newdate1= Date.parse(date1);
      let newdate2= Date.parse(date2);
//   console.log(newdate1, newdate2)
    if(newdate1 > newdate2) {
   // show message
      alert("Your initial date cannot be bigger than your final date!")
    } else {
      let currentDate = new Date().getTime();
      if (newdate1 < currentDate || newdate2 < currentDate) {
        alert("No date can be smaller than today's date!")
    } else {
    // show alert box
    // confrimation message
    // ----------------------
    // get email out of localstorage
    // lead to next page to book 
//    alert("Your room is booked! Email confirmation sent to: " + x)
//    window.location.href = "bookingpage_rooms.html" 
     alert("Going to next page!")
     window.open("bookingpage_rooms.html");  
  }
 }
}
}
document.getElementById("searchingButton").addEventListener("click", searchingButtonPressed)
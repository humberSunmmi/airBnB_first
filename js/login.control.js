$(function(){
if(localStorage.getItem('emailAddress')=== null || localStorage.getItem('emailAddress')=== "" ){
          $(".login").show()
          $(".logout").hide() 
         } else {
          $(".login").hide()
          $(".logout").show()  
         }
  
  $("body").delegate("#logout_btn", "click", function(){
       localStorage.setItem("emailAddress", "")
  window.location.href= "index.html";
  });
});
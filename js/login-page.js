const registeredUsers = localStorage.getItem("listOfusers") ?
      JSON.parse(localStorage.getItem("listOfusers")) : [] ;

const loginUser = () => {
  // 1. get email/password from login page
  let email = document.getElementById("email").value
  
  let password = document.getElementById("password").value
  
  console.log(registeredUsers)
  console.log(email)
  console.log(password)
  
  let emailCorrect = false;
  let passCorrect = false;
  
  registeredUsers.forEach(function(obj) {
    if(obj.email === email) {
      emailCorrect = true
    if(obj.password === password) {
      passCorrect = true
      return;
    }
   }
  });
     if(emailCorrect) {
    if(passCorrect){
    alert("CORRECT! going to next page!")
    localStorage.setItem("emailAddress", email)    
    window.location.href="index.html"
  } else {
    alert("Password is wrooooong!!!")
  }
  } else {
    alert("Email unexistent")
  }
  }
  
  
  // 2. check if email/password is correct
  // 3. if correct, 
  // a) save email to local storage
  // b) send user to next page
  //  alert("CORRECT! going to next page!")
  //  window.location.href="index.html"
  // 4. if wrong, show error message
  //  alert("WRONG");
  //  document.getElementById("results").innerHTML =   //      "Sorry, wrong username or password."   


const insertUser = () => {
   let email = document.getElementById("email").value
   let password = document.getElementById("password").value
   registeredUsers.push({'email' : email, 'password' : password});
   localStorage.setItem('listOfusers', JSON.stringify(registeredUsers))
  console.log(registeredUsers);
  alert("You were sign up successfully!")
  
}


document.getElementById("loginButton").addEventListener("click", loginUser)
document.getElementById("signUpBtn").addEventListener("click", insertUser)



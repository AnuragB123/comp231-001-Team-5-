//Validates the Sign in Account
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var userType = document.getElementById("userType").value
    //Temporary, will figure out how to get this from a database
    if ( username == "test" && password == "test"){
      //Logged in successfully
      alert ("Login successfully");
      //Will re-direct to a Application Home Page
      return false;
    }
    //Log in unsuccessfully
    else{
        alert("Wrong username and password");
    }
}

//Goes to the Sign up page
function validate_SignUp()
    {
      window.location = "signUp.html"; // Redirecting to other page.
      return false;
    }
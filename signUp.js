function validate(){
    //Later will validate using regex pattern for email and password
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "" && email == "" && password == "")
    {
        alert("Please Enter all the Information")
    }
    //All fields filled
    else
    {
        alert("Successfully logged in");
        //Redirect to Sign in page
    }
    
}

function validate_SignIn(){
    window.location = "signIn.html"; // Goes to the Sign - in page
}
//Update Profile Information
function update_Profile()
{
        document.getElementById("h_name").innerHTML = document.getElementById("fullName").value;
        document.getElementById("h_email").innerHTML = document.getElementById("email").value;
        document.getElementById("h_password").innerHTML = document.getElementById("password").value;
        document.getElementById("h_userType").innerHTML = document.getElementById("userType").value;
}    

//Sign Out the User, Goes back to the Sign In Page
function signOut()
{
      window.location = "signIn.html"; // Redirecting to other page.
}

//Cancels the editing and goes back to Home Screen
function cancel()
{
    window.location = "homeScreen.html"; // Redirecting to other page.
}
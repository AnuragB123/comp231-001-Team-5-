function update_Profile()
{
        document.getElementById("h_name").innerHTML = document.getElementById("fullName").value;
        document.getElementById("h_email").innerHTML = document.getElementById("email").value;
        document.getElementById("h_phone").innerHTML = document.getElementById("phone").value;
        document.getElementById("h_status").innerHTML = document.getElementById("status").value;
}    
function signOut()
    {
      window.location = "signIn.html"; // Redirecting to other page.
      return false;
    }
function cancel()
    {
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("status").value = "";
        return false;
    }
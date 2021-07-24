//Function to show the Edit Details Account form
function editAccount() {
    var editAccount = document.getElementById("editForm");
    if (editAccount.style.display === "none")
    {
        editAccount.style.display = "block";
    } else {
        editAccount.style.display = "none";
    }
}

//Function to allow users to update information
function updateAccount() {

    var userName  = document.getElementById("username").value;
    document.getElementById("UserName").innerHTML = userName;

    var email = document.getElementById("email").value;
    document.getElementById("Email").innerHTML = email;

    var password = document.getElementById("password").value;
    document.getElementById("Password").innerHTML = password;

}

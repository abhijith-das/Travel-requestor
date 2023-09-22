function validate() {
    //get username and password
    userName = document.getElementById("userName").value;
    password = document.getElementById("pass").value;

    console.log(userName);
    console.log(password);
    //userName validation
    if (userName == "") {
        userNameError.textContent = 'Username is required';
    } else {
        userNameError.textContent = '';
    }
    //password length validation
    if (password.length < 5) {
        passError.textContent = 'Password should be more than 4 characters';
        isValid = false;

    } else {
        passError.textContent = '';
    }
    //password validation for admin
    if (userName == "admin" && password == "admin123") {
        //alert("Admin Login Successful");
        window.location = "Admin.html";
        // return false;

        //password validation for user
    } else if (userName == "user" && password == "12345") {
        //alert("User Login Successful");
        window.location = "User.html";
        // return false;
    } else {
        loginError.textContent = 'Invalid Username or Password';
    }

}

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() { null };
function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() { null };

function LogOut() {
    window.location = "Login.html";
}
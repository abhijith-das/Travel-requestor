document.addEventListener("DOMContentLoaded", function() {
    const clickableRows = document.querySelectorAll(".clickable-row");

    clickableRows.forEach(function(row) {
        row.addEventListener("click", function() {
            const url = row.getAttribute("data-href");
            if (url) {
                window.location.href = url;
            }
        });
    });
});

function LogOut() {
    window.location = "Login.html";
}

function preventBack() {
    window.history.forward();
}
setTimeout("preventBack()", 0);
window.onunload = function() { null };
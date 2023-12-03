var delay = 500;

function toggleNav() {
    const element = document.getElementById("sideNav");
    const element1 = document.getElementById("navLinks");
    if (element.className == "closeNav") {
        element.className = "openNav";
        setTimeout(function() {
            element1.className = "navLinks-open";
        }, delay);
    } else {
        element.className = "closeNav";
        element1.className = "navLinks-close";
    }
}
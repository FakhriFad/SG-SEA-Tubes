var delay = 500;

function toggleNav() {
    const element = document.getElementById("nav");
    if (element.className == "closeNav") {
        element.className = "openNav";
    } else {
        element.className = "closeNav";
    }
}

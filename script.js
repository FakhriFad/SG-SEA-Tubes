function toggleNav() {
    const element = document.getElementById("sideNav");
    if (element.className == "closeNav") {
        element.className = "openNav";
    } else {
        element.className = "closeNav";
    }
}
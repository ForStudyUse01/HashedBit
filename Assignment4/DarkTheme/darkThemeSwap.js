function swapTheme() {
    let box = document.getElementById("app");
    let btn = document.getElementById("swap");
 
    box.classList.toggle("day");
    box.classList.toggle("night");
 
    btn.classList.toggle("button_day");
    btn.classList.toggle("button_night");
}
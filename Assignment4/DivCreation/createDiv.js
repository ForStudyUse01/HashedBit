//Write your code here
function createDiv(width, height, text) {
    var box = document.createElement("div");
 
    box.style.width = width + "px";
    box.style.height = height + "px";
 
    box.innerText = text;
 
    var parent = document.getElementById("container");
    parent.appendChild(box);
   
}
 
 
// Do not change this code
Window.createDiv = createDiv;
createDiv(200, 100, "Hello World");
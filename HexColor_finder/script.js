const button = document.querySelector("button");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
const hexColor = document.querySelector("span");

function randomcolor(){
    var letters = '0123456789ABCDEF';
    var color = '#';

    for(var i =0 ;i<6;i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
 
button.addEventListener("click",changeColor);

function changeColor(){
    var c = randomcolor();
    body.style.backgroundColor=c;
    heading.style.backgroundColor=c;
    hexColor.innerHTML=c;
}
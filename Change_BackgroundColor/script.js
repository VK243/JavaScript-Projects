const button = document.querySelector("#button");
const body = document.querySelector("body");

//change the background colour on refresh
body.style.backgroundColor=randomColour();

//random colour generating function
function randomColour(){
    var letters = '0123456789ABCDEF';
    var color ='#';
    for(var i=0 ; i<6 ;i++){
        color += letters[Math.floor(Math.random()*16)]; 
    }
    return color;
}

//click event listener
button.addEventListener("click",changeColor);

//changing background colour function
function changeColor(){
    var colour = randomColour();
    body.style.backgroundColor=colour;
}
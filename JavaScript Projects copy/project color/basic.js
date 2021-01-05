// A random color generator
const color_button  = document.querySelector('.color_button');
const body_background = document.querySelector('body');
const colors = ['yellow','red','green']

color_button.addEventListener('click', changeColor);

function changeColor (){
    let random = Math.floor(Math.random()*colors.length)
    body_background.style.backgroundColor = colors[random];
}
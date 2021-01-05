const color_button = document.querySelector('.color_button');
const hex_color = document.querySelector('.hexcolor');
const body_background = document.querySelector('body');
const hex = document.querySelector('.hex');
const hex_choice = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

color_button.addEventListener('click', make_hex);

function make_hex(){
    let hexcol = '#';
    for(let i = 0; i<6;i++){
        let random = Math.floor(Math.random() * hex_choice.length);
        hexcol += hex_choice[random];
        console.log(hexcol);
    }
    body_background.style.backgroundColor = hexcol;
    hex.innerHTML = hexcol;
}

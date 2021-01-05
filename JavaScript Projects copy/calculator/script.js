const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('#screen');
const equals = document.querySelector('#equal');
const clear = document.querySelector('#clear');

equals.addEventListener('click', compute);
clear.addEventListener('click', clear_screen);

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let number = buttons[i].getAttribute('data-num');
        screen.value += number;
    })
}
console.log(screen.value);
function compute(){
    let result = eval(screen.value);
    screen.value = result;
}

function clear_screen(){
    screen.value ='';
}
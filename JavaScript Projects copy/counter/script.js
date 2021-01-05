const lower = document.querySelector('#lower');
const add = document.querySelector('#add');
const number = document.querySelector('#number');

lower.addEventListener('click', lower_num);
add.addEventListener('click', add_num);
let counter = 0

function lower_num(){
    counter--;
    number.innerHTML = counter;
}

function add_num(){
    counter++;
    number.innerHTML = counter;
}
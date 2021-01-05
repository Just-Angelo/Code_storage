const background = document.querySelector('#backgrounds');
const next = document.querySelector('#next');
const previous = document.querySelector('#prev');

let counter = 1;

next.addEventListener('click', next_slide);
previous.addEventListener('click', prev_slide);

function next_slide(){
    if (counter == 6){
        counter = 1;
    }
    else{
        counter++;
    }
    background.style.backgroundImage = 'url(pic_'+ counter + '.jpg)';
}

function prev_slide(){
    if (counter == 1){
        counter = 6;
    }
    else{
        counter--;
    }
    background.style.backgroundImage = 'url(pic_'+ counter + '.jpg)';
}
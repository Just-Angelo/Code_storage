const quotes =[
    {
        name: 'Vince Lombardi',
        quote: 'Winners never quit and quitters never win'
    },
    {
        name: 'Abraham Lincoln',
        quote: "I'm a success today because I had a friend who believed in me and I didnt't have the heart to let him down."
    },
    {
        name: 'Dale Carnegie',
        quote: 'Remember, today is the tomorrow you were worried about yesterday'
    },
    {
        name: 'George Orwell',
        quote:'Who controls the past controls the future. Who controls the present controls the past.'
    },
    {
        name: 'Warren Buffet',
        quote: 'Price is what you pay. Value is what you get.'
    }
]

const quote = document.querySelector('#quote');
const a_quote = document.querySelector('#quoteAuthor');
const display_quote = document.querySelector('#d_quote');

display_quote.addEventListener('click', quote_displayer);

function quote_displayer() {
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote;
    a_quote.innerHTML = quotes[number].name;
}

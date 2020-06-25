const quotes = [
    {author:'Michael Coman', quote:'The purpose of our lives is to be happy'},
    {author:'Fara Gilwell', quote:'Life is what happens when you’re busy making other plans'},
    {author:'Vara Farell', quote:'Get busy living or get busy dying'},
    {author:'Jerry Gilbert', quote:'You only live once, but if you do it right, once is enough'},
    {author:'Michael Owen', quote:'Many of life’s failures are people who did not realize how close they were to success when they gave up'},
    {author:'Cristiano Ronaldo', quote:'If you want to live a happy life, tie it to a goal, not to people or things'},
    {author:'Lionel Messi', quote:'Money and success don’t change people; they merely amplify what is already there'},
];

let button = document.querySelector('#generate-btn');

button.addEventListener('click', generateQuote);

function generateQuote() {
    let index = quotes[Math.floor(Math.random() * quotes.length)];

    document.querySelector('#quote').textContent = index.quote;

    document.querySelector('.quote-author').textContent = index.author;
}



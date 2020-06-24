const button = document.querySelector('#button');

const  body = document.querySelector('body');

const symbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

const header = document.querySelector('#header');
button.addEventListener('click', changeBackground);

function changeBackground() {
    let output = '#';
    for (let i=0; i<6; i++){
        let index = symbols[Math.floor(Math.random() * symbols.length)];
        output += index;
    }

    body.style.backgroundColor = output;
    header.textContent = 'HEX COLOR: ' + output;
}


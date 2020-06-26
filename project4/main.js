const form = document.querySelector('#message-form');

form.addEventListener('submit', deliverMessage);

function deliverMessage(e) {
    e.preventDefault();

    let input = document.querySelector('#message').value;
    let message = document.querySelector('.message-content');

    if (input !== ''){
        message.textContent = input;
        form.reset();
    }
    else if (input === ''){
        document.querySelector('.feedback').style.display = 'block';
        setTimeout(function () {
            document.querySelector('.feedback').style.display = 'none';
        }, 2000);
    }

}


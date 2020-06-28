const img = document.querySelector('.img-container');

let buttons = document.querySelectorAll('.btn');

let count = 0;

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.classList.contains('btn-right')) {
            count++;
            // img.style.backgroundImage = `url(img/contBcg-${count}.jpeg)`;
            // img.style.backgroundImage = `url(${images[count]})`;
            if (!images[count]) {
                count = 0;
                // count++;
                // img.style.backgroundImage = `url(${images[count]})`;
            }
        img.style.backgroundImage = `url(${images[count]})`;

        } else if (button.classList.contains('btn-left')) {
            count--;
            // img.style.backgroundImage = `url(${images[count]})`;
            if (!images[count]) {
                count = images.length-1;
                // count--;
                // img.style.backgroundImage = `url(${images[count]})`;
            }
            img.style.backgroundImage = `url(${images[count]})`;

        }

    });

});

const images = ['img/contBcg-0.jpeg', 'img/contBcg-1.jpeg', 'img/contBcg-2.jpeg', 'img/contBcg-3.jpeg', 'img/contBcg-4.jpeg'];


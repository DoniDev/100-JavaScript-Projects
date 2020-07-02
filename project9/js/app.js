// images
const images = document.querySelectorAll('.store-img');

// modal container
const div = document.querySelector('.lightbox-container')

// for closing
const close = document.querySelector('.lightbox-close');

// buttons for right and left
const buttons = document.querySelectorAll('.lightbox-control');

const item = document.querySelector('.lightbox-item');

let imageList = [];
let imageCounter = 0;

// adding all images address to a list
images.forEach(function (image){
    imageList.push(image.src)
})


images.forEach(function (image){
    image.addEventListener('click', function (e) {
        div.classList.add('show')
        imageCounter = imageList.indexOf(image);
        item.style.backgroundImage = `url(${image.src})`

        buttons.forEach(function (button){
            button.addEventListener('click', function (e){
                if (this.classList.contains('btnRight')){
                    imageCounter++;
                    if (imageCounter >= imageList.length){
                        imageCounter = 0;
                    }
                    item.style.backgroundImage = `url(${imageList[imageCounter]})`
                }
                else if (this.classList.contains('btnLeft')){
                    imageCounter--;
                    if (imageCounter < 0){
                        imageCounter = imageList.length -1;
                    }
                    item.style.backgroundImage = `url(${imageList[imageCounter]})`
                }
            })
        })
        close.addEventListener('click', function () {
            div.classList.remove('show')
        })

    })
})



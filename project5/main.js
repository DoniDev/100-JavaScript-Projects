let number = document.querySelector('#counter');
let buttons=  document.querySelectorAll('.counterBtn');

buttons.forEach(function (button) {
   button.addEventListener('click', function () {
       if (button.classList.contains('nextBtn')){
           number.textContent++;
       }
       else if(button.classList.contains('prevBtn')){
           number.textContent--;
       }

       let value = number.textContent;
       if (value > 0){
           number.style.color = 'green'
       }
       else if(value < 0){
           number.style.color = 'red'
       }
       else{
           number.style.color = '#333333'
       }

   }) 
});


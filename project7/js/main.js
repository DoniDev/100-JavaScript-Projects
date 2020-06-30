let quote1 = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock';
let quote2 = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly';
let quote3 = 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.';
let quote4 = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
let quote5 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?';

const testimonials = [
    {img:'img/customer-0.jpg', author:'Amy', quote: quote1},
    {img:'img/customer-1.jpg', author:'Tom', quote: quote2},
    {img:'img/customer-2.jpg', author:'Sandy', quote: quote3},
    {img:'img/customer-3.jpg', author:'Jane', quote: quote4},
    {img:'img/customer-4.jpg', author:'Vincent', quote: quote5},
];

let btns = document.querySelectorAll('.btn');
let count = -1;

const image = document.getElementById('customer-img');
const name = document.getElementById('customer-name');
const quote = document.getElementById('customer-text');

btns.forEach(function (btn) {
   btn.addEventListener('click', function () {
       if (btn.classList.contains('nextBtn')) {
               count++;
               if(!testimonials[count]){
                   count = 0;
               }
               name.textContent = testimonials[count].author;
               quote.textContent = testimonials[count].quote;
               image.src = testimonials[count].img;
       }


       else if (btn.classList.contains('prevBtn')){
           count--;
           if(!testimonials[count]){
               count= testimonials.length-1
           }
           name.textContent = testimonials[count].author;
           quote.textContent = testimonials[count].quote;
           image.src = testimonials[count].img;

       }
   })
});

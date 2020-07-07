const form = document.querySelector('#tip-form');
const selected = document.querySelector('#input-service');
const feedback = document.querySelector('.feedback');
const loader = document.querySelector('.loader');
const results = document.querySelector('.results');


const services  = [
    {
        value: 1,
        title: 'Great - 20%'
    },
    {
        value: 2,
        title: 'Good - 10%'
    },
    {
        value: 3,
        title: 'Bad - 2%'
    },
]

services.forEach((service) => {
    let option = document.createElement('option')
    option.value  = service.value
    option.text = service.title
    selected.add(option)
})



form.addEventListener('submit', function (e) {
    e.preventDefault();

    const billCost = document.querySelector('#input-z').value;
    const users = document.querySelector('#input-users').value;
    const service = document.querySelector('#input-service').value;
    const tipAmount = document.querySelector('#tip-amount');
    const totalAmount = document.querySelector('#total-amount');
    const personAmount = document.querySelector('#person-amount');



    let isFeedback = false
    if (billCost === '' || billCost === 0){
        feedback.style.display = 'block'
        feedback.innerHTML = '<p>Bill Amount Cannot Be Blank</p>'
        isFeedback = true
    }
    if (users === '' || users === 0){
        feedback.style.display = 'block'
        feedback.innerHTML += '<p>Number Of Users Must Be Greater Than Zero</p>'
        isFeedback = true
    }
    if(service === '0'){
        feedback.style.display = 'block'
        feedback.innerHTML += '<p>You must select a service</p>'
        isFeedback = true
    }

    if(isFeedback)
        setTimeout(function () {
            feedback.style.display = 'none'
            form.reset();
    }, 5000)

    if (!isFeedback){
        loader.style.display = 'block'
        setTimeout(function () {
            loader.style.display = 'none'
        }, 2500)
        setTimeout(function () {
            results.style.display = 'block'
            tipAmount.textContent = billCost * 0.1
            totalAmount.textContent = billCost / users
            personAmount.textContent = service  * 3
        },2500)
        setTimeout(function () {
            results.style.display = 'none'
            form.reset();
        }, 6000)
    }
})


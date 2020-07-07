const input = document.querySelector('.screen');

const values = document.querySelectorAll('.btn');

const equal = document.querySelector('.btn-equal');

const clear = document.querySelector('.btn-clear');

values.forEach((value =>{
    value.addEventListener('click', function () {
        input.value += value.dataset.num
    })

}))

equal.addEventListener('click', function () {
    if (input.value.length === 0){
        input.value = 'Please enter a value'

    }else{
        let result= eval(input.value)
        input.value = result;
    }
})


// things learned

// eval() function















clear.addEventListener('click', function () {
    input.value = ''
})

const buttons = document.querySelectorAll('.filter-btn');

const products = document.querySelectorAll('.store-item')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        products.forEach(function (product) {
            if (button.dataset.filter === 'all'){
                product.style.display = 'block'
            }
            else if (button.dataset.filter === product.dataset.item){
                product.style.display = 'block'
            }
            else{
                product.style.display = 'none'
            }
        })
    })
})

const search = document.getElementById('search-item');

search.addEventListener('keyup', filterItems);

function filterItems(e) {
    var text = e.target.value.toLowerCase();

    Array.from(products).forEach(function (product){
        var itemName = product.dataset.item
        if (itemName.indexOf(text) !== -1){
            product.style.display = 'block';
        }else{
            product.style.display = 'none'
        }
    })

}


//Array.from
// Array.from('foo') ==> ['f', 'o', 'o']

// indexOf
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// expected output: 1


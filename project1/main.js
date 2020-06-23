const colors = ['#eaff7b','#00ffab','#29bdc1','#d84242','#913f92','#51e2f5','#a0d2eb', '#e5eaf5', '#a28089', '#f75990','#00DDFF','#ff1e00','#59ce8f'];

const button = document.querySelector('#button');

button.addEventListener('click',changeBackground);
function changeBackground(e){
    let index = Math.floor(colors.length * Math.random());
    document.body.style.backgroundColor = colors[index];
    console.log(colors[index])
}


// Things I learnt from that changeBackground project

// 1
// Math.floor() => Math.floor(number) get the integer value that is less than or equal to that number
// Math.floor(3.1) => 3
// Math.floor(3.9) => 3
// Math.floor(4)   => 4

// 2
// Math.random() => Math.random() function gets random number in range (0,1) 1 is not included
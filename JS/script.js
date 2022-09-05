// sul click del bottone vengono generati 5 numeri

const playBtn = document.getElementById('init-btn');
const randomNumbers = [];

playBtn.addEventListener('click',
    function () {
        for (let index = 0; index < 5; index++) {
            let number = Math.floor(Math.random() * 100);
            randomNumbers.push(number);
            console.log(number);
            console.log(randomNumbers);
        }
    }
);

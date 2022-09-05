// sul click del bottone vengono generati 5 numeri

const playBtn = document.getElementById('init-btn');
const squareContainer = document.getElementById('squares-container');
let randomNumbers = [];

playBtn.addEventListener('click',
    function () {
        squareContainer.innerHTML = '';

        // ciclo per creare array con 5 numeri random
        for (let index = 0; index < 5; index++) {
            let number = Math.floor(Math.random() * 100);
            randomNumbers.push(number);
            console.log(number);
            console.log(randomNumbers);

            // mando a schermo i numeri
            const square = document.createElement('div');
            square.className = 'nc-num-container';
            square.innerHTML = number;
            squareContainer.append(square);
        }

        setTimeout(removeNumbers, 30 * 1000);
    }
);

// funzione per far scomparire i numeri
function removeNumbers() {
    squareContainer.innerHTML = '';
}



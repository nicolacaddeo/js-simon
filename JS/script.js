// variabili
const playBtn = document.getElementById('init-btn');
const squareContainer = document.getElementById('squares-container');
const checkBtn = document.getElementById('check-nums');
let userNumbers;

// arrays
let userArray = [];
let randomNumbers = [];

playBtn.addEventListener('click',
    function () {
        squareContainer.innerHTML = '';

        // ciclo per creare array con 5 numeri random
        for (let index = 0; index < 5; index++) {
            let number = Math.floor(Math.random() * 100);
            randomNumbers.push(number);

            // mando a schermo i numeri
            const square = document.createElement('div');
            square.className = 'nc-num-container';
            square.innerHTML = number;
            squareContainer.append(square);
        }

        console.log(randomNumbers);
        setTimeout(removeNumbers, 5 * 1000);
        setTimeout(askNumbers, 6 * 1000);
    }
);

checkBtn.addEventListener('click',
    function () {
        checkNumbers(randomNumbers, userArray);
    }
);

// funzione per far scomparire i numeri
function removeNumbers() {
    squareContainer.innerHTML = '';
}

// funzione per chiedere i numeri all'utente
function askNumbers() {
    for (let index = 0; index < 5; index++) {
        userNumbers = parseInt(prompt('Inserisci i numeri che ricordi'));
        userArray.push(userNumbers);
    }
    console.log(userArray);
}

// funzione per controllare i numeri dell'utente
function checkNumbers(arr1, arr2) {
    if (arr1.sort().join('|') === arr2.sort().join('|')) {
        console.log('Hai vinto');
    } else {
        console.log('Hai perso');
    }
}






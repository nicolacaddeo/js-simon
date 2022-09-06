// variabili
const playBtn = document.getElementById('init-btn');
const squareContainer = document.getElementById('squares-container');
const checkBtn = document.getElementById('check-nums');
let userNumbers;
let rightNumbers;


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
        setTimeout(askCheckUserNum, 6 * 1000);
    }
);


function askCheckUserNum() {
    const userArray = askNumbers();
    rightNumbers = 0
    for (let i = 0; i < userArray.length; i++) {
        const userNumber = userArray[i];
        if (randomNumbers.includes(userNumber)) {
            console.log('Hai indovinato il numero', userNumber);
            rightNumbers++
        }
    }
    console.log(`Hai indovinato ${rightNumbers} numeri`);

}

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
    return userArray;
}







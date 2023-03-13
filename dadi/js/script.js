// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// ALERT
alert('Boolean Game')

const button = document.getElementById('button')
button.addEventListener('click', function(){

    // INPUT
    // Generare un numero random da 1 a 6 sia per il giocatore sia per il computer
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;
    const yourNumber = document.getElementById('your-number');
    const pcNumber = document.getElementById('pc-number');
    const finalResult = document.getElementById('result');

    // Stabiliamo il vincitore
    let result
    if (userNumber > computerNumber){
        result = 'Complimenti hai vinto! :)';
    } else if (userNumber < computerNumber) {
        result = 'Peccato hai perso! :(';
    } else {
        result = 'Pareggio, riprova! ;)';
    }
    
    // Stampo il risultato
    console.log(userNumber);
    console.log(computerNumber);
    console.log(result);
    
    yourNumber.innerHTML = `Il tuo numero è ${userNumber}`;
    pcNumber.innerHTML = `Il numero del computer è ${computerNumber}`;
    finalResult.innerHTML = result;
});
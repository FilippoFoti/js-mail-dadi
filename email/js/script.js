// // Chiedi all’utente la sua email,
// // controlla che sia nella lista di chi può accedere,
// // stampa un messaggio appropriato sull’esito del controllo.

// // ALERT
// alert('Boolean Login');

// // Chiedere l'email all'utente
// const arrayEmail = ['filippofoti7@gmail.com', 'alessiolibbi@gmail.com', 'angeloprospero@gmail.com', 'antoniorocco@hotmail.it', 'johndelavega@libero.it', 'hectorperez@gmail.com', 'stefanomartino@hotmail.it'];
// const userEmail = prompt('Se sei già registrato immetti qui la tua e mail');

// // Controllo se fa parte della lista
// let result = 'Email errata, riprova o registrati.';
// for (i = 0; i < arrayEmail.length; i++){
//     if(userEmail === arrayEmail[i]){
//         result = 'Email corretta, stai per entrare nel sito.';
//     }
// };

// // Stampo il risultato
// console.log(arrayEmail);
// console.log(userEmail);
// console.log(result);

// document.getElementById("result").innerHTML = `${result}`;

// VERSIONE IMPUT -------------------------------------------------------------------------------

// // ALERT
alert('Boolean Login');

// Chiedere l'email all'utente
const arrayEmail = ['alessiolibbi@gmail.com', 'angeloprospero@gmail.com', 'antoniorocco@hotmail.it', 'johndelavega@libero.it', 'hectorperez@gmail.com', 'stefanomartino@hotmail.it'];

const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function() {
    const userEmailInput = document.getElementById("user-email");
    const userEmail = userEmailInput.value;

    // Controllo se fa parte della lista
     let result = 'Email errata, riprova o registrati.';
     for (i = 0; i < arrayEmail.length; i++){
         if(userEmail === arrayEmail[i]){
             result = 'Email corretta, stai per entrare nel sito.';
         }
    };

    // Stampo il risultato
    console.log(arrayEmail);
    console.log(userEmail);
    console.log(result);

    document.getElementById("result").innerHTML = `${result}`;

    // Ripulisco i campi di input
    userEmailInput.value = "";

});


// ANNULLA

const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", function() {

    // Prendere il valore del input.
    const userEmailInput = document.getElementById("user-email");
    const userEmail = userEmailInput.value;

    console.log(userEmail);

    // Ripulisco i campi di input
    userEmailInput.value = "";

    document.getElementById("result").innerHTML = '';

});
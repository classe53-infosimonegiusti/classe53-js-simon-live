//creo un array per ospitare i numeri casuali creati
const numeriGenerati = [];

//genero 5 numeri casuali
while (numeriGenerati.length < 5) {
    const numeroCasuale = getRandomNumber(1,100);
    if (!numeriGenerati.includes(numeroCasuale)) {
        numeriGenerati.push(numeroCasuale);
    }
}

//creo un riferimento al tag html che mostri il messaggio e stampo il valore dell'array con i numeri casuali
const elemMessaggio = document.getElementById('messaggio');
elemMessaggio.innerHTML = numeriGenerati;

const ritardo = 3;

//timeout che nasconde i numeri casuali mostrati
setTimeout(resetMessaggio, ritardo * 1000);

//timeout +1 secondo (per compatibilità con Chrome) che richiede i numeri letti
setTimeout(function() {

    //chiedo all'utente di inserire i numeri che ricorda
    const numeriInseriti = getNumeriUtente();
    
    //verifico quali numeri ho indovinato
    const numeriIndovinati = verificaNumeriIndovinati(numeriGenerati, numeriInseriti);

    stampaNumeriIndovinati(numeriIndovinati);


}, (ritardo + 1 ) * 1000);



function stampaNumeriIndovinati(arrayNumeriIndovinati) {

    const qtaNumeriIndovinati = arrayNumeriIndovinati.length;
    let text =  qtaNumeriIndovinati == 1? ' numero':'numeri';
    elemMessaggio.innerHTML = 'Hai indovinato ' + qtaNumeriIndovinati + ' ' + text + ' [' + arrayNumeriIndovinati + ']';
   
}


//la funzione ritorna un array con i numeri indovinati, verificando quali elementi 
//sono presenti in entramby gli array passati come parametro della funzione
function verificaNumeriIndovinati(arrayNumeriGenerati, arrayNumeriInseriti) {

    const indivinati = [];

    for (let i = 0; i < arrayNumeriInseriti.length; i++) {
        if (arrayNumeriGenerati.includes(arrayNumeriInseriti[i])) {
            indivinati.push(arrayNumeriInseriti[i]);
        }
    }

    return indivinati;

}

//creo una funzione che richieda l'inserimento dei 5 numeri che l'utente pensa di ricordare
//e faccio le verifiche del caso sulla correttezza formale dei valori inseriti
// ritorno l'array
function getNumeriUtente() {

    const numeriUtente = [];

    while (numeriUtente.length < 5) {
        const numero = parseInt(prompt('Inserisci un numero'));
        if (!numeriUtente.includes(numero) && !isNaN(numero) && numero <= 100 && numero > 0) {
            numeriUtente.push(numero);
        }
    }

    return numeriUtente;

}

// funzione che nasconde i numeri casuali precedentemente mostrati
function resetMessaggio() {
    elemMessaggio.innerHTML = '';
}

// genera un numero casuale compreso tra min e max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// programma 
// impostare un ascoltatore silenzioso sul bottone
// una volta premuto il bottone il programma andra  a prendere i valori inseriti nelle caselle 
// compiera le operazioni 




// comando usato per dichiarare la costante button element 
const buttonElement = document.querySelector("#pulsante");

// stringa da ricordare a memoria , usata per inserire un controllo continuo sul bottone e si attivera solo se premuto il bottone
buttonElement.addEventListener("click" , 
function()
{   
    // inserito value perchè abbiamo un valore
    const km = document.getElementById("km").value;
    // text.content perchè noi vogliamo prendere il valore del nome
    const nome = document.getElementById("nome").value;
    
    const eta = document.getElementById("eta").value;
    // abbiamo inserito una and perchè vogliamo che tutte le nostre condizioni siano vere per andare avanti e il not fuori perchè andremo avanti qaundo queste condizioni saranno vere
    if(!( km > 0 && eta > 0 && eta < 120 ))
    {
        // comando inserito perchè l'utente ha sbagliato ad inserire i valori e quindi ricarichiamo la pagina
        // se una delle condizioni è sbagliata noi andremo a ricaricare la pagina
        location.reload();
        // interrompe la ricarica e ci permette di ripartire dalla selezione dei dati
        return;


    }
    else
    {
    // dichiarazione degli sconti 
    const sconto_over = Number (40);
    const sconto_under = Number (20);

    // definizioni variabili e calcolo costo tratta
    let Costo_biglietto ;
    let costo_tratta = (km * 0.21);

    // primo snodo della nostra condizione
    if(eta >= 65 ) 
    {
        Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_over)/ 100 ) ));
        // parseFloat viene usato in questo caso insieme ad to.fixed(2) perchè fixed restituisce una stringa con 2 valori decimali e parse lo traforma in numero nuovamente
        Costo_biglietto = parseFloat(Costo_biglietto.toFixed(2));
        document.getElementById("Costo_biglietto").innerHTML = `${Costo_biglietto}€`;
        document.getElementById("tipo-biglietto").innerText = `sconto over`;
        
    }
    // secondo snodo della nostra condizione
    else if(eta <= 17) 
    {
        Costo_biglietto = Number ((costo_tratta - ((costo_tratta * sconto_under)/ 100 ) ));
        // parseFloat viene usato in questo caso insieme ad to.fixed(2) perchè fixed restituisce una stringa con 2 valori decimali e parse lo traforma in numero nuovamente
        Costo_biglietto = parseFloat(Costo_biglietto.toFixed(2));
        document.getElementById("Costo_biglietto").innerHTML = `${Costo_biglietto}€`;
        document.getElementById("tipo-biglietto").innerText = `sconto under`;
    }
    // terzo snodo della nostra condizione
    else
    {
        Costo_biglietto = Number (costo_tratta) ;
        document.getElementById("Costo_biglietto").innerHTML = `${Costo_biglietto}€`;
        document.getElementById("tipo-biglietto").innerText = `standard`;
    }
    console.log(Costo_biglietto)
    document.getElementById("nome").innerText = `${nome}`;
 
    }
    

}
)
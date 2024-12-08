let saldo = 1500; // Saldo iniziale
const pinCorretto = "2001"; // PIN predefinito

// Funzione per aggiornare il saldo visibile nell'HTML
function aggiornaSaldo() {
    document.getElementById("saldo").textContent = saldo;
}

// Funzione per validare il PIN
function validatePin() {
    const pinInserito = document.getElementById("pinInput").value;
    const errore = document.getElementById("error");

    if (pinInserito === pinCorretto) {
        window.location.href='menu.html'
        aggiornaSaldo(); // Aggiorna il saldo visibile
    } else {
        errore.style.display = "block"; // Mostra il messaggio di errore
    }
}

// Funzione per mostrare i dettagli dell'intestatario
function showDetails() {
    alert("Titolare: Michael De Santa\nSaldo attuale: " + saldo + " €");
}

// Funzione per prelevare denaro
function withdraw() {
    const importo = prompt("Inserisci l'importo da prelevare:");
    if (importo === null) return; // Se l'utente annulla, esce dalla funzione

    const valore = parseFloat(importo);
    if (isNaN(valore) || valore <= 0) {
        alert("Errore: inserisci un importo valido.");
        return;
    }

    if (valore > saldo) {
        alert("Errore: saldo insufficiente.");
        return;
    }

    const motivo = prompt("Specificare il motivo del prelievo:");
    if (motivo === null || motivo.trim() === "") {
        alert("Errore: è necessario specificare un motivo per il prelievo.");
        return;
    }

    saldo -= valore; // Aggiorna il saldo
    alert("Hai prelevato " + valore + " € per: " + motivo + ".\nSaldo rimanente: " + saldo + " €.");
    aggiornaSaldo(); // Aggiorna il saldo visibile
}

// Funzione per depositare denaro
function deposit() {
    const importo = prompt("Inserisci l'importo da depositare:");
    if (importo === null) return; // Se l'utente annulla, esce dalla funzione

    const valore = parseFloat(importo);
    if (isNaN(valore) || valore <= 0) {
        alert("Errore: inserisci un importo valido.");
        return;
    }

    saldo += valore; // Aggiorna il saldo
    alert("Hai depositato " + valore + " €. Saldo attuale: " + saldo + " €.");
    aggiornaSaldo(); // Aggiorna il saldo visibile
}

// Funzione per uscire dall'applicazione
function exit() {
    alert("Grazie per aver utilizzato l'ATM Intesa Sanpaolo. Arrivederci!");
    window.location.href='index.html';
}

// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function handleH1() {
    const H1 = document.querySelector("h1");
    const SWITCHH1 = ["K SMARTPHONE - i 5 smartphone più venduti", "QUI VENDIAMO SMARTPHONE PEZZOTTI"];
    H1.textContent === SWITCHH1[0] ? H1.textContent = SWITCHH1[1] : H1.textContent = SWITCHH1[0];
}
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function handleBackground() {
    document.querySelector("main").style.backgroundColor = "#" + Math.round(Math.random() * 999999);
}
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
function handleAddress() {
    const SWITCHADDRESS = ["K Smartphone s.r.l. - Viale dei Dispositivi Guasti, 0 - Nokia 03310 - Snake Forever SF", "K Smartphone s.r.l. - Viale delle Solide Falsità, 0 - Galaxy 21856 - Shred Town ST"];
    const ADDRESS = document.querySelector("address");
    ADDRESS.textContent === SWITCHADDRESS[0] ? ADDRESS.textContent = SWITCHADDRESS[1] : ADDRESS.textContent = SWITCHADDRESS[0];
}
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function handleAddCssClass() {
    const A = document.getElementsByTagName("a");
    for (const LINK of A) {
        !document.getElementsByClassName("linkAmazon") === false ? LINK.classList.toggle("linkAmazon") : LINK.classList.toggle("linkAmazon");
    }
}
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function handleHideImage() {
    const IMGS = document.getElementsByTagName("img")
    for (const IMG of IMGS) {
        !document.getElementsByClassName("imgVisibility") === false ? IMG.classList.toggle("imgVisibility") : IMG.classList.toggle("imgVisibility");
    }
}
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function handlePriceColor() {
    const PRICES = document.getElementsByClassName("price");
    for (const PRICE of PRICES) {
        PRICE.style.color = "#" + Math.round(Math.random() * 999999);
    }
}

// funzione saveReview() che mostra la recensione della textarea nella pagina web review.html
function saveReview() {
    const H4 = document.getElementsByTagName("h4");
    const TEXTAREA = document.getElementsByTagName("textarea");
    let empty = 0;
    for (let i = 0; i < TEXTAREA.length; i++) {
        if (TEXTAREA[i].value !== "") {
            localStorage.setItem("h4", H4[i].textContent);
            localStorage.setItem("textarea", TEXTAREA[i].value);
            open("review.html");
            break;
        } else {
            empty++;
            if (empty === TEXTAREA.length) alert("Non hai inserito nessuna recensione");
        }
    }
}
function getReview() {
    const p = document.getElementsByTagName("p");
    p[0].textContent += localStorage.getItem("h4");
    p[1].textContent += localStorage.getItem("textarea");
    localStorage.clear();
}
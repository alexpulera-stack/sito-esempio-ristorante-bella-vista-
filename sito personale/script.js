const piatti = [
{
        nome: "Spaghetti alle vongole",
        categoria: "Primi",
        descrizione: "Spaghetti con vongole, aglio, olio e prezzemolo.",
        prezzo: 12,
        immagine: "images/spaghetto.jpg"
    },


    {
        nome: "Lasagne al ragù",
        categoria: "Primi",
        descrizione: "Lasagne fatte in casa con ragù e besciamella.",
        prezzo: 13,
        immagine: "images/lasagne.jpeg"
    },

    {
        nome: "Tagliata di manzo",
        categoria: "Secondi",
        descrizione: "Tagliata di manzo con rucola e scaglie di parmigiano.",
        prezzo: 18,
        immagine: "images/tagliata.jpg"
    },
    {
        nome: "Frittura mista di calamari e gamberi",
        categoria: "Secondi",
        descrizione: "Croccante frittura di anelli di calamaro e gamberi servita con spicchi di limone fresco e maionese della casa.",
        prezzo: 15,
        immagine: "images/calamari .png"
    },
{
    nome: "Filetto di Branzino alla Mediterranea",
    categoria: "Secondi",
    descrizione: "Filetto di branzino con pomodorini, olive, capperi e profumi mediterranei.",
    prezzo: 17,
    immagine: "images/filetto.jpg"
},
    {
    nome: "Pizza Crudo, Rucola e Grana",
    categoria: "Primi",
    descrizione: "Pizza con prosciutto crudo, rucola fresca e scaglie di grana.",
    prezzo: 9,
    immagine: "images/pizza.jpg"
}
];

const listaPiatti = document.getElementById("piatti-list");
piatti.forEach(function(piatto) {

    listaPiatti.innerHTML += `
        <div class="card">
          <img src="${piatto.immagine}" alt="${piatto.nome}">
            <h3>${piatto.nome}</h3>
                 <p>${piatto.descrizione}</p>
                 <p class="prezzo">Prezzo: €${piatto.prezzo}</p>
                 <button class="btn-prenota">Prenota</button>
        </div>
    `;

});
function filtraMenu(categoria) { 

    const bottoni = document.querySelectorAll(".btn-filtro");

      bottoni.forEach(function(bottone) {
        bottone.classList.remove("active");
    });

   
    let piattiFiltrati; 
 
    if (categoria === "tutti") { 
        piattiFiltrati = piatti; 
    } else { 
        piattiFiltrati = piatti.filter(function(piatto) { 
            return piatto.categoria === categoria; 
        }); 
    }

    listaPiatti.innerHTML = "";

    piattiFiltrati.forEach(function(piatto) {
        
        listaPiatti.innerHTML += `
            <div class="card">
                <img src="${piatto.immagine}" alt="${piatto.nome}">
                <h3>${piatto.nome}</h3>
                <p>${piatto.descrizione}</p>
                <p class="prezzo">Prezzo: €${piatto.prezzo}</p>
                <button class="btn-prenota">Prenota</button>
            </div>
        `;

    });

    console.log(piattiFiltrati); 
}
filtraMenu("tutti");

const formPrenotazione = document.getElementById("form-prenotazione");

formPrenotazione.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const persone = document.getElementById("persone").value;
    const data = document.getElementById("data").value;

    if (nome === "" || persone === "" || data === "") {
        alert("Compila tutti i campi!");
        return;
    }
    if (persone < 1 || persone > 20) {
    alert("Il numero di persone deve essere compreso tra 1 e 20.");
    return;
}
  const oggi = new Date().toISOString().split("T")[0];

    if (data < oggi) {
        alert("Non puoi prenotare una data passata.");
        return;
    }
    const riepilogo = document.getElementById("riepilogo-prenotazione");

    riepilogo.innerHTML =  `
    <h3>Prenotazione confermata!</h3>
    <p>Nome: ${nome}</p>
    <p>Persone: ${persone}</p>
    <p>Data: ${data}</p>
`;

});
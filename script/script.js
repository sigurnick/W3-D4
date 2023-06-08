//----------------------Funzione creaione tabellone----------------
const generateTable = function () {
  const cardTable = document.getElementById("card-table");

  //creo 76 div
  for (let i = 1; i < 77; i++) {
    //creo un div e un h3
    let card = document.createElement("div");
    let numberCard = document.createElement("h3");

    //assegno una classe a div
    card.classList.add("card");

    //assegno ad h3 il valore di i, poi inserisco
    //h3 dentro il div e il div dentro il div contenitore
    numberCard.innerText = i;
    card.appendChild(numberCard);
    cardTable.appendChild(card);
  }
};

//------------------------Funzione creazione tabelle player---------------
const arrnNumberDrownPlayer = [];
const generateCardPlayer = function () {
  const cardPlayerList = document.getElementById("player-card-list");

  //creo 24 div
  for (let i = 1; i < 25; i++) {
    //creo un div e un h3
    let card = document.createElement("div");
    let numberCard = document.createElement("h4");

    //assegno una classe a div
    card.classList.add("cardPlayer");

    let randomNumberPlayer = randomNumber76();
    //----Controllo che il numero estratto non sia già uscito----
    while (arrnNumberDrown.includes(randomNumberPlayer)) {
      randomNumberPlayer = randomNumber76();
    }
    arrnNumberDrown.push(randomNumberPlayer);

    //assegno ad h4 un valore random, poi inserisco
    //h3 dentro il div e il div dentro il div contenitore
    numberCard.innerText = randomNumberPlayer;
    card.appendChild(numberCard);
    cardPlayerList.appendChild(card);
  }
};





//-----------------Funzione estrazione numero da 1 a 76---------------
function randomNumber76() {
  return Math.floor(Math.random() * 76) + 1;
}




//------------------Funzione estrazione numero al click su bottone-------------
const arrnNumberDrown = [];
const numberDrown = function () {
  //richiamo la funzione che genera un numero casuale
  let randomNumber = randomNumber76();

  //----Controllo che il numero estratto non sia già uscito----
  while (arrnNumberDrown.includes(randomNumber)) {
    randomNumber = randomNumber76();
  }
  arrnNumberDrown.push(randomNumber);
  console.log(randomNumber);


  //--------Assegno una classe alle card di table estratte--------
  //prendo tutti gli h3 e li cliclo
  const allH3 = document.querySelectorAll("h3");
  allH3.forEach((e) => {

    //se il valore di h3 è lo stesso del numero estratto
    //aggiungo una classe al parent di h3
    if (parseInt(e.innerText) === randomNumber) {
      e.parentElement.classList.add("cardDrown");
    }
  });



  //---------Assegno una classe alle card del giocatore estratte------
  //prendo tutti gli h4 e li cliclo
  const allH4 = document.querySelectorAll("h4");
  allH4.forEach((e) => {

    //se il valore di h4 è lo stesso del numero estratto
    //aggiungo una classe al parent di h4
    if (parseInt(e.innerText) === randomNumber) {
      e.parentElement.classList.add("cardPlayerDrown");
    }
  });
};




//prendo il bottone che genera il numero e gli assegno un evento
const drownButton = document.getElementById("drown-button");
drownButton.addEventListener("click", numberDrown);

generateTable();

generateCardPlayer();

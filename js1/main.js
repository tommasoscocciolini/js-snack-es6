$(document).ready(function(){
  console.log("ok");

 const squadre = [
    {
      nome: "Juve",
      punti: 0,
      falli: 0,
    },
    {
      nome: "Milan",
      punti: 0,
      falli: 0,
    },
    {
      nome: "Roma",
      punti: 0,
      falli: 0,
    }
]

var datiTeam = [];
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumber(0, 80);
  squadre[i].falli = randomNumber(0, 50);

  var {nome, falli} = squadre[i];
  var squadraNew = {
    nome : nome,
    falli: falli,
  };
  datiTeam.push(squadraNew);
}

console.log(datiTeam);
for (var i = 0; i < datiTeam.length; i++) {
  $("#res").append("<li>" + datiTeam[i].nome + " " + datiTeam[i].falli + "</li>")
}

})


//functions
function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("errore");
  } else {
  return Math.floor(Math.random() * (max - min) ) + min;
  }
}

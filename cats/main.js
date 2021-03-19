$(document).ready(function(){
  console.log("ok");
  const cats = [
    {
      nome: "Black",
      eta: 5,
      colore: "Nero",
      sesso: "Maschio",
    },
    {
      nome: "Mia",
      eta: 6,
      colore: "Arancio",
      sesso: "Femmina",
    },
    {
      nome: "Neve",
      eta: 12,
      colore: "Bianco",
      sesso: "Femmina",
    },
    {
      nome: "Pulce",
      eta: 17,
      colore: "Grigio",
      sesso: "Maschio",
    },
  ]

//MILESTONE1

cats.forEach((gatto, i, gatti) => {
  $("#res").append(`<li> ${gatto.nome} è ${gatto.colore} </li>`);
  //console.log(gatti[i]);
});


//MILESTONE2

const gattiM = cats.filter((gatto) =>{
  return gatto.sesso == "Maschio"
});
//console.log(gattiM);

const gattiF = cats.filter((gatto) =>{
  return gatto.sesso == "Femmina"
});
//console.log(gattiF);


gattiM.forEach((gatto, i) => {
  $("#res2").append(`<li class="blue-ribbon"> ${gatto.nome} è ${gatto.colore} <i class="fas fa-ribbon"></i> </li>`);
});
gattiF.forEach((gatto, i) => {
  $("#res2").append(`<li class="pink-ribbon"> ${gatto.nome} è ${gatto.colore} <i class="fas fa-ribbon"></i> </li>`);
});

});


//MILESTONE3

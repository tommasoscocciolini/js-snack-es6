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


// gattiM.forEach((gatto, i) => {
//   $("#res2").append(`<li class="blue-ribbon"> ${gatto.nome} è ${gatto.colore} <i class="fas fa-ribbon"></i> </li>`);
// });
// gattiF.forEach((gatto, i) => {
//   $("#res2").append(`<li class="pink-ribbon"> ${gatto.nome} è ${gatto.colore} <i class="fas fa-ribbon"></i> </li>`);
// });

cats.forEach((gatto, i) => {
  if (gatto.sesso == "Maschio") {
    if (gatto.eta >= 10) {
      let colore = "blue";
      let opacita = .8;
      gatto.opacita = .8;
      const gattoMold = `<li> ${gatto.nome} è ${gatto.colore} <i style="color:${colore}; opacity: ${gatto.opacita}" class="fas fa-ribbon"></i> </li>`
      $("#res2").append(gattoMold);
    }
    if (gatto.eta < 10) {
      let colore = "blue";
      let opacita = .4;
      gatto.opacita = .4;
      const gattoMyoung = `<li> ${gatto.nome} è ${gatto.colore} <i style="color:${colore}; opacity: ${gatto.opacita}" class="fas fa-ribbon"></i> </li>`
      $("#res2").append(gattoMyoung);
    }
  } else {
    if (gatto.eta >= 10) {
      let colore = "pink";
      let opacita = .8;
      gatto.opacita = .8;
      const gattoFold = `<li> ${gatto.nome} è ${gatto.colore} <i style="color:${colore}; opacity: ${gatto.opacita}" class="fas fa-ribbon"></i> </li>`
      $("#res2").append(gattoFold);
    }
    if (gatto.eta < 10) {
      let colore = "pink";
      let opacita = .4;
      gatto.opacita = .4;
      const gattoFyoung = `<li> ${gatto.nome} è ${gatto.colore} <i style="color:${colore}; opacity: ${gatto.opacita}" class="fas fa-ribbon"></i> </li>`
      $("#res2").append(gattoFyoung);
    }  }

});



//MILESTONE3

const cats2 = [...gattiF,...gattiM];
//console.log(cats2);
const gatti2 = cats2.map((gatto, i) => {
  const {nome, colore, opacita} = cats[i];
  const gatti2 = {
    nome: nome,
    colore: colore,
    opacita: opacita
  }
  return gatti2
  //console.log(gatti2);
  });

  gatti2.forEach((gatto, i, gatti) => {
    $("#res3").append(`<li> ${gatto.nome} è ${gatto.colore} con opacità del fiocco = ${gatto.opacita} </li>`);
    //console.log(gatti[i]);
  });

  console.log(gatti2);

});

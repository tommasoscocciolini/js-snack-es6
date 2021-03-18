$(document).ready(function(){
  console.log("ok");

 const biciclette = [
    {
      nome: "BMX",
      peso: 5,
    },
    {
      nome: "Graziella",
      peso: 9,
    },
    {
      nome: "E-bike",
      peso: 4,
    }
]

const [uno, due, tre] = biciclette;

var min = biciclette[0].peso;
var index = 0;
console.log(min);
for (let i = 1; i < biciclette.length; i++) {
  if (biciclette[i].peso < min) {
    min = biciclette[i].peso;
    index = i;
  }
}

$("#res").text(` Le biciclette erano ${uno.nome} ${due.nome} ${tre.nome}
  e il peso minore è ${min} della ${biciclette[index].nome} `)
console.log(min);
})

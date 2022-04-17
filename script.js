const canva = document.querySelector("#lienzo");
const context = canva.getContext("2d");
var coor = canva.getBoundingClientRect();
var x = 0;
var y = 0;
var color = "black";
var grosor = 1;
var dibujando = false;

function elColor(c) {
  color = c;
  
};

function elGrosor(g) {
  grosor = g;
 
};


canva.addEventListener("mousedown", function (e) {
  x = e.clientX - coor.left;
  y = e.clientY - coor.top;
  dibujando = true;
  //console.log(e.target)
});

canva.addEventListener("mousemove", function (e) {
  if (dibujando === true) {
    dibujar(x, y, e.clientX - coor.left, e.clientY - coor.top)
    x = e.clientX - coor.left;
    y = e.clientY - coor.top;
    //console.log(e.target)
  }
});
canva.addEventListener("mouseup", function (e) {
  if (dibujando === true) {
    dibujar(x, y, e.clientX - coor.left, e.clientY - coor.top)
    x = 0;
    y = 0;
    dibujando = false;
    //console.log(e.target)
  }
});
function dibujar(x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = color;
  context.lineWidth = grosor;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
};

let Yator = 5;
let Xator = 50;
let colidiu = false;
let placar = 0;
//variaveis PLACAR



function mostraPlacar(){
  if(Yator > 360){
  placar += 1;
  voltaAtor();
  somPonto.play();
  }
textSize(25);
fill(color(255, 240, 60));
text(placar, 150, 27);
}

function verificaColisao(){
for(let i=0; i < imagensCarro.length; i++){
colidiu = collideRectCircle(Xcarro[i], Ycarro[i], comprimento, altura, Xator, Yator, 3);
if(colidiu){
  somColidiu.play();
console.log("Colidiu");
if(colidiu){voltaAtor();           
if(placar > 0){
placar -= 1;
}
}
}
}
}

function voltaAtor(){ 
  Yator = 5;
}

function mostraAtor(){
image(imagemDoAtor, Xator, Yator, 30, 30);
}

function movimentaAtor(){
if (keyIsDown(UP_ARROW)) {
if(Yator > 5){
  Yator -=3;
}  
}
if (keyIsDown(DOWN_ARROW)) {
if(Yator < 366){
  Yator +=3;
}
}
}
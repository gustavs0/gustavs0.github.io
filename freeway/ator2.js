let Yator2 = 366;
let Xator2 = 100;
let colidiu2 = false;
let placar2 = 0;

function mostraPlacar2(){
  if(Yator2 < 30){
  placar2 += 1;
  voltaAtor2();
  somPonto.play();
  }
textSize(25);
fill(color(255, 240, 60));
text(placar2, 150, 390);
}

function verificaColisao2(){
for(let i=0; i < imagensCarro.length; i++){
colidiu2 = collideRectCircle(Xcarro[i], Ycarro[i], comprimento, altura, Xator2, Yator2, 3);
if(colidiu2){
  somColidiu.play();
console.log("Colidiu2");
if(colidiu2){voltaAtor2();           
if(placar2 > 0){
placar2 -= 1;
}
}
}
}
}

function voltaAtor2(){ 
  Yator2 = 366;
}

function mostraAtor2(){
image(imagemDoAtor2, Xator2, Yator2, 30, 30);
}

function movimentaAtor2(){
if (keyIsDown(87)){
if(Yator2 > 5){
  Yator2 -=3;
}  
}
if (keyIsDown(83)){
if(Yator2 < 366){
  Yator2 +=3;
}
}
}
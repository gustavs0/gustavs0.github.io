
function setup() {
createCanvas(500, 400);
  trilhaSonora.play();
}

//DRAW
function draw() {
background(imagemDaEstrada);
  if(!( placar>= 10 || placar2>=10)){
 jogo();}
    else{
mostraVencedor();
}
}
//FECHA DRAW
  
  
 function jogo(){
mostraAtor();
movimentaAtor();
mostraCarro();
movimentaCarro();
verificaColisao();
mostraPlacar();
verificaColisao2();
movimentaAtor2();
mostraAtor2()
mostraPlacar2();
plays();
 }
 

function mostraVencedor(){
  if(placar >= 10){
    fill(130, 217, 197);
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("Jogador 1 campeão!!",250,200);
}else{
    fill(130, 217, 197);
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("jogador 2 campeão!!",250,200);
}
}
//variáveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;
let corBolinha = [130, 217, 197];
let velocidadeX = 5;
let velocidadeY = 5;

//variáveis das RAQUETES
let alturaRaquete = 100;
let larguraRaquete = 20;

//variáveis MINHA RAQUETE
let xMinhaRaquete = 580;
let yMinhaRaquete = 150;
let corMinhaRaquete = [100,255,255];

//variáveis RAQUETE OPONENTE
let xRaqueteOponente = 0;
let yRaqueteOponente = 150;
let corRaqueteOponente = [100,255,255];

//variaveis PLACAR
let meusPontos = 0;
let pontosOponente = 0;

let ponto;
let raquetada;

function preload(){
    raquetada = loadSound('raquetada.mp3');
    ponto = loadSound('ponto.mp3');
  
}

//configuração inicial
function setup() {
  createCanvas(600, 400);
  largura = width;
  altura = height;
  print("Largura: "+largura+"Altura: "+altura);
}


//desenha - Looping infinito while(1)
function draw() {//draw - desenha
  background(255,210,255);
  text("X");
  if(!(meusPontos >= 10 || pontosOponente>=10))
  jogo();
  else
    mostraVencedor();
}


//FUNÇÕES

function mostraVencedor(){
  if(meusPontos >= 10){
    fill(130, 217, 197);
    rect(300, 0, 300, 400)
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("Lado direito é campeão!!",300,200);
}else{
    fill(130, 217, 197);
    rect(0, 0, 300, 400)
    textAlign(CENTER);
    fill(0);
    textSize(40);
    text("Lado esquerdo é campeão!!",300,200);
}
}

function jogo(){
  
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
  mostraRaquete();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  movimentaRaqueteOponente();
  mostraRaqueteOponente();
  mostrarPlacar();
  marcarPonto();
}

function marcarPonto(){
  
if(xBolinha < 10){
meusPontos += 1
ponto.play();
}
if(xBolinha > 590){
pontosOponente += 1 
ponto.play();
}
}

function mostrarPlacar(){
  fill(255,255,210);
  rect(180, 5, 50, 30, 10);//placar oponente
  fill(255,255,210);
  rect(380, 5, 50, 30, 10);//meu placar 
  //pontos
  fill(0, 0, 0);
  text(meusPontos, 395, 26); 
  text(pontosOponente, 195, 26);
  textSize(20);
}

function movimentaRaqueteOponente(){
  
if(keyIsDown(87)){//seta para cima
if(yRaqueteOponente < 0){
yRaqueteOponente = 0;
}else{  
yRaqueteOponente -= 10;//velocidade da minha raquete
}
}
  
if(keyIsDown(83)){//seta para baixo
if(yRaqueteOponente > 300){
yRaqueteOponente = 300;
}else{
yRaqueteOponente += 10;//velocidade da minha raquete
}
}
}

function mostraRaqueteOponente(){
  
fill(corRaqueteOponente);
rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function verificaColisaoRaquete(){
  //COLISAO MINHA RAQUETE
if(xBolinha + raio > xMinhaRaquete &&
   yBolinha - raio < yMinhaRaquete + alturaRaquete && 
   yBolinha + raio > yMinhaRaquete){
if(!(xBolinha < 300 && velocidadeX > 0 ||
    xBolinha > 300 && velocidadeX < 0)){
    velocidadeX *= -1;
  raquetada.play();
}
}
  
  //COLISAO RAQUETE OPONENTE
if(xBolinha - raio < xRaqueteOponente + larguraRaquete && yBolinha - raio < yRaqueteOponente + alturaRaquete &&
yBolinha + raio > yRaqueteOponente){
  velocidadeX *= -1;
  raquetada.play();
}
}

function movimentaMinhaRaquete(){
  
if(keyIsDown(UP_ARROW)){//seta para cima
if(yMinhaRaquete < 0){
yMinhaRaquete = 0;
}else{  
yMinhaRaquete -= 10; //velocidade da minha raquete
}
}
if(keyIsDown(DOWN_ARROW)){//seta para baixo  
if(yMinhaRaquete > 300){
   yMinhaRaquete = 300;
}else{
yMinhaRaquete += 10;//velocidade da minha raquete
}
}   
}

function mostraRaquete(){
fill(corMinhaRaquete);
rect(xMinhaRaquete, yMinhaRaquete, larguraRaquete, alturaRaquete);
}

function verificaColisao(){
  
   //colisao horizontal com bordas laterais
if (xBolinha + raio > largura || xBolinha - raio < 0){
    //velocidadeX = velocidadeX * -1
    velocidadeX *= -1;
} 
  //colisao vertival com as bordas superior e inferior
  if (yBolinha + raio > altura || yBolinha - raio < 0){
    //velocidadeY = velocidadeY * -1
    velocidadeY *= -1;
}
}

function movimentaBolinha(){
  
//velocidade horizontal
  xBolinha +=  velocidadeX;//Incremento x
  //velocidade vertical
  yBolinha += velocidadeY;//Incremento y
}

function mostraBolinha(){
  
  fill(corBolinha);
  circle(xBolinha,yBolinha,diametro);
}

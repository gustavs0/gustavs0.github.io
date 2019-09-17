
//CARRO1
let Xcarro = [700, 500, 600, 500, 800, 500];
let Ycarro = [40, 100, 150, 210, 265, 320];
let velocidadeCarro = [3, 7, 5, 2, 3, 4];
let altura = 40;
let comprimento = 80;


function mostraCarro(){
for(let i=0; i < imagensCarro.length; i++){
image(imagensCarro[i], Xcarro[i], Ycarro[i], comprimento, altura);
}
}

function movimentaCarro(){
for(let i=0;i< imagensCarro.length; i++){
Xcarro[i] -=  velocidadeCarro[i];    
if(Xcarro[i] < -100){
Xcarro[i] = 700
}
} 
}





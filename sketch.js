var tom,jerry,canvas;
var tomi,jerryi,canvasi;
function preload() {
tomi = loadImage("tomOne.png");
jerryi = loadImage("jerryOne.png");
canvasi = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    canvas.addImage("canvasi")
    tom = createSprite(200,100,50,50)
   jerry = createSprite(100,200,50,10)
   tom.addImage("tomi");
   jerry.addImage("jerryi");
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

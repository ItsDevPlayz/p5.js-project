function preload(){

}
  
function setup(){
canvas=createCanvas(800,550);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,250,120,300,300);
fill("red");
stroke("black");
circle(60,60,100);
circle(740,60,100);
circle(740,480,100);
circle(60,480,100);
fill("green");
stroke("black");
rect(105,52,590,25);
rect(105,475,590,25);
rect(51,110,25,320);
rect(725,110,25,320);
}

function take_snapshot(){
    save("YourImage.png");
}
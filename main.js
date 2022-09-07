function setup(){
    canvas = createCanvas(550 , 380);
canvas.position(490 , 300);
}

function preload (){
    video = createVideo("video.mp4");
    video.hide();
}

function draw(){
    image(video, 0 , 0 , 550 , 380);
}

function start (){
objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
document.getElementById("spantag").innerHTML = " Detecting objects ";
}

function modelLoaded (){
    console.log(" ModelLoaded is Initialized");
    status = true;
    video.loop();
    video.speed(2.5);
    video.volume(0);
}
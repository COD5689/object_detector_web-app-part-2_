img = "";
arnav = "";

function back(){
    window.location = "index.html";
}

function preload(){
    img = loadImage("nissan-GTR.webp")
}

function draw(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("modal loaded");
    arnav = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
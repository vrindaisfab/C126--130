song = "";

function preload()

{
    song = loadSound ("music.mp3");
}

scoreLeftWrist = 0;
scoreRightWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup() {
    canvas = createCanvas (600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log ('PoseNet is initialized');
}

function gotPoses (results) {

    if(results.length > 0) {
        console.log(results);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}
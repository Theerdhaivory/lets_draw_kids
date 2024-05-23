
dif = 0;
rightWX = 0;
leftWX = 0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, loaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('pink');
    fill('white');
    stroke('palevioletred');
    square(0, 0 , dif)
}

function loaded() {
    console.log('PoseNet is clear!!');

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        rightWX = results[0].pose.rightWrist.x;
        leftWX =  results[0].pose.leftWrist.x;
        dif = floor(leftWX - rightWX);
    }
}
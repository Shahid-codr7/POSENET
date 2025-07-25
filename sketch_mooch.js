let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let goggle,mooch;

function setup() {
    createCanvas(550, 470);
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    mooch = loadImage('images/mooch.png');

}

function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {

    
    // images and videos(webcam)
    image(capture, 0, 0);
    fill(0,255,255);

    if(singlePose){
        // for(let i=0; i<singlePose.keypoints.length; i++){
        //     ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        // }
        // stroke(255,255,255);
        // strokeWeight(5);
        // for(let j=0; j<skeleton.length; j++){
        //     line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        // }

        image(mooch,singlePose.nose.x-40,singlePose.nose.y-28,80,80);    
    }

    

}
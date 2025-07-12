# StickerCam with PoseNet

StickerCam is a fun web-based application that uses PoseNet (powered by Tensorflow.js and ml5.js) to detect human facial landmarks in real-time via your webcam, and overlays playful stickers like goggles and moustache on your face. The project is built with **ml5.js**, **p5.js**, and **Tensorflow.js**.

PoseNet is an ML-based model that detects 17 human body keypoints in real time, enabling pose estimation for browser-based applications.
## Features

- **Real-Time Pose Detection**: Utilizes PoseNet via ml5.js to find keypoints on your face and head.
- **Sticker Overlay**: Dynamically places goggle and moustache stickers based on detected keypoints.
- **Webcam Support**: Runs entirely in your browser—no installation required!
- **Interactive & Fun**: Instantly see stickers track your face as you move.

## Technologies Used

- [ml5.js](https://ml5js.org/): Simplifies machine learning with Tensorflow.js for the web.
- [p5.js](https://p5js.org/): Creative coding library used for drawing and handling video streams.
- [Tensorflow.js](https://www.tensorflow.org/js): Underlying ML engine for browser-based inference.

## How It Works

1. **Setup Webcam**: p5.js captures video from your webcam.
2. **Pose Detection**: ml5.js loads PoseNet and detects keypoints such as eyes, nose, and ears.
3. **Sticker Placement**: The positions of the keypoints are used to draw stickers (goggles over the eyes, moustache over the nose/lip).
4. **Live Rendering**: The results are drawn to the canvas in real-time as you move.

## Live Demo

Check out the live demo here!
[StickerCam](https://stickercam.netlify.app/)

*See goggles and moustache stickers following your face!*


## Usage

1. Allow access to your webcam when prompted.
2. Move your head; watch goggles and moustache follow your face!


## Credits

- [ml5.js Team](https://ml5js.org/)
- [p5.js Team](https://p5js.org/)
- [Tensorflow.js](https://www.tensorflow.org/js)
- Sticker images courtesy of [freepik.com](https://www.freepik.com/) and [flaticon.com](https://www.flaticon.com/)

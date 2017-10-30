// Buffers
let leftBuffer;
let rightBufferU;
let rightBufferL;

let font;
const data = []; // Photos and video

function preload() {
  font = loadFont('assets/fonts/Hack-Regular.ttf');
}

function setup() {
  // Canvas
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  // Buffers
  const w = window.innerWidth;
  const h = window.innerHeight;

  // Load data
  loadImages();

  // Instantiate drawing buffers
  leftBuffer = new CanvasBuffer(0, 0, w / 2, h);
  rightBufferU = new CanvasBuffer(w / 2, 0, w / 2, h / 2);
  rightBufferL = new CanvasBuffer(w / 2, h / 2, w / 2, h / 2);

  // Assign inital photoseries to canvasbuffers
  leftBuffer.setImages(data[2]);
  rightBufferU.setImages(data[1]);
  rightBufferL.setImages(data[0]);
}

function draw() {
  // background(0);
  leftBuffer.move();
  leftBuffer.display();

  rightBufferU.move();
  rightBufferU.display();

  rightBufferL.move();
  rightBufferL.display();
}

function windowResized() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  resizeCanvas(w, h);

  // Buffers
  leftBuffer.resize(0, 0, w / 2, h);
  rightBufferU.resize(w / 2, 0, w / 2, h / 2);
  rightBufferL.resize(w / 2, h / 2, w / 2, h / 2);
}

function loadImages() {
  data.push(new PhotoSeries('assets/images/Serie2/', 29));
  data.push(new PhotoSeries('assets/images/Serie3/', 29));
  data.push(new PhotoSeries('assets/images/Serie4/', 229));
}

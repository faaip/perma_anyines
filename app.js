// Buffers
let leftBuffer;
let rightBufferU;
let rightBufferL;

// font
let font;

function preload() {
  font = loadFont('assets/fonts/Hack-Regular.ttf');
}

function setup() {
  // Canvas
  createCanvas(window.innerWidth, window.innerHeight);

  // Buffers
  const w = window.innerWidth;
  const h = window.innerHeight;

  leftBuffer = new CanvasBuffer(0, 0, w / 2, h);
  rightBufferU = new CanvasBuffer(w / 2, 0, w / 2, h / 2);
  rightBufferL = new CanvasBuffer(w / 2, h / 2, w / 2, h / 2);
}

function draw() {
  background(0);
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

	resizeCanvas(w,h);

	// Buffers
	leftBuffer.resize(0, 0, w / 2, h);
	rightBufferU.resize(w / 2, 0, w / 2, h / 2);
	rightBufferL.resize(w / 2, h / 2, w / 2, h / 2);
}

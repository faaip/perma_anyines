// Buffers for drawing two canvases
let leftBuffer;
let rightBuffer;

// Font
let hackFont;
let hackFontBold;
let hackFontItalic;

let canvasSeparator; // Line that separates the two canvases
let rightBufferWidth;
let leftBufferWidth;

function preload() {
	hackFont = loadFont('assets/fonts/Hack-Regular.ttf');
	hackFontBold = loadFont('assets/fonts/Hack-Bold.ttf');
	hackFontItalic = loadFont('assets/fonts/Hack-Italic.ttf');
}
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

  // Create both of your off-screen graphics buffers
	canvasSeparator = window.innerWidth / 2;
	rightBufferWidth = leftBufferWidth = canvasSeparator;
	leftBuffer = createGraphics(canvasSeparator, window.innerHeight);
	rightBuffer = createGraphics(canvasSeparator, window.innerHeight);
	
	leftBuffer.textFont(hackFont);
	rightBuffer.textFont(hackFont);
}

function draw() {
  // Draw on your buffers however you like
	drawLeftBuffer();
	drawRightBuffer();

  // Paint the off-screen buffers onto the main canvas
	image(leftBuffer, 0, 0);
	image(rightBuffer, canvasSeparator, 0);
}

function drawLeftBuffer() {
	leftBuffer.background(0, 0, 0);
	leftBuffer.fill(255, 255, 255);
	leftBuffer.textSize(14);
	leftBuffer.text('Width: ' + leftBufferWidth, 50, 50);
}

function drawRightBuffer() {
	rightBuffer.background(255, 100, 255);
	rightBuffer.fill(0, 0, 0);
	rightBuffer.textSize(14);
	rightBuffer.text('Width: ' + rightBufferWidth, 50, 50);
	rightBuffer.ellipse(rightBufferWidth, window.innerHeight, 50, 50);
}

function windowResized() {
	// Call back for window resizing
	resizeCanvas(windowWidth, windowHeight);

	// Resize buffers
	canvasSeparator = window.innerWidth / 2;
	rightBufferWidth = leftBufferWidth = canvasSeparator;

	// leftBuffer = createGraphics(canvasSeparator, window.innerHeight);
	// rightBuffer = createGraphics(canvasSeparator, window.innerHeight);
	leftBuffer.resize(canvasSeparator, window.innerHeight);
}

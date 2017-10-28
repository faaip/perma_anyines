// Buffers for drawing two canvases
let leftBuffer;
let rightBuffer;

// Font
let hackFont;

let canvasSeparator; // Line that separates the two canvases
let rightBufferWidth;
let leftBufferWidth;

let bufLeft;
let bufRightU;
let bufRightL;

function preload() {
	hackFont = loadFont('assets/fonts/Hack-Regular.ttf');
	hackFontBold = loadFont('assets/fonts/Hack-Bold.ttf');
	hackFontItalic = loadFont('assets/fonts/Hack-Italic.ttf');

}
function setup() {
	createCanvas(window.innerWidth, window.innerHeight);

	// Create buffers
	const halfWidth = window.innerWidth/2;
	const halfHeight = window.innerHeight/2;
	bufLeft = CanvasBuffer(0, 0, halfWidth, window.innerHeight, hackFont, '32');
	bufRightU = CanvasBuffer(halfWidth, 0, halfWidth, window.innerHeight, hackFont, '42');
	bufRightU = CanvasBuffer(halfWidth, halfHeight, halfWidth, window.innerHeight, hackFont, '42');
}

function draw() {
	// background(0);
	bufLeft.display();
	bufRightU.display();
	bufRightL.display();
}

function windowResized() {
	// Call back for window resizing
	resizeCanvas(windowWidth, windowHeight);
}

// Function CanvasBuffer(x, y, w, h) {
//  	this.x = x;
//  	this.y = y;
//  	this.w = w;
//  	this.h = h;

//   const hackFont = loadFont('assets/fonts/Hack-Regular.ttf');
//  }

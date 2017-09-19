brain_images_1 = []; // Images for brain
brain_images_2 = []; // Images for brain
brain_images_3 = []; // Images for brain
brain_images_4 = []; // Images for brain
brain_images_5 = []; // Images for brain

function preload() {
	// Populate brain image array
	for (let i = 0; i < 239; i++) {
		brain_images_4.push(loadImage('assets/Serie4/brain_' + i + '.jpg'));
	}
}

function setup() {
	// Create the new canvas
	createCanvas(window.innerWidth, window.innerHeight);

  // Set window title
	document.title = ' P E R M A ';

	// Color canvas
	background(0);

	// Increment brain call-back
	window.setInterval(setBrainIndex,30);
}

function draw() {
	brainImg = brain_images_4[brainIndex];
	xPos = (width / 2) - brain_images_4[brainIndex].width / 2;
	yPos = (height / 2) - brain_images_4[brainIndex].height / 2;
	tint(255,30);
	image(brainImg, xPos, yPos);
}

function windowResized() {
	// Call back for window resizing
	resizeCanvas(windowWidth, windowHeight);
}

brainIndex = 0;
ascending = true;
increment = 0.1;
function setBrainIndex() {
	if (ascending) {
		brainIndex++;
	} else {
		brainIndex--;
	}

	if (brainIndex <= 0 || brainIndex >= brain_images_4.length - 1) {
		ascending = !ascending;
	}
}

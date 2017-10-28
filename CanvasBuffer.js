function CanvasBuffer(x, y, w, h, font, id) {
	// setters
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.font = font; // Shared font for all buffers
	textFont(font);

	console.log(x,y,w,h);

	// variables
	var bgColor = color(0);
	var textColor = color(0);
	var fontSize = 14;

	this.display = function () {
		// Set background color

		// Draw graphics
		// Draw text
		fill(textColor);
		textSize(fontSize);
		text(mouseX, x+15,y+15);
		ellipse(x,y,w,h);

		// and finally reset matrix
	};
};

function CanvasBuffer(x, y, w, h) {
  // Input arguments
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	// setup the rest
  textFont(font);

  this.move = function() {

  };

	this.resize = function(x,y,w,h){
		// Input arguments
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

  this.display = function() {
    translate(this.x, this.y);
    fill(255);
    text(str(mouseX-this.x) + "\n" + str(mouseY-this.y), 15, 15);
    resetMatrix();
  };

  this.isMouseInside = function() {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }
}

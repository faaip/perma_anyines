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

  this.resize = function(x, y, w, h) {
    // Input arguments
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  this.isMouseInside = function() {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }

  this.display = function() {
    this.drawText();
    this.drawMarkers();
  };

  this.drawText = function() {
    translate(this.x, this.y);
		if(this.isMouseInside()){
			fill(255);
		}else{
			fill(127);
		}
    text(str(mouseX - this.x) + "\n" + str(mouseY - this.y), 15, 15);
    resetMatrix();
  }

  this.drawMarkers = function() {
		if(this.isMouseInside()){
			var mWidth = 3;
			var mLength = 15;
			var mouseXRelative = mouseX - this.x;
			var mouseYRelative = mouseY - this.y;

			translate(this.x, this.y);
			fill(255);
			rect(mouseXRelative, 0, mWidth, mLength); // top
			rect(mouseXRelative, this.h, mWidth, -mLength); // bottom
			rect(0, mouseYRelative, mLength, mWidth); // left
			rect(this.w, mouseYRelative, -mLength, mWidth); // right

			resetMatrix();
		}

  }
}

function CanvasBuffer(x, y, w, h) {
  // Input arguments
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.data = null;

  // setup the rest
  textFont(font);

  this.move = function() {

  };

  this.setImages = function(photoSeries) {
    console.log('wee');
    console.log(photoSeries.isLoadingDone);
    this.data = photoSeries;
    console.log(this.data);
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
    fill(0);
    rect(x, y, w, h);

    this.drawImage();
    this.drawText();
    this.drawMarkers();
  };

  this.drawImage = function() {
    translate(x + w / 2, y + h / 2);

    // Check if data has been set
    if (this.data != null) {
      if (this.data.isLoaded()) {
        img = this.data.getImage(this.getNormalisedMouse()[1]);
        image(img, -img.width / 4, -img.height / 4, img.width / 2, img.height / 2);
      } else {
        ellipse(20, 20, 30, 30);
      }
    }

    resetMatrix();
  }

  this.drawText = function() {
    translate(this.x, this.y);
    if (this.isMouseInside()) {
      fill(255);
    } else {
      fill(127);
    }
    text(str(mouseX - this.x) + "\n" + str(mouseY - this.y) + "\n" +
      str(this.getNormalisedMouse()[0] + "\n" +
        str(this.getNormalisedMouse()[1])), 15, 15); // top coordinates

    if (this.data != null) {
      text(this.data.getDataString(), 15, h - 15);
    }
    resetMatrix();
  }

  this.getNormalisedMouse = function() {
    let nMouseX = constrain(norm(mouseX, 0, this.w), 0.0, 1.0);
    let nMouseY = constrain(norm(mouseY, 0, this.h), 0.0, 1.0);
    return [nMouseX, nMouseY];
  }

  this.drawMarkers = function() {
    if (this.isMouseInside()) {
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

function CanvasBuffer(x, y, w, h) {
  // Input arguments
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.data = null;

  // setup the rest
  textFont(font);
  this.mouseNorm = 0.0;

  this.setImages = function (photoSeries) {
    this.data = photoSeries;
  };

  this.resize = function (x, y, w, h) {
    // resizes canvas buffer
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  };

  this.isMouseInside = function () {
    return mouseX > this.x && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.h;
  };

  this.display = function () {
    fill(0);
    rect(x, y, w, h);

    this.drawImage();
    this.drawText();
    this.drawMarkers();
  };

  this.drawImage = function () {
    translate((x + w) / 2, (y + h) / 2);

    // Check if data has been set
    if (this.data != null) {
      if (this.data.isLoaded()) {
        if (this.isMouseInside()) {
          // Update mouseNorm which indexes data
          this.mouseNorm = this.getNormalisedMouse()[1];
        }
        img = this.data.getImage(this.mouseNorm);

        const ratio = this.calculateAspectRatio(img.width, img.height, this.w * 0.8, this.h * 0.8);
        image(img, -ratio.width / 2, -ratio.height / 2, ratio.width, ratio.height);
      } else {
        // data isn't loaded
      }
    }

    resetMatrix();
  };

  this.drawText = function () {
    translate(this.x, this.y);
    if (this.isMouseInside()) {
      fill(255);
    } else {
      fill(127);
    }
    textAlign(RIGHT, TOP);
    text(`${str(mouseX - this.x)}\n${str(mouseY - this.y)}\n${
      str(`${this.getNormalisedMouse()[0]}\n${
        str(this.getNormalisedMouse()[1])}`)}`, this.w - 15, 15); // top coordinates

    if (this.data != null) {
      textAlign(LEFT, BOTTOM);
      text(this.data.getDataString(), 15, this.h - 15);
      textAlign(LEFT, TOP);
    }

    if (this.isMouseInside()) {
      // RGB in left lower corner
      textAlign(RIGHT, BOTTOM);
      text(str(frameRate()), this.w - 15, this.h - 15);
      textAlign(LEFT, TOP);
    }

    resetMatrix();
  };

  this.getNormalisedMouse = function () {
    const nMouseX = constrain(norm(mouseX - this.x, 0, this.w), 0.0, 1.0);
    const nMouseY = constrain(norm(mouseY - this.y, 0, this.h), 0.0, 1.0);
    return [nMouseX, nMouseY];
  };

  this.drawMarkers = function () {
    if (this.isMouseInside()) {
      const mWidth = 3;
      const mLength = 15;
      const mouseXRelative = mouseX - this.x;
      const mouseYRelative = mouseY - this.y;

      translate(this.x, this.y);
      fill(255);
      rect(mouseXRelative, 0, mWidth, mLength); // top
      rect(mouseXRelative, this.h, mWidth, -mLength); // bottom
      rect(0, mouseYRelative, mLength, mWidth); // left
      rect(this.w, mouseYRelative, -mLength, mWidth); // right

      resetMatrix();
    }
  };

  this.calculateAspectRatio = function (srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return {
      width: srcWidth * ratio,
      height: srcHeight * ratio,
    };
  };
}

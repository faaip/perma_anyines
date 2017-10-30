function PhotoSeries(string, imgCount) {
  // Set variables
  this.path = string;
  this.imgCount = imgCount;
  this.images = [];
  this.bLoadingDone = false;
  this.currentIdx = 0

  this.setLoadingDone = function() {
    console.log(this.path, ' loaded!');
    this.bLoadingDone = true;
  };

  this.isLoaded = function() {
    return this.bLoadingDone;
  };

  this.loadImages = function() {
    // Load images to list
    for (let i = 0; i < this.imgCount; i++) {
      this.images[i] = loadImage(this.path + 'brain_' + str(i) + '.jpg');
    }

		// Set flag for loading done
		// FIXME: don't set flag until this previous is done.
			this.setLoadingDone();
  };

  this.getImage = function(input) {
    // input is a normalised float - returns image based on mapped index
    idx = int(map(input, 0, 1, 0, this.images.length));
    idx = ceil(idx, 0, this.images.length);
    this.currentIdx = idx;
    return this.images[idx];
  }

  this.getDataString = function() {
    return this.path + this.currentIdx + '.jpg'
  }

  // Final setup of object
  this.loadImages();
}

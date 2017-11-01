function Video(path) {
  // Set variables
  this.path = path;
  this.video = null;
  this.bVideoLoaded = false;

  this.loadFilm = function() {
    this.video = createVideo(this.path);
    this.video.loop();
    this.video.hide(); // hide dom element
    this.bVideoLoaded = true;
  };

  this.returnFilm = function() {
    return this.film;
  }

  this.isLoaded = function(){
    return this.bVideoLoaded;
  }

  this.getImage = function(){
    return this.video;
  }

  this.getDataString = function(){
    return this.path;
  }

  // Initialize
  this.loadFilm();
}

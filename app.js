// Buffers
let leftBuffer;
let rightBufferU;
let rightBufferL;

let font;
const data = []; // Photos and video

function preload() {
  font = loadFont('assets/fonts/Hack-Regular.ttf');

  // Soundcloud
  var iframe = document.createElement('iframe');
      var start_track = Math.floor((Math.random() * 2) + 0);
      iframe.width = "100%"
      iframe.height = "100";
      iframe.id = "hideframe"
      // iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/331768602%3Fsecret_token%3Ds-d27yO&amp;color=ff5500&amp;auto_play=true&amp;start_track=" + start_track + "&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;"
      iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343359704&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true";
      document.body.appendChild(iframe);
}

function setup() {
  // Canvas
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  // Buffers
  const w = window.innerWidth;
  const h = window.innerHeight;

  // Load data
  loadImages();

  // Instantiate drawing buffers
  leftBuffer = new CanvasBuffer(0, 0, w / 2, h);
  rightBufferU = new CanvasBuffer(w / 2, 0, w / 2, h / 2);
  rightBufferL = new CanvasBuffer(w / 2, h / 2, w / 2, h / 2);

  // Assign inital photoseries to canvasbuffers
  leftBuffer.setImages(data[0]);
  rightBufferU.setImages(data[3]);
  rightBufferL.setImages(data[1]);
}

function draw() {
  // background(0);
  leftBuffer.move();
  leftBuffer.display();

  rightBufferU.move();
  rightBufferU.display();

  rightBufferL.move();
  rightBufferL.display();
}

function windowResized() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  resizeCanvas(w, h);

  // Buffers
  leftBuffer.resize(0, 0, w / 2, h);
  rightBufferU.resize(w / 2, 0, w / 2, h / 2);
  rightBufferL.resize(w / 2, h / 2, w / 2, h / 2);
}

function loadImages() {
  data.push(new PhotoSeries('assets/images/a_brain360/', 29, "N/a", null, 0.0));
  data.push(new PhotoSeries('assets/images/Serie2/', 29, "5.00 mm", 7.50, 154.96));
  data.push(new PhotoSeries('assets/images/Serie3/', 29, "5.00 mm", 7.50, 154.96));
  data.push(new PhotoSeries('assets/images/Serie4/', 229, "625.00 μm", 5.27,157.19));
}

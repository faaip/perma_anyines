// Buffers
let leftBuffer;
let rightBufferU;
let rightBufferL;

// idx
let leftBufferIdx = 1;
let rightBufferLIdx = 0;
let rightBufferUIdx = 2;

let font;
const data = []; // Photos and video

function preload() {
  font = loadFont('assets/fonts/Hack-Regular.ttf');

  // Soundcloud
  const iframe = document.createElement('iframe');
  const start_track = Math.floor((Math.random() * 2) + 0);
  iframe.width = '100%';
  iframe.height = '100';
  iframe.id = 'hideframe';
  // iframe.src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/331768602%3Fsecret_token%3Ds-d27yO&amp;color=ff5500&amp;auto_play=true&amp;start_track=" + start_track + "&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true;"
  iframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343359704&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true';
  document.body.appendChild(iframe);
}

function setup() {
  // Canvas
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

  // Set window title
  document.title = ' P E R M A ';

  // LOGO_silver
  // Add logo to top-left corner
  let logo;
  logo = document.createElement('img');
  logo.className = 'logo';
  logo.alt = 'Anyines_logo';
  logo.style.opacity = '1.0';
  logo.onclick = function () {
    window.open('https://anyines.bandcamp.com/album/perma');
  };
  logo.src = 'assets/images/LOGO_silver.png';
  document.body.appendChild(logo);

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
  leftBuffer.setImages(data[leftBufferIdx]);
  rightBufferU.setImages(data[rightBufferUIdx]);
  rightBufferL.setImages(data[rightBufferLIdx]);
}

function draw() {
  leftBuffer.display();
  rightBufferU.display();
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

function mousePressed() {
  if (leftBuffer.isMouseInside()) {
    leftBufferIdx = getNextIndex(leftBufferIdx);
    leftBuffer.setImages(data[leftBufferIdx]);
  }

  if (rightBufferU.isMouseInside()) {
    rightBufferUIdx = getNextIndex(rightBufferUIdx);
    rightBufferU.setImages(data[rightBufferUIdx]);
  }

  if (rightBufferL.isMouseInside()) {
    rightBufferLIdx = getNextIndex(rightBufferLIdx);
    rightBufferL.setImages(data[rightBufferLIdx]);
  }
}

function getNextIndex(currentIdx) {
  currentIdx++;
  if (currentIdx >= data.length) {
    currentIdx = 0;
  }

  console.log(currentIdx);
  return currentIdx;
}

function loadImages() {
  data.push(new PhotoSeries('assets/images/localiser/', 128, 'N/a', null, 0.0));
  data.push(new PhotoSeries('assets/images/a_brain360/', 29, 'N/a', null, 0.0));
  data.push(new PhotoSeries('assets/images/Serie2/', 29, '5.00 mm', 7.50, 154.96));
  data.push(new PhotoSeries('assets/images/Serie3/', 29, '5.00 mm', 7.50, 154.96));
  data.push(new PhotoSeries('assets/images/Serie4/', 229, '625.00 μm', 5.27, 157.19));
}

let x;
let y;

// Setting default value globally 
window.xspeed = 3;
window.yspeed = 3;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage("images/dvd_logo.png");
}

chrome.storage.onChanged.addListener(function(changes, namespace) {
  window.xspeed = changes.speed.newValue;
  window.yspeed = changes.speed.newValue;
})

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);

}

function draw() {
  background(0);
  
  // Draw the DVD logo
  tint(r, g, b);
  image(dvd, x, y);


  console.log(x, y)
  x = x + window.xspeed;
  y = y + window.yspeed;

  // rounding
  x = Math.round(x);
  y = Math.round(y);

  // Checking if it reaches the horizontal edges
  if (x + dvd.width >= width) {
    window.xspeed = -window.xspeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    window.xspeed = -window.xspeed;
    x = 0;
    pickColor();
  }

  // Checking if it reaches the vertical edges
  if (y + dvd.height >= height) {
    window.yspeed = -window.yspeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    window.yspeed = -window.yspeed;
    y = 0;
    pickColor();
  }
}
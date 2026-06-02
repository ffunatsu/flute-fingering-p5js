var svg;
// var path;

function setup() {
  createCanvas(800, 800, SVG);
  svg = loadSVG('flute_finger.svg');

//   background(255);
//   fill(150);
//   stroke(150);
}

function draw() {
//   var r = frameCount % 200 * Math.sqrt(2);
  background(255);
  image(svg, 0, 0, 500, 500);

  let path = querySVG('#a > path')[0];
  path.attribute("fill", "rgb(255,255,0)");
//   ellipse(0, 0, r, r);
}
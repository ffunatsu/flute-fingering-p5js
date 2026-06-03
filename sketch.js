var svg;
var alphabets = "abcdefghijklmnopqrstuvwxyz"
var container;
// var path;

function setup() {
  createCanvas(800, 800, SVG);
  svg = loadSVG('flute_finger.svg');
  alphabets = alphabets.split("");

//   background(255);
//   fill(150);
//   stroke(150);
}

var is_init = false
var prev_path;
var prev_color;

function preload(){
    container = document.createElement('div')
}

var omps = [
    "C",
    "^C",
    "D",
    "^D",
    "E",
    "F",
    "^F",
    "G",
    "^G",
    "A",
    "^A",
    "B",
    "c",
    "^c",
    "d",
    "^d",
    "e",
    "f",
    "^f",
    "g",
    "^g",
    "a",
    "^a",
    "b",
    "c'",
    "^c'",
    "d'",
    "^d'",
    "e'",
    "f'",
    "^f'",
    "g'",
    "^g'",
    "a'",
    "^a'",
    "b'",
    "c''",
    "",
    "",
];

function music_svg(h){
    ABCJS.renderAbc(container, "X:\n"+omps[h]+"2\n");
    return container.querySelector('svg');
}


function draw() {
  background(255);

    var sec = millis() / 1000;
//   console.log(sec)

  var i = Math.floor(sec * 5) % 21;
  var j = Math.floor(sec * 5) % 37;

  image(music_svg(j), 0, 0, 200, 200);

  image(svg, 0, 0, 500, 500);

  var a = alphabets[i];

  if(!is_init){
    is_init = true
  }
//   var r = frameCount % 200 * Math.sqrt(2);

  if(prev_path){
    prev_path.style().fill = prev_color;
  }
  
  let paths = querySVG('#' + a + ' > path');
  if(paths.length > 0){
    let path = paths[0];
    prev_path = path;
    prev_color = path.style().fill;
    path.style().fill = "rgb(255,255,0)";
  }

//   ellipse(0, 0, r, r);
}

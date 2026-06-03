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

function preload(){
    container = document.createElement('div')
}

var omps = [
    "C",    "acdhijmnr",
    "^C",   "acdhijnr",
    "D",    "",
    "^D",   "",
    "E",    "",
    "F",    "",
    "^F",   "",
    "G",    "",
    "^G",   "",
    "A",    "",
    "^A",   "",
    "B",    "",
    "c",    "",
    "^c",   "",
    "d",    "",
    "^d",   "",
    "e",    "",
    "f",    "",
    "^f",   "",
    "g",    "",
    "^g",   "",
    "a",    "",
    "^a",   "",
    "b",    "",
    "c'",   "",
    "^c'",  "",
    "d'",   "",
    "^d'",  "",
    "e'",   "",
    "f'",   "",
    "^f'",  "",
    "g'",   "",
    "^g'",  "",
    "a'",   "",
    "^a'",  "",
    "b'",   "",
    "c''",  ""
];

function has_music_svg(h){
    if(h > 37){
        return false;
    }else{
        return true;
    }
}

function get_fingers(h){
    if(h > 37){
        return [];
    }else{
        return split(omps[h*2 + 1], "");
    }
}

function get_omp(h){
    if(h > 37){
        return "";
    }else{
        return omps[h*2];
    }
}

function music_svg(h){
    if(h > 37){
        return;
    }
    ABCJS.renderAbc(container, "X:\n"+get_omp(h)+"2\n");
    return container.querySelector('svg');
}


function draw() {
  background(255);

    var sec = millis() / 1000;
//   console.log(sec)

  var ind = Math.floor(sec * 5) % 21;
  var j = Math.floor(sec * 5) % 37;

  if(has_music_svg(j)){
    image(music_svg(j), 0, 0, 200, 200);
  }

  image(svg, 0, 0, 500, 500);

  let white = "rgb(255,255,255)";
  for(let i=0; i<21; ++i){
    var a = alphabets[i];
    let paths = querySVG('#' + a + ' > path');
    if(paths.length > 0){
        let path = paths[0];
        path.style().fill = white;
    }

  }

  let fingers = get_fingers(ind);
  if(fingers.length > 0){

    for(let i=0; i<fingers.length; ++i){
        // var a = alphabets[fingers[i]];
        var a = fingers[i];
        let paths = querySVG('#' + a + ' > path');
        if(paths.length > 0){
            let path = paths[0];
            prev_path = path;
            prev_color = path.style().fill;
            path.style().fill = "rgb(255,0,0)";
        }
    }
  }

//   ellipse(0, 0, r, r);
}

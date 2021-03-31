let customFont; // Ne pas toucher à cette ligne

let img = [];

let currentMinute = 0;
let currentSecond = 0;
let currentHour = 0;

let secondImage = 0;
let minuteImage = 0;
let hourImage = 0;

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function setup() {
  createCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
  img[0] = loadImage("../GIFS/alice.gif");
  img[1] = loadImage("../GIFS/ariel.gif");
  img[2] = loadImage("../GIFS/bgc.gif");
  img[3] = loadImage("../GIFS/blonde.gif");
  img[4] = loadImage("../GIFS/boo.gif");
  img[5] = loadImage("../GIFS/britney.gif");
  img[6] = loadImage("../GIFS/cry.gif");
  img[7] = loadImage("../GIFS/crykris.gif");
  img[8] = loadImage("../GIFS/greys.gif");
  img[9] = loadImage("../GIFS/homer.gif");
  img[10] = loadImage("../GIFS/kim.gif");
  img[11] = loadImage("../GIFS/kris.gif");
  img[12] = loadImage("../GIFS/oprah.gif");
  img[13] = loadImage("../GIFS/regina.gif");
  img[14] = loadImage("../GIFS/sad.gif");
  img[15] = loadImage("../GIFS/share.gif");
  img[16] = loadImage("../GIFS/sobbing.gif");
  img[17] = loadImage("../GIFS/triste.gif");
  img[18] = loadImage("../GIFS/ugh.gif");
  img[19] = loadImage("../GIFS/notfair.gif");
  img[20] = loadImage("../GIFS/buffy.gif");
  img[21] = loadImage("../GIFS/mascara.gif");
  img[22] = loadImage("../GIFS/island.gif");
  img[23] = loadImage("../GIFS/car.gif");
  img[24] = loadImage("../GIFS/bar.gif");
  img[25] = loadImage("../GIFS/real.gif");
  img[26] = loadImage("../GIFS/fake.gif");
  img[27] = loadImage("../GIFS/newjersey.gif");
  img[28] = loadImage("../GIFS/sniff.gif");
  img[29] = loadImage("../GIFS/office.gif");
  img[30] = loadImage("../GIFS/theoprah.gif");
  img[31] = loadImage("../GIFS/encoreoprah.gif");
  img[32] = loadImage("../GIFS/yellow.gif");
  img[33] = loadImage("../GIFS/bip.gif");
  img[34] = loadImage("../GIFS/kristen.gif");
  img[35] = loadImage("../GIFS/pika.gif");
  img[36] = loadImage("../GIFS/plouf.gif");
  img[37] = loadImage("../GIFS/lumpy.gif");
  img[38] = loadImage("../GIFS/pat.gif");
  img[39] = loadImage("../GIFS/bob.gif");
  img[40] = loadImage("../GIFS/sponge.gif");
  img[41] = loadImage("../GIFS/teddy.gif");
  img[42] = loadImage("../GIFS/orange.gif");
  img[43] = loadImage("../GIFS/oops.gif");
  img[44] = loadImage("../GIFS/redhair.gif");
  img[45] = loadImage("../GIFS/naomi.gif");
  img[46] = loadImage("../GIFS/riri.gif");
  img[46] = loadImage("../GIFS/tissue.gif");
  img[48] = loadImage("../GIFS/jeans.gif");
  img[49] = loadImage("../GIFS/gold.gif");
  img[50] = loadImage("../GIFS/tiff.gif");
  img[51] = loadImage("../GIFS/blondie.gif");
  img[52] = loadImage("../GIFS/brows.gif");
  img[53] = loadImage("../GIFS/wig.gif");
  img[54] = loadImage("../GIFS/north.gif");
  img[55] = loadImage("../GIFS/blue.gif");
  img[56] = loadImage("../GIFS/marge.gif");
  img[57] = loadImage("../GIFS/lizzie.gif");
  img[58] = loadImage("../GIFS/baby.gif");
  img[59] = loadImage("../GIFS/kimmy.gif");
  img[60] = loadImage("../GIFS/khloe.gif");
  img[61] = loadImage("../GIFS/kourt.gif");
  img[62] = loadImage("../GIFS/steven.gif");

}

function draw() {
  background(0);
  showTime(); // Ne pas toucher à cette ligne
  imageMode(CENTER);

  if(currentMinute != minute()) {
    minuteImage = Math.floor(random(0, img.length));
    currentMinute = minute();
  }


  if(currentSecond != second()) {
    secondImage = Math.floor(random(0, img.length));
    currentSecond = second();
  }


  if(currentHour != hour()) {
    hourImage = Math.floor(random(0, img.length));
    currentHour = hour();
  }

   for(let h = 0; h < hour(); h++) {
    image(img[hourImage], h * width / 24, height / 6);
  }

  for(let m = 0; m < minute(); m++) {
    image(img[minuteImage], m * width / 60, height / 2);
  }
  
  for(let s = 0; s < second(); s++) {
    image(img[secondImage], s * width / 60, height / 1.2);
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
}

// Les blocs showTime et formatTime s'occupent d'afficher correctement l'heure en bas à gauche de la page.
function showTime() {
  let time =
    formatTime(hour()) +
    ":" +
    formatTime(minute()) +
    ":" +
    formatTime(second());
  textFont(customFont);
  fill(random(255), random(255), random(255)); // <----- Changez cette valeur pour manipuler la couleur du texte
  textSize(30);
  text('ID491 - DAVIDE HALL - THE CRYING CLOCK       I', 800,43.5);
  text(time, 1530, height - 1070);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
// -----------------------------------//

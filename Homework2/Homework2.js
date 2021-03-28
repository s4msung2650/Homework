let canvasX = 720,
  canvasY = 720;
let sliderR, sliderG, sliderB;

function setup() { //setup
  buttons();
  sliders();
  dropDown();
  let canvas = createCanvas(canvasX, canvasY).parent('canvasposition');
  backx = random(0, 255);
  backy = random(0, 255);
  backz = random(0, 255);
  textSize(15);
  //noStroke();
  background(backx, backy, backz);
  frameRate(20)
}

function draw() {
  mouseOnCanvas();
  const r = sliderR.value();
  const g = sliderG.value();
  const b = sliderB.value();
  const t = sliderT.value();
  const tS = slidertS.value();
  const size = sliderSize.value();
  const form = sel.value();
  const copy = sliderCopy.value();

  if (mouseC) {
    if (mouseIsPressed) { //Drawing 
      if (form == "Ellipse") {
        fill(r, g, b, t);
        stroke(r, g, b, tS);
        for (let cnt = 0; cnt < copy; cnt++) {
          let alpha = random(-50, 50);
          let bravo = random(-50, 50);
          ellipse(mouseX + alpha, mouseY + bravo, size, size);
        }
      } else if (form == "Square") {
        fill(r, g, b, t);
        stroke(r, g, b, tS);
        for (let cnt = 0; cnt < copy; cnt++) {
          let alpha = random(-50, 50);
          let bravo = random(-50, 50);
          square(mouseX - size / 2 + alpha, mouseY - size / 2 + bravo, size);
        }
      } else if (form == "Triangle") {
        fill(r, g, b, t);
        stroke(r, g, b, tS);
        for (let cnt = 0; cnt < copy; cnt++) {
          let alpha = random(-50, 50);
          let bravo = random(-50, 50);
          triangle(mouseX + alpha, mouseY - size / 2 + bravo, mouseX - size / 2 + alpha, mouseY + size / 2 + bravo, mouseX + size / 2 + alpha, mouseY + size / 2 + bravo)
        }
      }
    }
  }
}

function dropDown() {
  sel = createSelect();
  sel.position(730, 290);
  sel.option('Ellipse');
  sel.option('Square');
  sel.option('Triangle');
  sel.selected('Ellipse');
}

function col() { //Doesnt work
  const r = sliderR.value();
  const g = sliderG.value();
  const b = sliderB.value();
}

function mouseOnCanvas() { //Detect mouse on Canvas
  mouseC = mouseX <= canvasX && mouseX >= 0 && mouseY <= canvasY && mouseY >= 0
}

function buttons() { //creates buttons
  button = createButton("Reset"); //Reset
  button.position(730, 80);
  button.mousePressed(resetColor);

  button = createButton("New Color"); //NewColor
  button.position(730, 110);
  button.mousePressed(changeColor);

  button = createButton("Save Canvas") //Save Canvas
  button.position(825, 290);
  button.mousePressed(savePicture);
}

function sliders() { //create sliders
  sliderR = createSlider(0, 255, 50); //Red
  sliderR.position(730, 155);
  txt = createDiv('Red');
  txt.position(sliderR.x + 150, sliderR.y);

  sliderG = createSlider(0, 255, 50); //Green
  sliderG.position(730, 175);
  txt = createDiv('Green');
  txt.position(sliderG.x + 150, sliderG.y);

  sliderB = createSlider(0, 255, 50); //Blue
  sliderB.position(730, 195);
  txt = createDiv('Blue');
  txt.position(sliderB.x + 150, sliderB.y);

  sliderT = createSlider(0, 255, 100); //Trans
  sliderT.position(730, 135);
  txt = createDiv('Transparency');
  txt.position(sliderT.x + 150, sliderT.y);

  slidertS = createSlider(0, 255, 50); //Borders
  slidertS.position(730, 225);
  txt = createDiv('Border');
  txt.position(slidertS.x + 150, slidertS.y);

  sliderSize = createSlider(0, 255, 50); //Size
  sliderSize.position(730, 245);
  txt = createDiv('Size');
  txt.position(sliderSize.x + 150, sliderSize.y);

  sliderCopy = createSlider(1, 10, 1, 1); //Copies
  sliderCopy.position(730, 265);
  txt = createDiv('Copies');
  txt.position(sliderCopy.x + 150, sliderCopy.y)


}

function changeColor() { //random color
  backx = random(0, 255);
  backy = random(0, 255);
  backz = random(0, 255);
  background(backx, backy, backz);
}

function savePicture() {
  saveCanvas(canvas, 'myCanvas', 'jpg')
}

function resetColor() { //reset color
  background(backx, backy, backz)
}

function keyPressed() { //Keypressed dectection
  //Background Controls
  if (keyCode == 67) { //c
    resetColor();
  } else if (keyCode == 78) { //n
    changeColor();
  }
}

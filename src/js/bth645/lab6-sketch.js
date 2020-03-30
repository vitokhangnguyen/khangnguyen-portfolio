/* eslint-disable global-require */
/* eslint-disable no-plusplus */

function drawCloud(sketch, x, y, size) {
  const s = sketch;
  s.fill(255, 255, 255);
  s.noStroke();
  s.arc(x, y, 25 * size, 20 * size, s.PI + s.TWO_PI, s.TWO_PI);
  s.arc(x + 10, y, 25 * size, 45 * size, s.PI + s.TWO_PI, s.TWO_PI);
  s.arc(x + 25, y, 25 * size, 35 * size, s.PI + s.TWO_PI, s.TWO_PI);
  s.arc(x + 40, y, 30 * size, 20 * size, s.PI + s.TWO_PI, s.TWO_PI);
}

export default function (sketch) {
  const s = sketch;
  let houseImage1;
  let houseImage2;

  s.preload = () => {
    houseImage1 = s.loadImage(require('@/assets/bth645/lab6/house.png'));
    houseImage2 = s.loadImage(require('@/assets/bth645/lab6/house2.png'));
  };

  s.setup = () => {
    s.createCanvas(600, 300);
    // Set sky background
    s.background(186, 223, 243);
  };

  s.draw = () => {
    const {
      width,
      height,
      PI,
      BOLD,
    } = sketch;

    // Draw the grass
    s.noStroke();
    s.fill(0, 200, 0);
    s.arc(width / 2, height, width * 2, height * 1.15, PI, PI * 2);

    // Draw the sun
    s.noStroke();
    s.fill(245, 235, 0);
    for (let i = 0; i < 20; i++) {
      s.ellipse(0, 30, 10, 80);
      s.rotate(PI / 10);
    }

    // Draw the clouds
    drawCloud(s, 50, 40, 1.5);
    drawCloud(s, 200, 50, 1.2);
    drawCloud(s, 400, 45, 1.35);
    drawCloud(s, 560, 60, 1);

    // Draw the houses
    s.image(houseImage1, 380, 54, 200, 147);
    s.image(houseImage2, 0, 81, 304, 120);

    // Draw the pavement
    s.stroke(0);
    s.fill(200, 200, 200);
    s.arc(width / 2, height, width * 2.5, height / 1.4, PI, PI * 2);

    // Draw the road
    s.stroke(0);
    s.fill(125, 125, 125);
    s.arc(width / 2, height, width * 2.5, height / 2.2, PI, PI * 2);

    // Print discription texts
    s.fill(0, 0, 0, 130);
    s.noStroke();
    s.rect(175, 53.5, width, 40);
    s.fill(255);
    s.textSize(16);
    s.textStyle(BOLD);
    s.text('Just a random p5.js sketch with some added images', 190, 80);

    // Draw the lane divider
    s.stroke(217, 206, 0);
    s.strokeWeight(2);
    s.line(0, height - 30, width, height - 30);
    s.line(0, height - 25, width, height - 25);

    s.noLoop();
  };
}

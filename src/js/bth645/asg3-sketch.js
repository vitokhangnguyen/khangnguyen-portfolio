/* eslint-disable global-require */
/* eslint-disable no-plusplus */

export default function (sketch) {
  const s = sketch;
  let paused = false;
  let nightMode = false;
  let car;
  let speechBubble;
  let plane;
  let rocket;
  let nightBg;

  function drawCloud(x, y, size) {
    s.noStroke();
    s.arc(x, y, 25 * size, 20 * size, s.PI + s.TWO_PI, s.TWO_PI);
    s.arc(x + 10, y, 25 * size, 45 * size, s.PI + s.TWO_PI, s.TWO_PI);
    s.arc(x + 25, y, 25 * size, 35 * size, s.PI + s.TWO_PI, s.TWO_PI);
    s.arc(x + 40, y, 30 * size, 20 * size, s.PI + s.TWO_PI, s.TWO_PI);
  }

  function toggleDayNight() {
    if (!paused) {
      nightMode = !nightMode;
      rocket.x = 225;
      rocket.y = 150;
      plane.x = 600;
      plane.y = 50;
      plane.reversed = false;
    }
  }

  s.preload = () => {
    car = {
      image: s.loadImage(require('@/assets/bth645/asg3/car.png')),
      x: -250,
      stop: false,
    };
    plane = {
      image: s.loadImage(require('@/assets/bth645/asg3/plane.png')),
      x: 600,
      y: 50,
      reversed: false,
    };
    rocket = {
      image: s.loadImage(require('@/assets/bth645/asg3/rocket.png')),
      x: 225,
      y: 150,
    };
    speechBubble = s.loadImage(require('@/assets/bth645/asg3/speech-bubble.png'));
    nightBg = s.loadImage(require('@/assets/bth645/asg3/night-sky.jpg'));
  };

  s.setup = () => {
    const canvas = s.createCanvas(600, 300);
    // Add mouse-click listener to the canvas to run the toggleDayNight() function
    canvas.mouseClicked(toggleDayNight);
    // Set the speed of the animation to 30 frames per second
    s.frameRate(30);
  };

  s.keyPressed = () => {
    const { keyCode, ENTER } = s;
    // Press ENTER to pause the animation
    // Press again to resume the animation
    if (keyCode === ENTER) {
      paused = !paused;
      if (paused) {
        s.noLoop();
      } else {
        s.loop();
      }
    }
  };

  s.draw = () => {
    const {
      width,
      height,
      PI,
      BOLD,
    } = sketch;

    if (!nightMode) {
      // Set sky
      s.background(186, 223, 243);

      // Draw the sun
      s.translate(200, 50);
      s.noStroke();
      s.fill(245, 235, 0);
      for (let i = 0; i < 20; i++) {
        s.ellipse(0, 15, 5, 40);
        s.rotate(PI / 10);
      }
      s.translate(-200, -50);

      // Draw the clouds
      s.fill(255, 255, 255);
      drawCloud(200, 50, 0.8);

      // Draw the plane
      s.image(plane.image, plane.x, plane.y, 150, 68);
      // Move the plane forward (reversely) by 10 pixels
      plane.x -= 10;
      // Move the plane up until it reachs 10px from the top then move it down
      if (plane.y > 10 && !plane.reversed) {
        plane.y -= 2;
      } else {
        plane.reversed = true;
        plane.y += 1;
      }

      // Draw more clouds
      s.fill(255, 255, 255);
      drawCloud(150, 75, 1);
      drawCloud(375, 60, 1.2);

      // Draw the grass
      s.noStroke();
      s.fill(0, 200, 0);
      s.arc(width / 2, height, width * 2, height * 1.15, PI, PI * 2);

      // Draw the pavement
      s.stroke(0);
      s.fill(200, 200, 200);
      s.arc(width / 2, height, width * 2.5, height / 1.4, PI, PI * 2);

      // Draw the road
      s.stroke(0);
      s.fill(125, 125, 125);
      s.arc(width / 2, height, width * 2.5, height / 2.2, PI, PI * 2);

      // Draw the lane divider
      s.stroke(217, 206, 0);
      s.strokeWeight(2);
      s.line(0, height - 30, width, height - 30);
      s.line(0, height - 25, width, height - 25);
    } else {
      // Set sky
      s.background(nightBg);

      // Draw the moon
      s.noStroke();
      s.fill(255, 240, 180);
      s.circle(500, 55, 50);

      // Draw the clouds
      s.fill(200, 200, 200);
      drawCloud(-5, 60, 1);
      s.fill(215, 215, 215);
      drawCloud(150, 35, 0.8);
      s.fill(240, 240, 240);
      drawCloud(510, 75, 1.2);

      // Draw the rocket
      s.image(rocket.image, rocket.x, rocket.y, 64, 61.5);
      // Move the rocket diagonally to the top-right corner
      rocket.x += 2.5;
      rocket.y -= 2.5;

      // Draw the grass
      s.noStroke();
      s.fill(0, 100, 0);
      s.arc(width / 2, height, width * 2, height * 1.15, PI, PI * 2);

      // Draw the pavement
      s.stroke(0);
      s.fill(160, 160, 160);
      s.arc(width / 2, height, width * 2.5, height / 1.4, PI, PI * 2);

      // Draw the road
      s.stroke(0);
      s.fill(100, 100, 100);
      s.arc(width / 2, height, width * 2.5, height / 2.2, PI, PI * 2);

      // Draw the lane divider
      s.stroke(180, 200, 0);
      s.strokeWeight(2);
      s.line(0, height - 30, width, height - 30);
      s.line(0, height - 25, width, height - 25);
    }

    // Display message on the top-left corner of the canvas if paused
    if (paused) {
      s.textSize(20);
      s.textStyle(BOLD);
      s.fill(255, 0, 0);
      s.noStroke();
      s.text('Paused!', 10, 20);
    }

    // Draw the car
    s.image(car.image, car.x, 195, 216, 120);
    if (car.x === 190) {
      // Draw the speech bubble
      s.image(speechBubble, 300, 120, 200, 93);
      // Stop the car for 3 seconds then keep moving
      if (!car.stop) {
        setTimeout(() => {
          car.x += 10;
          car.stop = false;
        }, 3000);
      }
      car.stop = true;
    } else {
      // Move the car foward by 10 pixels
      car.x += 10;
    }

    // If the car has finished one round (from the left edge to the right edge of the canvas)
    // reset its position to the begining
    if (car.x >= width) {
      car.x = -250;
    }
  };
}

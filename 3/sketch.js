function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 1000;
    while (x < width) {
        x = x + 30;
        quad(x, height / 2.3, 3000, 8, 0, 600, 0, 30, 70);
        fill(240, 255, 0);
        square(x, height / 2, 550, 55);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}
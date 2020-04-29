function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0);
    for (let x = 100; x < width; x = x + 50) {
        ellipse(x, height / 50, 10, 10);
        ellipse(x, height / 500, 30, 10);
        square(x, height / 50, 1000, 1);
        fill(255, 255, 255);
        square(x, height / 50, 1000, 1);
    }
}
while (x < width) {}


function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}
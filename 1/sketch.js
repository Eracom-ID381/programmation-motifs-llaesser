function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    let x = 10;
    fill('red');
    for (let x = 10; x < width; x = x + 25) {
        line(x, height / 1, 3, 1, 10);
        line(x, height / 1, 3, 1);
        line(x, height / 1, 3, 1);
        ellipse(x, height / 1.05, 5, 400);
        ellipse(x, height / 19, 100, 1000);
        ellipse(x, height / 100, 100, 1000);
    }
    while (x < width) {
        line(x, height / 1, 2, 2);
        x = x + 8;
        ellipse(x, height / 1.05, 5, 400);
        x = x + 5;
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}
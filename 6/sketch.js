function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0);
    for (let x = 10; x < width; x = x + 30) {
        strokeWeight(200);
        line(805, 300, 3, 300);
        line(1080, 300, 35, 3000000);
        line(1600, 300, 35, 1300);
        line(0, 30, 3500, 30);
        ellipse(250, 690, 55, 55);
        strokeWeight(5);
    }
}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}
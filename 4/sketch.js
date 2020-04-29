function setup() {
    let navWidth = document.getElementById("nav").offsetWidth;
    let canvas = createCanvas(windowWidth - navWidth, windowHeight);
    canvas.parent('canvas');
    background(255);
}

function draw() {
    fill(0);
    for (let x = 10; x < width; x = x + 30) {

        line(1, 30, 1950, 30);
        // line(1, 20, 1700, 20);
        point(x, height / 7, 20);
        point(x, height / 1, 20);
        point(x, height / 8, 20);
        point(x, height / 9, 20);
        point(x, height / 10, 20);
        point(x, height / 11, 20);
        point(x, height / 12, 20);
        point(x, height / 13, 20);
        point(x, height / 14, 20);
        point(x, height / 15, 20);
        point(x, height / 16, 20);
        point(x, height / 17, 20);
        point(x, height / 18, 20);
        point(x, height / 19, 20);
        point(x, height / 20, 20);
        point(x, height / 21, 20);
        point(x, height / 22, 20);
        point(x, height / 23, 20);
        point(x, height / 24, 20);
        point(x, height / 25, 20);
        point(x, height / 26, 20);
        point(x, height / 27, 20);
        point(x, height / 28, 20);
        point(x, height / 29, 20);
        point(x, height / 30, 20);
        square(0, 400, 1950, 0);








    }

}

function windowResized() {
    let navWidth = document.getElementById("nav").offsetWidth;
    resizeCanvas(windowWidth - navWidth, windowHeight);
    background(255);
}
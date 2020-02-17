let planets = [
	new Planet(70, 50, 20, 150, 150, 150),
	new Planet(-110, -60, 30, 250, 80, 0),
	new Planet(0, -180, 35, 0, 160, 255),
	new Planet(30, 220, 25, 255, 130, 0),
	new Planet(-180, 210, 45, 255, 170, 0),
	new Planet(340, -30, 50, 180, 120, 100),
	new Planet(220, 350, 35, 0, 200, 255),
	new Planet(-340, -320, 45, 0, 50, 255)
];

let sun;
let click = false;

let angle = 0;
let anglespeed = 0.2;

function setup() {
	createCanvas(800, 800);
	sun = new Planet(0, 0, 120, 250, 200, 0);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(width / 2, height / 2);
	rotate(angle);
	for (let planet of planets) {
		planet.show();
	}
	sun.show();
	angle = angle + anglespeed;
	
	if(click) {
		anglespeed = 0;
	} else {
		anglespeed = 0.2;
	}
}

function mousePressed() {
	click = !click;
}
class Line {
	constructor(r) {
		this.r = r;
	}
	show() {
		noFill();
		stroke(255);
		strokeWeight(3);
		ellipse(0, 0, this.r);
	}
}
class Planet {
	constructor(x, y, r, c1, c2, c3) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.c1 = c1;
		this.c2 = c2;
		this.c3 = c3;
	}
	show() {
		fill(this.c1, this.c2, this.c3);
		ellipse(this.x, this.y, this.r);
	}
}
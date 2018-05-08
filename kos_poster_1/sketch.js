var i;
var c;
var cnv;

function Circle(x,y,d,dirX,dirY){
    this.x = x;
    this.y = y;
    this.d = d;
    this.dirX = dirX;
    this.dirY = dirY;

    this.update = function update(){
        this.x = this.x - this.dirX;
        this.y = this.y - this.dirY;
        if (this.x < (0+this.d/2) || this.x > (windowWidth-this.d/2)){
            this.dirX = -this.dirX;
        }
        if (this.y < (0+this.d/2) || this.y > (windowHeight-this.d/2)){
            this.dirY = -this.dirY;
        }
    }

    this.draw = function draw(){
        noStroke();
        fill(224,101,106,255/3);
        ellipse(this.x, this.y, this.d, this.d);
    }
}

function setup(){
    cnv = createCanvas(windowWidth, windowHeight);
    cnv.elt.style.position = 'fixed';
    cnv.elt.style.top = '0px';
    cnv.elt.style.left = '0px';
    cnv.elt.style.zIndex = -1;
    cnv.parent('nav');

    c = [];
    for (i=0; i<15; i++) {
        var d = Math.floor((Math.random() * 200) + 50);
        var x = Math.floor((Math.random() * (windowWidth-2*d)) + d);
        var y = Math.floor((Math.random() * (windowHeight-2*d)) + d);
        var dirX = ((Math.random() * 2) - 1)*7;
        var dirY = ((Math.random() * 2) - 1)*7;
        c.push(new Circle(x,y,d,dirX,dirY))
    }
}

function draw(){
    background(255);
    for (i=0; i<c.length; i++) {
        c[i].update();
        c[i].draw();
    }
}

function setup() {
    // put setup code here
    createCanvas(400,400);
    background(188,138,194);

    x1 = 50;
    y1 = 250;

    x2 = 190;
    y2 = 45;

    x3 = 45;
    y3 = 75;

    x = 199;
    y = 199;

    rectWidth = 90;
    rectHeigth = 30;

    N = 44
    L = 7;
    P = N - L;
}


function draw() {
// put drawing code here
    line(x1,y1,x2,y2)

    fill("WHITE")
    strokeWeight(3)
    rect(x - rectWidth/2,y - rectHeigth/2,rectWidth,rectHeigth);

    fill("CYAN")
    ellipse(x ,y ,rectWidth,rectHeigth);

    fill("YELLOW")
    strokeWeight(3)
    arc(x, y-70 , rectWidth, rectHeigth, 0, 2*PI *P/N);

    fill("GREEN")
    arc(x, y+70 , rectWidth, rectHeigth, 0, 2*PI *L/N);

    fill("RED")
    triangle(x1,y1,x2,y2,x3,y3);

    strokeWeight(2)
    for (var j=10; j<=390;j++){
        xs = j
        ys = 350+ 30 * Math.sin(PI/10*xs)
        point(xs,ys)
    }

}
let img;
let testImg;
let pixel;

let spacing = 210;
let margin = 0;


function preload() {
  img = loadImage("image_03.png");
  testImg = loadImage("purple-rect.png");
}


function setup() {

  createCanvas(800, 800);
  
  // createCanvas(img.width, img.height);

  img.loadPixels();

  rectMode(CENTER);
  strokeCap(SQUARE)

  angleMode(DEGREES);
  imageMode(CENTER);

  }

  function draw() {

    background('#c1bfb6')

    blendMode(BLEND);

    for (let x = 100; x < width; x+=spacing) {
      for (let y = 100; y < height; y+=spacing) {
        
        pixel = getQuick(img, x, y);

        let n = noise(x * .002, y);

        push();
        translate(x, y)
        blendMode(MULTIPLY)
          rotate(x * 10 + (frameCount / 12) * n)
          image(testImg, 0, 0, 600, 600)
          // strokeWeight(10);
          // stroke('red')
          // line(0, 0, 0 + 20, 0 + 20)
          pop();

        // strokeWeight(200);

        // let n = noise(x * .02, y);

        // if(pixel[0] < 100) {
        //   push();
        //   rotate((frameCount / 4) * n)
        //   stroke('red')
        //   line(0, 0, 0 + 20, 0 + 20)
        //   pop();

        //   // push();
        //   // rotate((-frameCount / 4) * n)
        //   // stroke('blue')
        //   // line(0, 0, 0 + 20, 0 + 20)
        //   // pop();
        // } else {
        //   rotate((frameCount / 4) * n)
        //   line(0, 0, 0 + 20, 0 + 20)
        // }

}
  
  }

}



  function getQuick(img, x, y) {
  
    const i = (y * img.width + x) * 4;
    return [
      img.pixels[i],
      img.pixels[i + 1],
      img.pixels[i + 2],
      img.pixels[i + 3],
    ];
  }
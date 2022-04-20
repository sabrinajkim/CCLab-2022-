let noisePos = 0;
let noisePos2 = 1;
let xs = [];
let ys = [];
let circleSize = [];
let yPos = [];

function setup() {
  let canvas= createCanvas(540, 960);
  canvas.parent('sketch-container');

  for (let i = 0; i < 300; i++) {
    xs[i] = random(541);
    ys[i] = random(950, 961);
    circleSize[i] = random(101);
    yPos[i] = random(0.8, 3);
  }
  //background color
  // r = random(7,247);
 // g = random(0, 156);
//  b = random(6, 164);
  // //circle1
  //   circleSize = random(101)
  //   x = random(541)
  //   y = random(950,961)
  //   yPos = random(.8,3)
  //   r1 = random(10,256)
  //   g1 = random(10,256)
  //   b1 = random(10,256)
  // //circle2
  //   x2 = random(541)
  //   y2 = random(950,961)
  //   yPos2 = random(.8,3)
  //   circleSize2 = random(101)
  //   r2 = random(10,256)
  //   g2 = random(10,256)
  //   b2 = random(10,256)
  // //circle3
  //   x3 = random(541)
  //   y3 = random(950,961)
  //   yPos3 = random(.8,3)
  //   circleSize3 = random(101)
  //   r3 = random(10,256)
  //   g3 = random(10,256)
  //   b3 = random(10,256)
  // //circle4
  //   x4 = random(541)
  //   y4 = random(950,961)
  //   yPos4 = random(.8,3)
  //   circleSize4 = random(101)
  //   r4 = random(10,256)
  //   g4 = random(10,256)
  //   b4 = random(10,256)
  // //circle5
  //   x5 = random(541)
  //   y5 = random(950,961)
  //   yPos5 = random(.8,3)
  //   circleSize5 = random(101)
  //   r5 = random(10,256)
  //   g5 = random(10,256)
  //   b5 = random(10,256)
  // //circle6
  //   x6 = random(541)
  //   y6 = random(950,961)
  //   yPos6 = random(.8,3)
  //   circleSize6 = random(101)
  //   r6 = random(10,256)
  //   g6 = random(10,256)
  //   b6 = random(10,256)
  // //circle7
  //   x7 = random(541)
  //   y7 = random(950,961)
  //   yPos7 = random(.8,3)
  //   circleSize7 = random(101)
  //   r7 = random(10,256)
  //   g7 = random(10,256)
  //   b7 = random(10,256)
  // //circle8
  //   x8 = random(541)
  //   y8 = random(950,961)
  //   yPos8 = random(.8,3)
  //   circleSize8 = random(101)
  //   r8 = random(10,256)
  //   g8 = random(10,256)
  //   b8 = random(10,256)
  // //circle9
  //   x9 = random(541)
  //   y9 = random(950,961)
  //   yPos9 = random(.8,3)
  //   circleSize9 = random(101)
  //   r9 = random(10,256)
  //   g9 = random(10,256)
  //   b9 = random(10,256)
  // //circle10
  //   x10 = random(541)
  //   y10 = random(950,961)
  //   yPos10 = random(.8,3)
  //   circleSize10 = random(101)
  //   r10 = random(10,256)
  //   g10 = random(10,256)
  //   b10 = random(10,256)
  // //circle11
  //   x11 = random(541)
  //   y11 = random(950,961)
  //   yPos11 = random(.8,3)
  //   circleSize11 = random(101)
  //   r11 = random(10,256)
  //   g11 = random(10,256)
  //   b11 = random(10,256)
  // //circle12
  //   x12 = random(541)
  //   y12 = random(950,961)
  //   yPos12 = random(.8,3)
  //   circleSize12 = random(101)
  //   r12 = random(10,256)
  //   g12 = random(10,256)
  //   b12 = random(10,256)
  // //circle13
  //   x13 = random(541)
  //   y13 = random(950,961)
  //   yPos13 = random(.8,3)
  //   circleSize13 = random(101)
  //   r13 = random(10,256)
  //   g13 = random(10,256)
  //   b13 = random(10,256)
  // //circle14
  //   x14 = random(541)
  //   y14 = random(950,961)
  //   yPos14 = random(.8,3)
  //   circleSize14 = random(101)
  //   r14 = random(10,256)
  //   g14 = random(10,256)
  //   b14 = random(10,256)
  // // circle15
  //   x15 = random(541)
  //   y15 = random(950,961)
  //   yPos15 = random(.8,3)
  //   circleSize15 = random(101)
  //   r15 = random(10,256)
  //   g15 = random(10,256)
  //   b15 = random(10,256)
  // //circle16
  //   x16 = random(541)
  //   y16 = random(950,961)
  //   yPos16 = random(.8,3)
  //   circleSize16 = random(101)
  //   r16 = random(10,256)
  //   g16 = random(10,256)
  //   b16 = random(10,256)
  // //circle17
  //   x17 = random(541)
  //   y17 = random(950,961)
  //   yPos17 = random(.8,3)
  //   circleSize17 = random(101)
  //   r17 = random(10,256)
  //   g17 = random(10,256)
  //   b17 = random(10,256)
  // //circle18
  //   x18 = random(541)
  //   y18 = random(950,961)
  //   yPos18 = random(.8,3)
  //   circleSize18 = random(101)
  //   r18 = random(10,256)
  //   g18 = random(10,256)
  //   b18 = random(10,256)
  // //circle19
  //   x19 = random(541)
  //   y19 = random(950,961)
  //   yPos19 = random(.8,3)
  //   circleSize19 = random(101)
  //   r19 = random(10,256)
  //   g19 = random(10,256)
  //   b19 = random(10,256)

  //setupGif(30);   // 30 [fps] is how fast the gif will play back
}

function draw() {
  //beginGif();
  background(176, 14, 36);
  noFill();
  // crazy bubble background
  // for (let i=0; i < 100; i++){
  //   stroke(255,100)
  //   ellipse(random(0,width),random(0,height),random(8,50))
  // }

  for (let i = 0; i < 300; i++) {
    if (ys[i] < 0) {
    ys[i] = height;
  }
    noStroke()
    fill(map(i, 0, 299, 0, 255), 0, 0);
    ellipse(xs[i], ys[i], circleSize[i]);
    xs[i] = xs[i] + map(noise(noisePos), 0, 1, -1, 1);
    noisePos = noisePos + random(0.03,0.07);
    ys[i] = ys[i] - yPos[i];
  }
  
  // //circle 1
  //   if (y < 0){
  //     y = height;
  //   }
  //   stroke(r1,g1,b1)
  //   y = y - yPos
  //   x = x + map(noise(noisePos),0,1,-1,1)
  //   noisePos = noisePos + 0.05
  //   ellipse(x,y,circleSize,circleSize);
  // //circle2
  //    if (y2 < 0){
  //     y2 = height;
  //   }
  //   stroke(r2,g2,b2)
  //   x2 = x2 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.04
  //   y2 =y2 - yPos2
  //   ellipse(x2,y2,circleSize2,circleSize2)
  // //circle3
  //    if (y3 < 0){
  //     y3 = height;
  //   }
  //   stroke(r3,g3,b3)
  //   x3 = x3 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.06
  //   y3 = y3 - yPos3
  //   ellipse(x3,y3,circleSize3,circleSize3)
  // //circle4
  //    if (y4 < 0){
  //     y4 = height;
  //   }
  //   stroke(r4,g4,b4)
  //   x4 = x4 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.04
  //   y4 = y4 - yPos4
  //   ellipse(x4,y4,circleSize4,circleSize4)
  // //circle5
  //    if (y5 < 0){
  //     y5 = height;
  //   }
  //   stroke(r5,g5,b5)
  //   x5 = x5 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.05
  //   y5 = y5 - yPos5
  //   ellipse(x5,y5,circleSize5,circleSize5)
  // //circle6
  //    if (y6 < 0){
  //     y6 = height;
  //   }
  //   stroke(r6,g6,b6)
  //   x6 = x6 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.05
  //   y6 = y6 - yPos6
  //   ellipse(x6,y6,circleSize6,circleSize6)
  // //circle7
  //    if (y7 < 0){
  //     y7 = height;
  //   }
  //   stroke(r7,g7,b7)
  //   x7 = x7 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.04
  //   y7 = y7 - yPos7
  //   ellipse(x7,y7,circleSize7,circleSize7)
  // //circle8
  //    if (y8 < 0){
  //     y8 = height;
  //   }
  //   stroke(r8,g8,b8)
  //   x8 = x8 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.06
  //   y8 = y8 - yPos8
  //   ellipse(x8,y8,circleSize8,circleSize8)
  // //circle9
  //    if (y9 < 0){
  //     y9 = height;
  //   }
  //   stroke(r9,g9,b9)
  //   x9 = x9 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y9 = y9 - yPos9
  //   ellipse(x9,y9,circleSize9,circleSize9)
  // //circle10
  //   if (y10 < 0){
  //     y10 = height;
  //   }
  //   stroke(r10,g10,b10)
  //   x10 = x10 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y10 = y10 - yPos10
  //   ellipse(x10,y10,circleSize10,circleSize10)
  // //circle11
  //   if (y11 < 0){
  //     y11 = height;
  //   }
  //   stroke(r11,g11,b11)
  //   x11 = x11 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y11 = y11 - yPos11
  //   ellipse(x11,y11,circleSize11,circleSize11)
  // //circle12
  //   if (y12 < 0){
  //     y12 = height;
  //   }
  //   stroke(r12,g12,b12)
  //   x12 = x12 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y12 = y12 - yPos12
  //   ellipse(x12,y12,circleSize12,circleSize12)
  // //circle13
  //   if (y13 < 0){
  //     y13 = height;
  //   }
  //   stroke(r13,g13,b13)
  //   x13 = x13 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y13 = y13 - yPos13
  //   ellipse(x13,y13,circleSize13,circleSize13)
  // //circle14
  //   if (y14 < 0){
  //     y14 = height;
  //   }
  //   stroke(r14,g14,b14)
  //   x14 = x14 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y14 = y14 - yPos14
  //   ellipse(x14,y14,circleSize14,circleSize14)
  // //circle15
  //   if (y15 < 0){
  //     y15 = height;
  //   }
  //   stroke(r15,g15,b15)
  //   x15 = x15 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y15 = y15 - yPos15
  //   ellipse(x15,y15,circleSize15,circleSize15)
  // //circle16
  //   if (y16 < 0){
  //     y16 = height;
  //   }
  //   stroke(r16,g16,b16)
  //   x16 = x16 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y16 = y16 - yPos16
  //   ellipse(x16,y16,circleSize16,circleSize16)
  // //circle17
  //   if (y17 < 0){
  //     y17 = height;
  //   }
  //   stroke(r17,g17,b17)
  //   x17 = x17 + map(noise(noisePos2),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y17 = y17 - yPos17
  //   ellipse(x17,y17,circleSize17,circleSize17)
  // //cricle18
  //   if (y18 < 0){
  //     y18 = height;
  //   }
  //   stroke(r18,g18,b18)
  //   x18 = x18 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y18 = y18 - yPos18
  //   ellipse(x18,y18,circleSize18,circleSize18)
  // //circle19
  //   if (y19 < 0){
  //     y19 = height;
  //   }
  //   stroke(r19,g19,b19)
  //   x19 = x19 + map(noise(noisePos),0,1,-1,1)
  //   noisPos = noisePos + 0.07
  //   y19 = y19 - yPos19
  //   ellipse(x19,y19,circleSize19,circleSize19)

  //endGif(1000);    // this stops recording after 300 times through draw
}

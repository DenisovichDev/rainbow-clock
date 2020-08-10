var nums_16 = [
  0xFF21,
  0x3000,
  0xEEC0,
  0xFCC0,
  0x31C0,
  0xCD81,
  0xDFC0,
  0xF000,
  0xFFC0,
  0xFDC0
];

var letters = [
  0xF3C0,
  0xFC52,
  0xCF00,
  0xFC12,
  0xCFC0,
  0xC3C0,
  0xDF40,
  0x33C0,
  0xCC12,
  0x3E00,
  0x389,
  0xF00,
  0x3328,
  0x3321,
  0xFF00,
  0xE3C0,
  0xFF01,
  0xE3C1,
  0xDDC0,
  0xC012,
  0x3F00,
  0x3021,
  0x3305,
  0x2D,
  0x2A,
  0xCC0C
];

var months = [
  [letters[9],  letters[0],  letters[13]],
  [letters[5],  letters[4],  letters[1] ],
  [letters[12], letters[0],  letters[17]],
  [letters[0],  letters[15], letters[17]],
  [letters[12], letters[0],  letters[24]],
  [letters[9],  letters[20], letters[13]],
  [letters[9],  letters[20], letters[11]],
  [letters[0],  letters[20], letters[6] ],
  [letters[18], letters[4],  letters[15]],
  [letters[14], letters[2],  letters[19]],
  [letters[13], letters[14], letters[21]],
  [letters[3],  letters[4],  letters[2] ]

];

var week = [
  [letters[18], letters[20], letters[13]],
  [letters[12], letters[14], letters[13]],
  [letters[19], letters[20], letters[4] ],
  [letters[22], letters[4],  letters[3] ],
  [letters[19], letters[7],  letters[20]],
  [letters[5],  letters[17], letters[8] ],
  [letters[18], letters[0],  letters[19]]


];

function sixteen_seg(val, x, y, l, b){

  noStroke();

  //A1
  fill(getColor(val, 15));
  rect(x, y, l - b/4, b, 50);
  //A2
  fill(getColor(val,14));
  rect(x + l - b/4, y, l - b/4, b, 50);
  //B
  fill(getColor(val,13));
  rect(x + 2*l - b, y + b/2, b, 2*l, 50);
  //C
  fill(getColor(val,12));
  rect(x + 2*l - b, y + l + b/2 + l, b, 2*l, 50);
  //D1
  fill(getColor(val,11));
  rect(x + l - b/4, y + 2*l + 2*l, l - b/4, b, 50);
  //D2
  fill(getColor(val,10));
  rect(x, y + 2*l + 2*l, l - b/4, b, 50);
  //E
  fill(getColor(val,9));
  rect(x - b/2, y + 2*l + b/2, b, 2*l, 50);
  //F
  fill(getColor(val,8));
  rect(x - b/2, y + b/2, b, 2*l, 50);
  //G1
  fill(getColor(val,7));
  rect(x, y + 2*l, l - b/4, b, 50);
  //G2
  fill(getColor(val,6));
  rect(x + l - b/4, y + 2*l, l - b/4, b, 50);
  //H
  fill(getColor(val,5));
  beginShape();
  vertex(x + b/2, y + b);
  vertex(x + l - b*0.75, y + 2*l - 2*b);
  vertex(x + l - b*0.75, y + 2*l);
  vertex(x + b/2, y + 3*b);
  endShape();
  //I
  fill(getColor(val,4));
  rect(x + l - b*0.75, y + b/2, b, 2*l, 50);
  //J
  fill(getColor(val,3));
  beginShape();
  vertex(x + 2*l - b, y + b);
  vertex(x + 2*l - b, y + 3*b);
  vertex(x + l + b/4, y + 2*l);
  vertex(x + l + b/4, y + 2*l - 2*b);
  endShape();
  //K
  fill(getColor(val,2));
  beginShape();
  vertex(x + b/2, y + 4*l - 2*b);
  vertex(x + b/2, y + 4*l);
  vertex(x + l - b*0.75, y + (2*l) + 3*b);
  vertex(x + l - b*0.75, y + (2*l) + b);
  endShape();
  //L
  fill(getColor(val,1));
  rect(x + l - b*0.75, y + 2*l + b/2, b, 2*l, 50);
  //M
  fill(getColor(val,0));
  beginShape();
  vertex(x + l - b*0.75 + b, y + 2*l + b);
  vertex(x + l - b*0.75 + b, y + 2*l + 3*b);
  vertex(x + 2*l - b, y + 4*l);
  vertex(x + 2*l - b, y + 4*l - 2*b);
  endShape();

}

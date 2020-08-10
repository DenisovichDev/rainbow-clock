function circularGrad(x, y, c1, c2, l){
  let d = dist(0, 0, width, height)*l;
  noFill();

  for(var r = 0; r < d; r++){
     let inter = map(r, 0, d, 0, 1);
     let alpha = int(map(r, 0, d, 255, 0));
     let c = lerpColor(c1, c2, inter);
     c.setAlpha(alpha);
     stroke(c);
     circle(x, y, r*2);

  }
}

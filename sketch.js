var today;
var w;
var mnth;
var d;
var ay;

//Real Time
var h;
var r;
var m;
var n;
var sec;
//rect variables
var l_rect = 130;
var b_rect = 40;
var xpoint = 280;
var ypoint = 240;
var colon_w = 60;
//HTML objects
var sliders;
var canvas;
var scaleFactor = 0.6;
//Color
var c1;
var c2;
var c3;
var c4;
var c5;
var clock_color;
let l;

function setup (){
  canvas = createCanvas(1600*scaleFactor, 1000*scaleFactor);

  sliders = makeSliders(colors);
  setSlider(sliders);

  frameRate(1);
}


function draw(){
  background(255);
  colorMode(RGB);


  c1 = color(sliders[0][0].value(), sliders[0][1].value(), sliders[0][2].value());
  c2 = color(sliders[1][0].value(), sliders[1][1].value(), sliders[1][2].value());
  c3 = color(sliders[2][0].value(), sliders[2][1].value(), sliders[2][2].value());
  c4 = color(sliders[3][0].value(), sliders[3][1].value(), sliders[3][2].value());
  c5 = color(sliders[4][0].value(), sliders[4][1].value(), sliders[4][2].value());
  clock_color = sliders[5][0].value();


  h = int(hour()/10);
  r = hour()%10;
  m = int(minute()/10);
  n = minute()%10;
  sec = second();
  today = new Date();
  w = today.getDay();
  mnth = month() - 1;
  d = int(day()/10);
  ay = day() % 10;
  var xCal = xpoint + l_rect + 5*b_rect/2;
  var yCal = ypoint + 2*l_rect + 3*b_rect + 70;
  var lCal = l_rect/6;  var bCal = 5;    // 7 : 2


  circularGrad(0, 0, c1, c5, 0.75);
  circularGrad(width, 0, c2, c5, 0.75);
  circularGrad(0, height, c3, c5, 0.75);
  circularGrad(width, height, c4, c5, 0.75);



  scale(scaleFactor);

  //clock
  seven_seg(nums[h], xpoint + 0*(180+l_rect)-100, ypoint, l_rect, b_rect);
  seven_seg(nums[r], xpoint + 1*(180+l_rect)-100, ypoint, l_rect, b_rect);
  seven_seg(nums[m], xpoint + 2*(180+l_rect)+70, ypoint, l_rect, b_rect);
  seven_seg(nums[n], xpoint + 3*(180+l_rect)+70, ypoint, l_rect, b_rect);

  colorMode(HSL, 255);
  l = 100;
  if (clock_color >= 245) l = 255;
  else if (clock_color <= 10) l = 0;

  if(frameCount % 2 == 0)
  fill(clock_color, 255, l);
  else
  fill(clock_color, 255, l, 50);



  rect(xpoint + 1*(180+l_rect)+180, ypoint + 100, colon_w, colon_w, 50);
  rect(xpoint + 1*(180+l_rect)+180, ypoint + 240, colon_w, colon_w, 50);

  //Calendar



  for(var i = 0; i < 3; i++){
      sixteen_seg(months[mnth][i], xCal, yCal, lCal, bCal);  // x : y : 7 : 2
      xCal += l_rect/2;
    }
  xCal += l_rect/4;
    // Date
  sixteen_seg(nums_16[d], xCal, yCal, lCal, bCal); xCal += l_rect/2;
  sixteen_seg(nums_16[ay], xCal, yCal, lCal, bCal); xCal += l_rect/2;
    // Comma
  sixteen_seg(4, xCal, yCal, lCal, bCal); xCal += l_rect/2;
    // Day of the Week
    //xCal += 1.5*l_rect;
  for(var i = 0; i < 3; i++){
  sixteen_seg(week[w][i], xCal, yCal, lCal, bCal); xCal += l_rect/2;
    }


  }


function getColor(value, shift){
  //bitwise operation for alpha=0 or 1

  colorMode(HSL, 255);


  let alpha=255*(value>>shift & 1);
  l = 100;

  if(alpha == 0)
  alpha = 50;
  if(clock_color >= 245)
  l = 255;
  if(clock_color <= 10)
  l = 0;

  return color(clock_color, 255, l, alpha);


}

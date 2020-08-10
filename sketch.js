//import java.util.Date;

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
var l_rect=130;
var b_rect=40;
var xpoint=300;
var ypoint=240;
var colon_w = 60;
//Colors
let orange;
let yellow;
let green_;
let blue_;
let pink;
let purple;
let indigo;

let scaleFactor = 0.6;
function setup ()
{
  canvas = createCanvas(1600*scaleFactor, 1000*scaleFactor);
  createP('')
  sliderR = createSlider(0, 255, 0xFE);
  sliderG = createSlider(0, 255, 0x70);
  sliderB = createSlider(0, 255, 0x00);
  sliderR.position(width + 50, 30);
  sliderG.position(width + 50, 50);
  sliderB.position(width + 50, 70);
  frameRate(1);
  orange = color(sliderR.value(), sliderB.value(), sliderG.value());//'#FE7000');
  yellow = color('#F0FF00');
  green_ = color('#2EFF00');
  blue_ = color('#007BFE');
  pink = color('#FF60CF');
  purple = color('#770596');
  indigo = color('#27E0B9');
}


function draw(){
  background(255);
  orange = color(sliderR.value(), sliderB.value(), sliderG.value());//'#FE7000');

  h = int(hour()/10);
  r = hour()%10;
  m = int(minute()/10);
  n = minute()%10;
  sec = second();
  w = 0; //jsdate.getDay();  //new Date().getDay() - 1;
  mnth = month() - 1;
  d = int(day()/10);
  ay = day() % 10;
  var xCal = xpoint + l_rect + 5*b_rect/2;
  var yCal = ypoint + 2*l_rect + 3*b_rect + 70;
  var lCal = l_rect/6;  var bCal = 5;    // 7 : 2

  circularGrad(0, 0, purple, pink, 0.75);
  circularGrad(width, 0, indigo, pink, 0.75);
  circularGrad(0, height, orange, pink, 0.75);
  circularGrad(width, height, yellow, pink, 0.75);

  scale(scaleFactor);

  //clock
  seven_seg(nums[h], xpoint + 0*(180+l_rect)-100, ypoint, l_rect, b_rect);
  seven_seg(nums[r], xpoint + 1*(180+l_rect)-100, ypoint, l_rect, b_rect);
  seven_seg(nums[m], xpoint + 2*(180+l_rect)+70, ypoint, l_rect, b_rect);
  seven_seg(nums[n], xpoint + 3*(180+l_rect)+70, ypoint, l_rect, b_rect);
  if(frameCount % 2 == 0)
  fill(255);
  else
  fill(255, 20);
  rect(xpoint + 1*(180+l_rect)+180, ypoint + 100, colon_w, colon_w, 50);
  rect(xpoint + 1*(180+l_rect)+180, ypoint + 240, colon_w, colon_w, 50);

  //Calender

    // Month

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


function getColor(value, shift)
{//bitwise operation for alpha=0 or 1
  let alpha=255*(value>>shift & 1);
  if(alpha==0)
  alpha = 30;
  let g = 255;
  let b = 255;
  let r = 255;
  return color(r, g, b, alpha);

}

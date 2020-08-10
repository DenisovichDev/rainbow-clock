var nums = [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B];

function seven_seg(val, x, y, length, breadth)
{
  noStroke();
  //A
  fill(getColor(val,6));
  rect( x, y, length, breadth, 50);
  //B
  fill(getColor(val,5));
  rect( x+length, y+breadth, breadth, length, 50);
  //C
  fill(getColor(val,4));
  rect( x+length, y+2*breadth+length, breadth, length, 50);
  //D
  fill(getColor(val,3));
  rect( x, y+2*(breadth+length), length, breadth, 50);
  //E
  fill(getColor(val,2));
  rect( x-breadth, y+2*breadth+length, breadth, length, 50);
  //F
  fill(getColor(val,1));
  rect( x-breadth, y+breadth, breadth, length, 50);
  //G
  fill(getColor(val,0));
  rect( x, y+breadth+length, length, breadth, 50);

}

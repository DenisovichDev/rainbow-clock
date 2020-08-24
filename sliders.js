var colors = [
  [0x77, 0x05, 0x96],
  [0x2E, 0xFF, 0x00],
  [0xFE, 0x70, 0x00],
  [0xF0, 0xFF, 0x00],
  [0xFF, 0x60, 0xCF]
];

var tags = ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right', 'Middle', 'Clock']

function makeSliders(arr){
  var sliders = [];
  for(var i = 0; i < arr.length; i++){
    sliders[i] = [];
    for(var j = 0; j < arr[i].length; j++){
      sliders[i][j] = createSlider(0, 255, arr[i][j]);
    }
  }
  // making the clock slider
  sliders[arr.length] = [];
  sliders[arr.length][0] = createSlider(0, 255, 255);
  return sliders;
}

function setSlider(arr){
  var x = width + 70;
  var y = 350;
  var tag;
  for(var i = 0; i < arr.length - 1; i++){
    tag = createP(tags[i] + ':');
    tag.position(x, y - 40);
    for(var j = 0; j < arr[i].length; j++){
      arr[i][j].position(x, y);
      y += 25
    }
    y += 50
  }
  // setting up clock slider
  tag = createP(tags[arr.length - 1] + ':');
  tag.position(x, y - 40);

  arr[arr.length - 1][0].position(x, y);

}

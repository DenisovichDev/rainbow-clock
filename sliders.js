var colors = [
  [0xFF, 0x60, 0xCF],
  [0x27, 0xE0, 0xB9],
  [0xFE, 0x70, 0x00],
  [0xF0, 0xFF, 0x00],
  [0xFF, 0x60, 0xCF]
];


function makeSliders(arr){
  var sliders = [];
  for(var i = 0; i < arr.length; i++){
    sliders[i] = [];
    for(var j = 0; j < arr[i].length; j++){
      sliders[i][j] = createSlider(0, 255, arr[i][j]);
    }
  }
  return sliders;
}

function setSlider(arr){
  var x = width + 70;
  var y = 50;
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      arr[i][j].position(x, y);
      y += 20
    }
    y += 100
  }
}
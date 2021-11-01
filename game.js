var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

const nextSequence = () => {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);

  $(`#${randomChosenColor}`).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio('sounds/'+ randomChosenColor + '.mp3');
  audio.play();

};
// lesson 195 - step4 jquery



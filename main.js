var canvas=new fabric.Canvas('mycanvas');
var player_x= 10;
var player_y= 10;
var block_image_width= 30;
var block_image_height= 30;
var player_object="";
var block_image_object="";

function player_update() {
    fabric.Image.fromURL('player.png', function(Img) {
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top: player_y,
        left: player_x
        });
        canvas.add(player_object);
    });
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  keypressed= e.keyCode;
  console.log(keypressed);
  if (e.shiftKey==true && keypressed== '80') {
      console.log("shift and p are pressed together");
      block_image_width= block_image_width + 10;
      block_image_height= block_image_height + 10;
    document.getElementById("current_width").innerHTML= block_image_width;
    document.getElementById("current_height").innerHTML= block_image_height;
  }

  if (e.shiftKey== true && keypressed== '77') {
    console.log("shift + m are pressed together");
    block_image_width= block_image_width - 10;
    block_image_height= block_image_height - 10;
    document.getElementById("current_width").innerHTML= block_image_width;
    document.getElementById("current_height").innerHTML= block_image_height;
  }

  if (keypressed== '38') {
    console.log("up is pressed");
    up();
  }

  if (keypressed== '40') {
    console.log("down is pressed");
    down();
  }

  if (keypressed== '37') {
    console.log("left is pressed");
    left();
  }
  if (keypressed== '39') {
    console.log("right is pressed");
    right();
  }
  if (keypressed== '76') {
    console.log("l is pressed");
    new_image('hulk_legs.png');
  }
  if (keypressed== '72') {
    console.log("h is pressed");
    new_image('captain_america_left_hand.png');
  }
  if (keypressed== '82') {
    console.log("r is pressed");
    new_image('thor_right_hand.png');
  }
  if (keypressed== '66') {
    console.log("b is pressed");
    new_image('spiderman_body.png.png');
  }
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
      BLOCK_IMAGE_OBJECT= Img;
      BLOCK_IMAGE_OBJECT.scaleToWidth(block_image_width);
      BLOCK_IMAGE_OBJECT.scaleToHeight(block_image_height);
      BLOCK_IMAGE_OBJECT.set({
          top: player_y, left: player_x
      });
      canvas.add(BLOCK_IMAGE_OBJECT);
    }
    );
}
function up() {
  if (player_y >= 0) {
    player_y= player_y - block_image_height;
    console.log("Block image height is " + block_image_height);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function down() { 
  if (player_y <= 500) {
    player_y= player_y + block_image_height;
    console.log("Block image height is " + block_image_height);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function left() {
  if (player_x >= 0) {
    player_x= player_x - block_image_width;
    console.log("Block image width is " + block_image_width);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function right() {
  if (player_x <= 700) {
    player_x= player_x + block_image_width;
    console.log("Block image width is " + block_image_width);
    console.log("When up arrow is pressed x is = " + player_x + ", y = " + player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function delete_image() {
  canvas.remove(BLOCK_IMAGE_OBJECT);
}
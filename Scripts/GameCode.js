var player = document.getElementById("Character");
var boundaryBox = document.getElementById("GameContainer");
var arrowkeysImg = document.getElementById("ArrowKeys");
var posX = (boundaryBox.offsetWidth -player.offsetWidth) / 2;
var posY = 100;
var gravity = 0.05;
var jumpHeight = 0.2;
var vel = 0.05;
var speed = 8;
var start =false;
var isGrouned = false;

var boxheight =485;




function Movement(e){
  if (start == false)
  {
    player.style.top = posY+ 'px';
    player.style.left = posX+ 'px';
    start = true;
  }
  arrowkeysImg.style.display = "none";
  boundaryBox.style.display = "block";
  boxheight = boundaryBox.offsetHeight;
  //arrowkeys.style.display = "none";
  if(e.keyCode==39)
  {
    posX+=speed;
    player.style.left = posX + 'px';
    if(posX >= boundaryBox.offsetWidth -player.offsetWidth)
    {
      posX -=speed;
    }
  }
  if(e.keyCode==37)
  {
    posX-=speed;
    player.style.left = posX + 'px';
    if(posX <= 0)
    {
      posX +=speed;
    }
   
  }
  if(e.keyCode==38 && isGrouned)
  {
    for (let i = 0; i < boxheight; i++) {
    posY-=jumpHeight;
    
    }
  }
  
}
function update(progress) {
  if(start == false)
  {
  return;

  }
  vel = gravity + vel;
  posY+=vel;
  player.style.top = posY + 'px';
  if(posY > boxheight -player.offsetHeight)
  {
    isGrouned = true
  posY-=vel;
  vel = 0.05;
  
  } else{
    isGrouned = false;
  }
  

// Update the state of the world for the elapsed time since last render
}

function loop(timestamp) {
var progress = timestamp - lastRender

update(progress)

lastRender = timestamp
window.requestAnimationFrame(loop)
}
var lastRender = 0
window.requestAnimationFrame(loop)

document.onkeydown = Movement;
//document.onkeypress = Movement();
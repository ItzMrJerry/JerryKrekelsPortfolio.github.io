window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/10);
    arrowkeysImg = document.getElementById("ArrowKeys");
}
posX=posY=10;
gs=tc=20;
appleX=appleY=15;
DirX=DirY=0;
trail=[];
tail = 5;
function game() {
    posX+=DirX;
    posY+=DirY;
    if(posX<0) {
        posX= tc-1;
    }
    if(posX>tc-1) {
        posX= 0;
    }
    if(posY<0) {
        posY= tc-1;
    }
    if(posY>tc-1) {
        posY= 0;
    }
    ctx.fillStyle="#242b3d";
    //ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==posX && trail[i].y==posY) {
            tail = 5;
        }
    }
    trail.push({x:posX,y:posY});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(appleX==posX && appleY==posY) {
        tail++;
        appleX=Math.floor(Math.random()*tc);
        appleY=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(appleX*gs,appleY*gs,gs-2,gs-2);
}
function keyPush(evt) {
    arrowkeysImg.style.display = "none";
    canv.style.display = "block";
    switch(evt.keyCode) {
        case 65:
            DirX=-1;DirY=0;
            break;
        case 87:    
            DirX=0;DirY=-1;
            break;
        case 68:
            DirX=1;DirY=0;
            break;
        case 83:
            DirX=0;DirY=1;
            break;
    }
}

// FitToContainer(canv);
// function FitToContainer(canvas){
//     canvas.style.width='100%';
//   canvas.style.height='100%';
//   canvas.width  = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// }
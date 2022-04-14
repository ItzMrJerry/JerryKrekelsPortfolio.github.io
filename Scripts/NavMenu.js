class WorkPiece{
  constructor(ImgName,Text,projectName){
    this.ImgName = ImgName;
    this.Text = Text;
    this.projectName = projectName;
  }
}

let work1 = new WorkPiece("LunchRushThumbnail.png",
"Lunch Rush was een Arcade Project van school waarin ik als solo developer samen met Artists een game hadden gemaakt. Het is een Rythm game waarin een dief je lunch heeft gestolen en jij gaat er achteraan om de dief te pakken. Onder tussen gooit de dief SkullNotes die naar je toe komen op de beat. Aan het einden van het level kom je dicht genoeg bij de dief en moet je snel spam attaks doen om de dief te verslaan. hierna komt je scoren op op beeld en je hoogste combo die je gehaald had. Ik was een tijdje later terug gekomen naar dit project en had een feature gemaakt om custom songs toe tevoegen en daar voor een eigen level kan recorden en daarna spelen"
,"Lunch Rush");

let work2 = new WorkPiece("CellThumbnail.png",
"Cell Battle was een random project die ik gemaakt had omdat mij het leuk leek om een eigen Agar.io na temaken. het is SinglePlayer maar voor de rest is alles heel percies na gemaakt als de echte Agar.io zoals cells die door de map spawnen, het splitsen van de speler met een limit als je te klein bent, het mergen na een tijd als je gesplitst was, de oppervlakte van een cell wordt correct toegevoegt en de spelers oppervlakte"
,"Cell Battle");
let work3 = new WorkPiece("ZombieSimulatorThumbnail.png",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit atque vero optio libero ab cumque! Nesciunt assumenda, et ratione ex aut, dolorem praesentium illo laboriosam natus laborum quia distinctio! Quam ipsam fuga"
,"Zombie Simulator");
let work4 = new WorkPiece("SwingBackThumbnail.png",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit atque vero optio libero ab cumque! Nesciunt assumenda, et ratione ex aut, dolorem praesentium illo laboriosam natus laborum quia distinctio! Quam ipsam fuga"
,"SwingBack");
let work5 = new WorkPiece("CubeCraft.png",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit atque vero optio libero ab cumque! Nesciunt assumenda, et ratione ex aut, dolorem praesentium illo laboriosam natus laborum quia distinctio! Quam ipsam fuga"
,"CubeCraft");
let work6 = new WorkPiece("TodoApp.png",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure velit atque vero optio libero ab cumque! Nesciunt assumenda, et ratione ex aut, dolorem praesentium illo laboriosam natus laborum quia distinctio! Quam ipsam fuga"
,"ToDoApp");

let WorkArray = [work1,work2,work3,work4,work5,work6];

function myfunction() {
    var x = document.getElementById("NavMenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function WhenScrolling()
      {
        var x = document.getElementById("NavMenu");
        if (x.style.display === "block"){

        x.style.display = "none";
        }

        HideWork();
      }


  let lastindex = 0;

  function displayWork(index){
    lastindex = index;
    console.log(lastindex);
    document.getElementById("overlay").style.display = "block";
    document.getElementById("PortfolioH1").innerText = WorkArray[index].projectName;
    document.getElementById("PortfolioWorkText").innerText = WorkArray[index].Text;
    
    console.log(WorkArray[index].ImgName);
    document.getElementById("PortfolioImg").src="Images/" + WorkArray[index].ImgName;
  }

  function ShowNeighbour(neighbour){
    if (neighbour == "true"){
      if (lastindex + 1 > WorkArray.length - 1) lastindex = -1;
      parseInt(lastindex);
      displayWork(lastindex + 1)
      console.log("true next");
    }else if (neighbour == "false"){
      if (lastindex - 1 < 0) lastindex = WorkArray.length;

      console.log("false previous");
      displayWork(lastindex - 1)
    } else{
      console.log("Not working");
    }
    
  }

  function HideWork(){
    if (document.getElementById("overlay").style.display == "block")
    document.getElementById("overlay").style.display = "none";
  }

  function ScrollToDiv(IDname){
    document.getElementById(IDname).scrollIntoView();
  }


  window.addEventListener('scroll', function() {
    var element = document.querySelector('#AboutMeIMG');
    var position = element.getBoundingClientRect();
  
    // checking whether fully visible
    if(position.top >= 0 && position.bottom <= window.innerHeight) {
      console.log('Element is fully visible in screen');
    }
  
    // checking for partial visibility
    if(position.top < window.innerHeight && position.bottom >= 0) {
      console.log('Element is partially visible in screen');
    }
  });

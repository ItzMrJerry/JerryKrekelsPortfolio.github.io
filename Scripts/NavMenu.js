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
"Zombie Simulator was een project van een jaar geleden waar ik probeerde Call of duty Zombies na temaken. In dit project heb ik heel veel verschillenden dingen geleerd zoals Unity path finding systeem NavMesh, shaders Graph, animation tree en level design en nog een heleboel kleinere dingen."
,"Zombie Simulator");
let work4 = new WorkPiece("SwingBackThumbnail.png",
"Swing back is een mobile game waar je moet slingeren naar de finish line alleen de swing mechanic is anders dan een touw het is eerder een arm die samen trekt. Hiermee kan je hele interessante level design maken wat je normaal niet ziet van swing games."
,"SwingBack");
let work5 = new WorkPiece("CubeCraft.png",
"CubeCraft is een project die ik een twee dagen had gemaakt het is een minecraft clone met hele simpele terrein generatie met een vaste groote waar je een heleboel blokken kan plaatsen en breken. Dit was wel meer een test project en is voor de rest niet erg geoptimaliseerd maar heb als nog veel geleerd."
,"CubeCraft");
let work6 = new WorkPiece("TodoApp.png",
"ToDoApp was een school project van vorige jaar waar je een lijst kan maken met dingen doe je nog moet doen. je kan een nieuwe taak toevoegen, afvinken en verwijderen en word automatisch opgeslagen als je een aanpassing maakt. Er was ook een trash bin waar alles wat je verwijderd heb inkomt te staan Daardoor kan je terug zien wat je gedaan hebt of de taak terug halen als je het perongelijk verwijderd hebt. Ik heb met dit project veel geleerd over het opslaan van data en over Unitys Vertical layout group."
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
    lastindex = parseInt(lastindex);
    if (neighbour == "true")
    {
      if (lastindex + 1 > WorkArray.length - 1) lastindex = -1;
      displayWork(lastindex + 1)
    } else
    if (neighbour == "false"){
      if (lastindex - 1 < 0) lastindex = WorkArray.length;
      displayWork(lastindex - 1)
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

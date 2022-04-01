class WorkPiece{
  constructor(ImgName,Text,projectName){
    this.ImgName = ImgName;
    this.Text = Text;
    this.projectName = projectName;
  }
}

let work1 = new WorkPiece("Mulitplayer_test.png",
"kaas is kei lekker man"
,"Mulitplayer_test1");

let work2 = new WorkPiece("ProjectsRoestIMG.png",
"testing roest"
,"ProjectsRoestIMG2");
let work3 = new WorkPiece("SpaceRocketSimulator.png",
"YEEET"
,"SpaceRocketSimulator3");
let work4 = new WorkPiece("Mulitplayer_test.png",
"testing"
,"Mulitplayer_test4");
let work5 = new WorkPiece("ProjectsRoestIMG.png",
"testing"
,"ProjectsRoestIMG5");
let work6 = new WorkPiece("SpaceRocketSimulator.png",
"testing"
,"SpaceRocketSimulator6");

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

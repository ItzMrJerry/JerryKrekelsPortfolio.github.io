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
      }

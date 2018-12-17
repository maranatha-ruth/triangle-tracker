

    function triangle(){
      var firstSide =parseInt(document.getElementById("firstSide").value);
      var secondSide=parseInt(document.getElementById("secondSide").value);
      var thirdSide=parseInt(document.getElementById("thirdSide").value);
      
      if (firstSide===secondSide && firstSide===thirdSide && secondSide===thirdSide){
        alert("Equilateral");
      }
      else if(firstSide===secondSide || firstSide===thirdSide || secondSide===thirdSide){
      alert("Isosceles");
    }

      else if(firstSide!==secondSide && firstSide!==thirdSide && secondSide!==thirdSide){
        alert("Scalene")
      }
      else if(firstSide+secondSide<=thirdSide||firstSide+thirdSide<=secondSide||){
        alert("not a triangle")
      }
      
      
      else{
        alert("invalid");
      }
    }
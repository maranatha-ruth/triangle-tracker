

function triangle() {
  var firstSide = parseInt(document.getElementById("firstSide").value);
  var secondSide = parseInt(document.getElementById("secondSide").value);
  var thirdSide = parseInt(document.getElementById("thirdSide").value);

  var sides =["firstSide", "secondSide", "thirdSide"]
  sides.forEach(function(side) {
    console.log(" Side's number is " + side)
});
  sides[0];
  side[1];
  side[2];


  if (firstSide + secondSide > thirdSide &&
    firstSide + thirdSide > secondSide &&
    secondSide + thirdSide > firstSide) {


    if (firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide) {
      alert("Equilateral");
    }
    else if (firstSide === secondSide || firstSide === thirdSide || secondSide === thirdSide) {
      alert("Isosceles");
    }

    else if (firstSide !== secondSide && firstSide !== thirdSide && secondSide !== thirdSide) {
      alert("Scalene")
    }
  }


  else {
    alert("not a triangle");
  }
};


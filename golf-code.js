/*
Golf Code Challange from freeCodeCamp
Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
Strokes	Return
1	        "Hole-in-one!"
<= par - 2	"Eagle"
par - 1	    "Birdie"
par	        "Par"
par + 1	    "Bogey"
par + 2	    "Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

golfScore(4, 1) should return "Hole-in-one!"
golfScore(4, 2) should return "Eagle"
golfScore(5, 2) should return "Eagle"
golfScore(4, 3) should return "Birdie"
golfScore(4, 4) should return "Par"
golfScore(1, 1) should return "Hole-in-one!"
golfScore(5, 5) should return "Par"
golfScore(4, 5) should return "Bogey"
golfScore(4, 6) should return "Double Bogey"
golfScore(4, 7) should return "Go Home!"
golfScore(5, 9) should return "Go Home!" 
*/

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes == 1){
    return names[0];
  }else if(strokes <= par - 2){
    return names[1];
  }else if(strokes == par - 1 ){
    return names[2];
  }else if(strokes == par){
    return names[3];
  }else if(strokes == par +1){
    return names[4];
  }else if(strokes == par+2){
    return names[5];
  }else{
    return names[6];
  }

  return "Change Me"; //If there is mistake, it returns "Change Me"
}

golfScore(5, 4);

console.log(golfScore(5,9)); //I used that to check conditions.


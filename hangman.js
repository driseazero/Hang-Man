
//variables
$(document).ready(function() {

var wins = 0; 
var loses = 0;
 var lettersGuessed = [];
   var words = ["magnolia","rose","daisy"];
  var guessesLeft =0;
var pickedWord= "";
var pickedWordArray = [];
var pickedWordPlaceHolders= "";
}

//funcitons
 //FUNCTION 1
     // newGame
     function newGame(){
       // reset guessesLeft
       guessesLeft=5;
       // empty out pickedWordPlaceholders
       pickedWordPlaceholders=[];
       $("pickedWordPlaceholders").empty();
       // empty out lettersGuessed (both array and DOM)
       $("lettersGuessed").empty();
       // change pickedWord (using Math.floor(Math.random() * array.length)))
       console.log(wordBank);
       var index = [Math.floor(Math.random() * wordBank.length)];
       pickedWord = wordBank[index];
       // split pickedWord into an array (array.split(""))
       console.log(pickedWord);
       pickedWordArray=pickedWord.split("");
       console.log( pickedWordArray);
       // loop over pickedWordArray and create blank dashes for our placeholders
        for(var i = 0; i < pickedWordArray.length; i++){
       // placerholders.join(" ") to the DOM
       pickedWordPlaceholders.push("_");


        }
        console.log(pickedWordPlaceholders);
       }
     // END FUNCTION 1
     newGame();
	
}
//newGame


 //resetGuessesLeft
 //empty out PickedWordPlaceHolders
 //empty LettersGuessed (both  array and DOM)

 //change pickedWord using Math.Floor(Math.random() * array.length))
 //plit pickWord into an array (array.split(","))
 //loop over pickedWordArray and create blank dashes for our place holders

 // placeHolders.join(" ") to the DOM. 

 // letterPressed(valueOfLetterPressed)
   // run a for loop over our pickedWordArray 
   // if valOfletterPressed === pickedWordArray[i]
   // it's a match, placeHoldersArray 

//event listeners

//New Game Button
// run newGame function 

// 
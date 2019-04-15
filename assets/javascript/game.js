/*game starts automatically with computer generated number to match.
    crystals are given random value at the start of each game. 
    with each new game, crystal value changes. 
    at the end of the game, win or loss, tallies are marked and computer auto gen new number.
    user then starts over with guessing using new crystal values*/

//Wait for everything to be ready on the page before starting
    $(document).ready(function(event) {

//Global variables for the game.
    var computerPick = Math.floor(Math.random() * 100) + 19;
        console.log(computerPick);
    var crystal = Math.floor(Math.random() * 12) + 1;
        console.log(crystal);
        //not sure, yet, if i will need to make a random for each colored crystal or if i can just use this.
    var red = parseInt(Math.floor(Math.random() * 12) + 1);
    var blue = parseInt(Math.floor(Math.random() * 12) + 1);
    var pink = parseInt(Math.floor(Math.random() * 12) + 1);
    var purple = parseInt(Math.floor(Math.random() * 12) + 1);

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    
    //Display wins, losses, computer pick and total score text:
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#total-score').text(totalScore);
    $('#computer-pick').text(computerPick);
    
    //Reset function for the game:
    function reset() {
        computerPick;
        red;
        blue;
        pink;
        purple;
        totalScore = 0;
    }

    $("#button-red").on("click", function() {
        console.log(red)
    })
    
    
    })   

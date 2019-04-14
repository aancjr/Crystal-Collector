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
        red = Math.floor(Math.random() * 12) + 1;
        console.log(red);
        blue = Math.floor(Math.random() * 12) + 1;
        console.log(blue);
        pink = Math.floor(Math.random() * 12) + 1;
        console.log(pink);
        purple = Math.floor(Math.random() * 12) + 1;
        console.log(purple);
        totalScore = 0;
    }

    $(".crystal").on("click", function() {
        console.log($(this).val());


    })
        



    })   

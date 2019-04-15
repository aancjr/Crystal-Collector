/*game starts automatically with computer generated number to match.
    crystals are given random value at the start of each game. 
    with each new game, crystal value changes. 
    at the end of the game, win or loss, tallies are marked and computer auto gen new number.
    user then starts over with guessing using new crystal values*/

//Wait for everything to be ready on the page before starting
$(document).ready(function(event) {
    
    //Global variables for the game.
    var computerPick = Math.floor(Math.random() * 100) + 19;
        $('#computer-pick').text(computerPick);
    var red = parseInt(Math.floor(Math.random() * 12) + 1);
    var blue = parseInt(Math.floor(Math.random() * 12) + 1);
    var pink = parseInt(Math.floor(Math.random() * 12) + 1);
    var purple = parseInt(Math.floor(Math.random() * 12) + 1); 
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    
    //Reset function to get the game back to the start after a user wins or looses.
    function resetGame() {
        computerPick = Math.floor(Math.random() * 100) + 19;
            $('#computer-pick').text(computerPick);
        totalScore = 0;
            $('#total-score').text(totalScore);
        red = parseInt(Math.floor(Math.random() * 12) + 1);
        blue = parseInt(Math.floor(Math.random() * 12) + 1);
        pink = parseInt(Math.floor(Math.random() * 12) + 1);
        purple = parseInt(Math.floor(Math.random() * 12) + 1);
    }

    //Each crystal has it's own function and if/else for the gameplay.
        $("#button-red").on("click", function() {
            console.log(red)
            totalScore += red;
                $('#total-score').text(totalScore);
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }
            
            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
        })
        
        $("#button-blue").on("click", function() {
            console.log(blue)
            totalScore += blue;
                $('#total-score').text(totalScore);

            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }

            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
        })
        
        $("#button-pink").on("click", function() {
            console.log(pink)
            totalScore += pink;
                $('#total-score').text(totalScore);

            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }
            
            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
        })
        
        $("#button-purple").on("click", function() {
            console.log(purple)
            totalScore += purple;
                $('#total-score').text(totalScore);
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }

            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            } 
        })        
    })   
    
    
/*game starts automatically with computer generated number to match.
    crystals are given random value at the start of each game. 
    with each new game, crystal value changes. 
    at the end of the game, win or loss, tallies are marked and computer auto gen new number.
    user then starts over with guessing using new crystal values*/

//Wait for everything to be ready on the page before starting
//Reset function for the game:
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
    
        $("#button-red").on("click", function() {
            
            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }
            
            console.log(red)
            totalScore += red;
                $('#total-score').text(totalScore);
        })
        
        $("#button-blue").on("click", function() {
            console.log(blue)
            totalScore += blue;
                $('#total-score').text(totalScore);

            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }

        })
        
        $("#button-pink").on("click", function() {
            console.log(pink)
            totalScore += pink;
                $('#total-score').text(totalScore);

            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }

        })
        
        $("#button-purple").on("click", function() {
            console.log(purple)
            totalScore += purple;
                $('#total-score').text(totalScore);
            
            if (totalScore === computerPick) {
                wins++;
                    $("#wins").text(wins);
                resetGame ();
            }
            
            if (totalScore > computerPick) {
                losses++;
                    $("#losses").text(losses);
                resetGame ();
            }
        })
        
    
       /* $("#losses").text(losses);
        $('#wins').text(wins);
        $('#total-score').text(totalScore);*/
        
    })   
    
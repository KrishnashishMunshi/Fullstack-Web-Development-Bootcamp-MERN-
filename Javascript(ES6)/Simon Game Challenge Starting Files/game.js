var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;

var level = 0;


$(document).on("keydown", function(){
    if(!started){


        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
    
});

function nextSequence(){
    level++;
    $("h1").text("Level "+level);

    var randomNumber = Math.floor(4*(Math.random()));
    var randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("."+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}




function playSound(name){
    switch (name){
        case "red":
            var red = new Audio("sounds/red.mp3");
            red.play();
            break;
        case "blue":
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            break;
        case "green":
            var green = new Audio("sounds/green.mp3");
            green.play();
            break;
        case "yellow":
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            break;
        default:
            break;

    }       
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===level){
            setTimeout(function(){
                nextSequence();
                userClickedPattern=  [];
            },1000);
            
        }
        
        console.log("success!");
    }else{
        var wrong = new Audio("sounds/wrong.mp3");
        
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        console.log("wrong");
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern=[];
    started = false;
}
for(var i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",play);
}

function play()
{
    var htm= this.innerHTML;
    sound(htm);
}

document.addEventListener("keydown",function(event){
    sound(event.key);
});    

var kick= new Audio("sounds/cymatic.wav");
var snare= new Audio("sounds/snaretrap.wav");
var tom1= new Audio("sounds/tom-1.mp3");
var tom2= new Audio("sounds/tom-2.mp3");
var tom3= new Audio("sounds/tom-3.mp3");
var tom4= new Audio("sounds/tom-4.mp3");
var crash= new Audio("sounds/crash.mp3");
var hats= new Audio("sounds/hats.wav");

function sound(key)
{
    switch (key) {
        case "a":
            kick.play();
            
            break;
        case "s":
            snare.play();
            break;
        case "m":
            hats.play();
            break;
        case "l":
            crash.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "w":
            tom4.play();
            break;
    
        default:
            break;
    }
}

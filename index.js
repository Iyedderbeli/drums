function check(html){
    switch (html) {
        case "z":
            var crash=new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "q":
            var kick=new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare=new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1=new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
            case "j":
            var tom2=new Audio("./sounds/tom-2.mp3");
            tom2.play();
        case "k":
            var tom3=new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4=new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        
    
            
         
        default:
            console.log(html);
            break;
    }
}

for (let index = 0; index < 7; index++) {
   
    document.querySelectorAll("button")[index].addEventListener("click", function(){
        
       var html=this.innerHTML;
       check(html);
       animation(html);

    }); 
    document.addEventListener("keydown",function(event){
        
        check(event.key);
        animation(event.key);
    });
}
function animation(html) {
    var button=document.querySelector("."+html);
    button.classList.toggle("pressed");
    setTimeout(function() {
        button.classList.toggle("pressed");

        
    },100);
    
}

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
    bajao(this.innerHTML);animation(this.innerHTML);
});
}
document.addEventListener("keypress",function(event){
   bajao(event.key);animation(event.key);
});
function bajao(char){
    if(char=='a'){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play(); 
    }
    else if(char=='s'){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(char=='d'){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(char=='j'){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(char=='k'){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(char=='W'){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(char=='l'){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}
function animation(currentkey){
   var activebtn=document.querySelector("."+currentkey);
   activebtn.classList.add("pressed");
   setTimeout(function(){
    activebtn.classList.remove("pressed");
   },100);
}

//here we are not adding handleClick not handleClick();
//because after click we want to triget

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
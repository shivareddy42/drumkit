                                          // INDEX JS FILE

var buttonnum=document.querySelectorAll('.drum').length;



// FOR KEYBOARD

document.addEventListener('keydown',function(keyinput1){

  makesound(keyinput1.key);
  clicked(keyinput1.key);
}
);

//FOR BUTTONS

for(var i=0;i<buttonnum;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function(){

    this.style.color='black';
    var thiscontent=this.innerHTML;
    makesound(thiscontent);
    clicked(thiscontent);
});
}

function makesound(exp){
  switch (exp) {
    case 'w':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case 'a':
        var tom2=new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case 's':
        var tom3=new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case 'd':
        var tom4=new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    case 'j':
        var snare=new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case 'k':
        var crash=new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case 'l':
        var kick=new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    default: console.log(exp);
}
}

function clicked(event){
  document.querySelector("."+event).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+event).classList.remove("pressed");
  },100);
}

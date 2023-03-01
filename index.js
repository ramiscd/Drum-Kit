//detecting button pressed
for (var i = 0; i <= 7; i++) {//crio um laço de repetição que será executado o número de vezes que o processo precisa ser executado
  document.querySelectorAll("button")[i].addEventListener("click", function (){//Adiciono o contador a variavel que vai me dar os diferêntes botões

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

  });
}
//detecting keyboard pressed

document.addEventListener("keypress",function(event) {
  makeSound(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

    case "a":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

    case "s":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

    case "d":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;

    case "j":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

    case "k":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

    case "l":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

    default: console.log(buttonInnerHTML);
  }
}

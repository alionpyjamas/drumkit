let address = document.querySelectorAll(".drum");

for(let i=0;i<address.length;i++){
address[i].addEventListener("click", function () {
    let buttonhtml = this.innerHTML;
    console.log(buttonhtml);
    sound(buttonhtml);
    buttonpress(buttonhtml);
  });
}

document.addEventListener('keydown',(event)=>{
  sound(event.key);
  buttonpress(event.key);
})


function sound(key) {
  switch (key) {
    case 'w': let crash = new Audio('sounds/crash.mp3');
    crash.play()
      
      break;

    case 'a': let kick = new Audio('sounds/kick-bass.mp3');
    kick.play();

      break;
    
    case 's': let snare = new Audio('sounds/snare.mp3');
    snare.play();

    break;

    case 'd': let tom = new Audio('sounds/tom-1.mp3');
    tom.play();

    break;

    case 'j': let tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();

    break;

    case 'k': let tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();

    break;

    case 'l': let tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();

    break;

    
  }
}


function buttonpress(keypressed){

  let keypress = document.querySelector(`.${keypressed}`);

keypress.classList.add("pressed");

setTimeout(()=>{
  keypress.classList.remove("pressed");},100)


}
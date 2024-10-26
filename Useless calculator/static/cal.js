const display = document.getElementById("Input-box");
const buttons = document.querySelectorAll("button");
const equalsBtn = document.getElementById("equals-btn");
  function appendtodisplay(input)
  {
      display.value += input;
      const current = eval(display.value); 
      if(current == Infinity)
      {
        showModal("Nuh uh, what do you think you're doing! 🤔");
      }
      checkOperations();
      checkEasterEggs();
      checkForBrightMode();
  }
  function clearinput() 
  {
      display.value = " ";
  } 
  const easterEggs = {
    "69": "69? That's a classic! Time for a little fun and games! 😜",
    "911":"Element of Suprise💣"
  };
  function calculate() {
    
    const randomResponse = Math.random();
    
    setTimeout(() => {
        if (randomResponse < 0.2) {

            promptUserForAnswer();  
            
        } else if (randomResponse < 0.4) {
            
            display.value = Math.floor(Math.random() * 10000);
            showModal("Totally calculated that one! 🤔🎲 (Randomly picked it, but still...)");
        } else if (randomResponse < 0.6) {
            
            display.value = "0";
            showModal("Oops! I forgot how to math. Here's a zero instead. 🤷‍♂️💩");
        } else if (randomResponse < 0.8) {
            
            display.value = Math.pow(10, 10);
            showModal("Congrats, you broke it. Enjoy this massive number! 🎉💥");
        } else {
            
            showModal("Too sleepy to calculate... 💤");
        }
    }); 
}

const modal = document.querySelector('.modal');
const modalMessage = document.getElementById('modal-message');
const modalBtn = document.querySelector('.modal-btn');


function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}


modalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
function promptUserForAnswer() {
    
    let userAnswer = prompt("Oh, come on! You really need to type this out? Get it together! 🤦‍♂️");
    if (userAnswer !== null && userAnswer !== "" && userAnswer == eval(display.value)) {
        display.value = userAnswer;
        showModal("Surprising! Did you finally remember how to count? 🙄");
    } else {
        showModal("Seriously? You stuuupidd! 🤦‍♂️");
    }
}

function animateButton(button) {
    
    button.style.transition = 'transform 0.3s ease';
    const randomAngle = Math.floor(Math.random() * 360) + 'deg';
    const randomScale = Math.random() * 0.5 + 0.75; 
    button.style.transform = `rotate(${randomAngle}) scale(${randomScale})`;

    
    setTimeout(() => {
        button.style.transform = 'none';
    }, 500);
}
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        animateButton(button);          
    });

});
function checkOperations() {
    const operations = display.value.match(/[\+\-\*\/]/g);
    if (operations && operations.length > 4) {
      activateChasingEquals();
    } else {
      equalsBtn.classList.remove('chase');
    }
  }
  function activateChasingEquals() {
    equalsBtn.addEventListener("mouseover", moveEqualsButton);
  }
  function moveEqualsButton() {
    const calculator = document.querySelector('.Calculator');
    const calculatorRect = calculator.getBoundingClientRect();
    const equalsRect = equalsBtn.getBoundingClientRect();
  
    const maxX = calculatorRect.width - equalsRect.width;
    const maxY = calculatorRect.height - equalsRect.height;
  
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  
    equalsBtn.style.position = "absolute";
    equalsBtn.style.left = `${randomX}px`;
    equalsBtn.style.top = `${randomY}px`;
  }
  function checkEasterEggs() {
    const currentInput = display.value;
    
    if (easterEggs[currentInput]) {
      showModal(easterEggs[currentInput]);
      display.value = ""; 
      createConfetti(); 
      if(currentInput == "69")
      {
        turnKeysToSix(); 
      }
      else if(currentInput == "911")
      {
        explodeCalculator();
      }
    }
  }
  function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);
  
    for (let i = 0; i < 100; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.className = 'confetti-piece';
      confettiPiece.style.left = Math.random() * 100 + 'vw';
      confettiPiece.style.animationDuration = Math.random() * 2 + 2 + 's';
      confettiPiece.style.opacity = Math.random();
      confettiContainer.appendChild(confettiPiece);
    }
  
    setTimeout(() => {
      document.body.removeChild(confettiContainer);
    }, 4000);
 }
 function turnKeysToSix() {
    buttons.forEach(button => {
      button.textContent = "6";
      button.classList.add('rotate'); 
    });
  }
  function explodeCalculator() {
    buttons.forEach(button => {
      button.classList.add('explode');
      button.style.transform = `rotate(${Math.random() * 360}deg)`;  // Random rotation
      button.style.transition = 'transform 1.5s ease-out';
    });
  }
  function enableBrightMode() {
    document.body.classList.add('bright-mode');  
  }
  
  function disableBrightMode() {
    document.body.classList.remove('bright-mode'); 
  }
  
  function checkForBrightMode() {
    if (display.value.includes("123")){ 
        showModal("Ready to blast your eyes with brightness! ☀️✨");
      enableBrightMode();
    }
    else {
      disableBrightMode();
    }
}
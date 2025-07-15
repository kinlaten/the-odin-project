let round_number = 1;
let human_score = 0;
let computer_score = 0;

const choice_button = document.getElementsByClassName('choice--button');
const counterDisplay = document.getElementById('counter')
function playRound(event){
    
    round_number++;
    counterDisplay.textContent = round_number;
    alert(getResult(event.target.value))
    if (round_number==6) {
            alert(getSummary());
            location.reload();
            return
        } 
}

function getResult(human_choice_string){
    computer_choice = Math.floor(Math.random() * 10) % 3 + 1
    human_choice= human_choice_string== 'rock' ? 1 : human_choice_string== 'paper' ? 2 : human_choice_string== 'scissors' ? 3 : null

    if (human_choice == null){
        return ('Invalid choice')
    }
    else if(computer_choice == human_choice){
        return('Tied')
        
    }
    else if (computer_choice == 1 && human_choice == 3){
        computer_score++;
        return('You lose')
    }
    else if (computer_choice > human_choice){
        computer_score++;
        return('You lose')

    }
    else{
        human_score++;
        return('You win')
    }
}

function getSummary(){
    return human_score < computer_score ? 'End game!! You lose a computer' : human_score > computer_score? 'End game !! You win a computer' : 'End game!! Tied game' 
}

Array.from(choice_button).forEach(button => {
    button.addEventListener('click', playRound);
});

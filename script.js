
let sign = prompt("Make a choice..");
let playerSelection
if (sign.toLowerCase() == "paper") 
{
  playerSelection="paper"
}
else if (sign.toLowerCase() == "rock")
{
    playerSelection="rock"
}
else if(sign.toLowerCase() == "scissors")
{
    playerSelection="scissors"
}
else{
    alert("wront input")
}

function computerPlay()
{
    let random=Math.floor(Math.random() * 2);
    if(random==0)
        return "rock";
    else if(random==1)
        return "scissors";
    else
        return "paper";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection=="paper")
    {
        if(computerSelection=="rock")
            alert("you won, computer selection: rock")
        else if(computerSelection=="paper")
            alert("tie,computer selection: paper ")
        else
            alert("you won,computer selection: scissors ")
    }
    else if(playerSelection=="rock")
    {
        if(computerSelection=="rock")
            alert("tie, computer selection: rock")
        else if(computerSelection=="paper")
            alert("you lost,computer selection: paper ")
        else
            alert("you won,computer selection: scissors ")
    }
    else if(playerSelection=="scissors")
    {
        if(computerSelection=="scissors")
            alert("tie , computer selection: scissors")
        else if(computerSelection=="paper")
            alert("you lost,computer selection: paper ")
        else
            alert("you lost,computer selection: rock ")
    }

  }
  
  
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
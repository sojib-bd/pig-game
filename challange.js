// 1. A Player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
// ( Hint: Always save the previous dice roll in a seperate variable)

// 2. Add an input field to the HTML where player can set the Winning score, so that they can change
//  the predefined score of 100

// (Hint: you can read that value with the .value property in javaScript.
// This is a good oportunity to use google to figure this out.)

// 3. add another dice to the game, so that there are two dice now. The player
//  looses his current score when one of them is a 1


// ( Hint: you will need css to position the second dice,so take a look at the csscode fot the first one.)


var scores,roundScore,activePlayer,gamePlaying;

var lastDice;


init();

document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gamePlaying){

		


		//1.Random Number
		var dice=Math.floor(Math.random()*6)+1;
		//console.log(dice)
		var dice2=Math.floor(Math.random()*6)+1;
		//console.log(dice2)

		//Hold the previous dice roll

		// var previous=dice;

		//2.Display the result
		var diceDOM=document.querySelector('.dice');
		var diceDOM2=document.querySelector('.dice2');

		diceDOM.style.display='block';
		diceDOM2.style.display='block';
		diceDOM.src='dice-'+ dice + '.png';
		diceDOM2.src='dice-'+ dice2 + '.png';

		
		
		//3.Update the round score if the rolled number was Not 1.
		


		if(dice===6 && lastDice===6){

			scores[activePlayer]=0;
			document.getElementById('score-'+activePlayer).textContent='0';
			nextPlayer();

		}

		else if(dice!==1 && dice2!==1){
			//add score
			roundScore+=dice+dice2;
			document.querySelector('#current-'+ activePlayer).textContent=roundScore;
		}
		
		else{
			//Next player
			nextPlayer();
		}

		lastDice=dice;

	}

	
})

document.querySelector('.btn-hold').addEventListener('click',function(){

	if(gamePlaying){
		scores[activePlayer]+=roundScore;

		document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

		var input=document.querySelector('#input').value;
		var winningScore;

		if(input){
			winningScore=input
		}
		else{
			winningScore=100
		}

		if(scores[activePlayer]>=winningScore){
			document.querySelector('#name-'+activePlayer).textContent="Winner!";
			document.querySelector('.dice').style.display="none";
			document.querySelector('.dice2').style.display="none";
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
			gamePlaying=false;
			
		}
		else{

			nextPlayer();
		}

	}

	


	

})

document.querySelector('.btn-new').addEventListener('click',init);



function init(){
	scores=[0,0];
    roundScore=0;
	activePlayer=0;
	gamePlaying=true;

	document.getElementById('score-0').textContent='0';
	document.getElementById('current-0').textContent='0';
	document.getElementById('score-1').textContent='0';
	document.getElementById('current-1').textContent='0';
	// document.getElementById('input').value='none';
	document.querySelector('.dice').style.display="none";
	document.querySelector('.dice2').style.display="none";

	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.add('active');

	document.querySelector('#name-0').textContent="player-1";
	document.querySelector('#name-1').textContent="player-2";




}

function nextPlayer(){
		activePlayer===0 ? activePlayer=1 : activePlayer=0;
		roundScore=0;

		document.getElementById('current-0').textContent='0';
		document.getElementById('current-1').textContent='0';


		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display='none'
		document.querySelector('.dice2').style.display="none";


}





// 1. A Player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
// ( Hint: Always save the previous dice roll in a seperate variable)

// 2. Add an input field to the HTML where player can set the Winning score, so that they can change
//  the predefined score of 100

// (Hint: you can read that value with the .value property in javaScript.
// This is a good oportunity to use google to figure this out.)

// 3. add another dice to the game, so that there are two dice now. The player
//  looses his current score when one of them is a 1


// ( Hint: you will need css to position the second dice,so take a look at the css code fot the first one.)
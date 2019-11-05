$(function(){
  //initialisation des variables de comptage
  let winCount = 0;
  let loseCount = 0;
  let playCount = 0;
  //au click sur le bouton "jouer"
  $('#button').click(function(){
    //incrementation du compteur de parties
    playCount ++;
    //determination du choix de l'ordinateur
    let randomNber = Math.floor(Math.random()*3);
    //recupération du choix du joueur
    let playerChoice = $('.liste').val();
    //comparaison des choix pour determiner le vainqueur
    if (playerChoice == randomNber){
      alert('égalité');
    }
    else if (playerChoice == 2 && randomNber == 0){
      loseCount ++;
      alert('perdu');
    }
    else if (playerChoice == 2 && randomNber == 1){
      winCount ++;
      alert('gagné !');
    }
    else if (playerChoice == 0 && randomNber == 1){
      loseCount ++;
      alert('perdu');
    }
    else if (playerChoice == 0 && randomNber == 2){
      winCount ++;
      alert('gagné !');
    }
    else if (playerChoice == 1 && randomNber == 0){
      winCount ++;
      alert('gagné !');
    }
    else if (playerChoice == 1 && randomNber == 2){
      loseCount ++;
      alert('perdu');
    }
    // calcul du pourcentage de victoires
    let victoryRate = ((winCount*100)/playCount).toFixed(2);
    //affichage des resultats
    alert('Nombre de victoires : ' + winCount + '\nNombre de défaites : ' + loseCount + '\nPourcentage de victoires : ' + victoryRate + '%');
  });
});

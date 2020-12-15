import {Game} from "./game"
import {Team} from "./team"
import {Player} from "./player"


let newGame = new Game();
console.log(newGame);

(<HTMLButtonElement>document.getElementById("team2-hit")).disabled = true;
(<HTMLButtonElement>document.getElementById("generate-result")).disabled = true;

document.getElementById("team1-hit")?.addEventListener('click', function (e){
    newGame.teams[0].currentPlayer.hit();
});


document.getElementById("team2-hit")?.addEventListener('click', function (e){
    newGame.teams[1].currentPlayer.hit();
});

(<HTMLButtonElement>document.getElementById("generate-result")).addEventListener('click', function (){
    newGame.ShowScore();
})
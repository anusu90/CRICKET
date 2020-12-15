import {Player} from "./player"
import {Game} from "./game"

export class Team{
    name:string;
    currentPlayer:Player
    players:Array<Player> = []
    totalScore:number = 0;
    id:number
    inGame:Game

    constructor(teamName:string,game:Game,id:number){
        this.name = teamName
        this.inGame = game;
        this.id = id;
        for (let index = 1; index <=10; index++) {
            this.players.push(new Player (index, `Player-${index}`, this))
        }

        this.currentPlayer = this.players[0]
    }

    changePlayer(){
        let currentPlayerIndex = this.currentPlayer.id -1;
        console.log(currentPlayerIndex);
        
        if (currentPlayerIndex === 9){
            this.inGame.changeTeam()
            console.log('from team.ts',currentPlayerIndex);
        } else  {
            this.currentPlayer = this.players[currentPlayerIndex +1]
        }
    }
}
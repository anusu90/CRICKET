import {Team} from "./team"
import {Game} from "./game"

export class Player{
    id:number;
    name:string;
    score:number = 0;
    playingTeam: Team;
    balls:Array<number> = [];
    numberOfBalls = 0;

    constructor(id:number, playerName:string, team:Team){
        this.id =id;
        this.name = playerName;
        this.playingTeam = team;
    }

    hit(){
        let randScore = Math.floor(Math.random() * 7);
        let e = document.getElementById(`${this.playingTeam.name}-${this.name}-${this.numberOfBalls +1}`)
        if (this.numberOfBalls <5){

            this.balls.push(randScore);
            this.numberOfBalls ++
            this.playingTeam.totalScore += randScore;
            this.score += randScore
            if (e) e.innerHTML = String(randScore)

            this.playingTeam.inGame.scoreCheck();

            if (randScore === 0){
                console.log('player id is ', this.id);
                this.playingTeam.changePlayer()
            }

        } else if (this.numberOfBalls === 5) {
            this.balls.push(randScore);
            this.numberOfBalls ++
            this.score += randScore;
            this.playingTeam.totalScore += randScore;
            if (e) e.innerHTML = String(randScore)

            this.playingTeam.inGame.scoreCheck();

            this.playingTeam.changePlayer();
        }
    }
}
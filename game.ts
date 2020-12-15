import { Player } from "./player";
import {Team} from "./team"

export class Game{
    teams:Array<Team> = [];
    // manOfMatch: <Player>{};
    playingTeam: Team;
    flag:number = 0;
    innerTimer: any = () => {};
    innerTimeOut:any = () => {};
    
    constructor(){
        for (let index = 1; index <= 2; index++) {
            this.teams.push(new Team(`Team-${index}`,this, index))
        }

        this.playingTeam = this.teams[0]

        this.teams.forEach((team,i) => {
            let tbody = document.getElementById(`tbody-team${i+1}`)
            team.players.forEach((player) => {
                let tr = document.createElement('tr')
                let td1 = document.createElement('td')
                td1.innerHTML = player.name;
                tr.appendChild(td1);
                tbody?.appendChild(tr);
                let b1 = document.createElement('td')
                b1.setAttribute('id',`${team.name}-${player.name}-1`)
                let b2 = document.createElement('td')
                b2.setAttribute('id',`${team.name}-${player.name}-2`)
                let b3 = document.createElement('td')
                b3.setAttribute('id',`${team.name}-${player.name}-3`)
                let b4 = document.createElement('td')
                b4.setAttribute('id',`${team.name}-${player.name}-4`)
                let b5 = document.createElement('td')
                b5.setAttribute('id',`${team.name}-${player.name}-5`)
                let b6 = document.createElement('td')
                b6.setAttribute('id',`${team.name}-${player.name}-6`)
                let total = document.createElement('td')
                total.setAttribute('id',`${team.name}-${player.name}-total`)
                tr.append(b1,b2,b3,b4,b5,b6,b6,total)
            })
        })
    }

    changeTeam(){
        console.log('I am here')
        let currentTeamIndex = this.playingTeam.id - 1
        this.flag = 0;
        this.myTimer();
        if (currentTeamIndex === 0) {
            this.playingTeam = this.teams[currentTeamIndex+1];
            (<HTMLButtonElement>document.getElementById("team1-hit")).disabled = true;
            (<HTMLButtonElement>document.getElementById("team2-hit")).disabled = false;
        } else if ((currentTeamIndex === 1)){
            this.endGame();
        } 
    }
    scoreCheck () {
        if (this.teams[1].totalScore > this.teams[0].totalScore){
            this.endGame();
        }
    }
    
    endGame(){
        console.log('EndGame');
        this.myTimerStopper();
        (<HTMLButtonElement>document.getElementById("team1-hit")).disabled = true;
        (<HTMLButtonElement>document.getElementById("team2-hit")).disabled = true;
        (<HTMLButtonElement>document.getElementById("generate-result")).disabled = false;

    }

    ShowScore(){

        this.teams.forEach((team) => {
            let temp1 = document.getElementById(`t${team.id}-score`)
            if (temp1) temp1.innerHTML = String(team.totalScore)
            team.players.forEach((player) => {
                let temp = document.getElementById(`${team.name}-${player.name}-total`)
                if(temp) temp.innerHTML = String(player.score);
            })
        })

        let winnerDom = document.getElementById('winner');

        if (this.teams[0].totalScore > this.teams[1].totalScore){
            if (winnerDom) winnerDom.innerHTML = this.teams[0].name
            this.findMOM (this.teams[0]);
        } else{
            if (winnerDom) winnerDom.innerHTML = this.teams[1].name
            this.findMOM (this.teams[1]);
        }

    }

    findMOM(winningTeam:Team){

        let scores = winningTeam.players.map(p => p.score)
        let maxScore = scores.sort((a,b) => b-a)[0]
        let manOfMatch = winningTeam.players.filter(p => p.score === maxScore)[0];

        let momDom = <HTMLElement>document.getElementById('mom');
        momDom.innerHTML = manOfMatch.name;

    }

    myTimerStopper = ()=>  {
        let timer = <HTMLElement>document.getElementById('timer');
        if(timer) timer.innerHTML = String(60);
        console.log('clearing timers');
        clearInterval(this.innerTimer);
        console.log(this.innerTimer);
        clearTimeout(this.innerTimeOut);
        console.log(this.innerTimeOut);
    }

    
    myTimer = () => {

        if (this.flag === 0){

            clearInterval(this.innerTimer);
            clearTimeout(this.innerTimeOut);

            let timer = <HTMLElement>document.getElementById('timer');
            let i = 59;

            this.innerTimer = setInterval(() => {    
                this.flag = 1;
                if(timer) timer.innerHTML = String(i);
                i = i - 1;
                console.log(i);
                
            },1000)

            this.innerTimeOut = setTimeout(() => {
                clearInterval(this.innerTimer);
                this.changeTeam();
                if(timer) timer.innerHTML = String(60);
            },10000)

        }
        
    }




}


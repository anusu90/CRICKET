(()=>{"use strict";var e,t,n=function(){function e(e,t,n){this.score=0,this.balls=[],this.numberOfBalls=0,this.id=e,this.name=t,this.playingTeam=n}return e.prototype.hit=function(){var e=Math.floor(7*Math.random()),t=document.getElementById(this.playingTeam.name+"-"+this.name+"-"+(this.numberOfBalls+1));this.numberOfBalls<5?(this.playingTeam.inGame.myTimer(),this.balls.push(e),this.numberOfBalls++,this.playingTeam.totalScore+=e,this.score+=e,t&&(t.innerHTML=String(e)),this.playingTeam.inGame.scoreCheck(),0===e&&(console.log("player id is ",this.id),this.playingTeam.changePlayer())):5===this.numberOfBalls&&(this.balls.push(e),this.numberOfBalls++,this.score+=e,this.playingTeam.totalScore+=e,t&&(t.innerHTML=String(e)),this.playingTeam.inGame.scoreCheck(),this.playingTeam.changePlayer())},e}(),i=function(){function e(e,t,i){this.players=[],this.totalScore=0,this.name=e,this.inGame=t,this.id=i;for(var a=1;a<=10;a++)this.players.push(new n(a,"Player-"+a,this));this.currentPlayer=this.players[0]}return e.prototype.changePlayer=function(){var e=this.currentPlayer.id-1;console.log(e),9===e?(this.inGame.changeTeam(),console.log("from team.ts",e)):this.currentPlayer=this.players[e+1]},e}(),a=new(function(){function e(){var e=this;this.teams=[],this.flag=0,this.innerTimer=function(){},this.innerTimeOut=function(){},this.myTimerStopper=function(){var t=document.getElementById("timer");t&&(t.innerHTML=String(60)),console.log("clearing timers"),clearInterval(e.innerTimer),console.log(e.innerTimer),clearTimeout(e.innerTimeOut),console.log(e.innerTimeOut)},this.myTimer=function(){if(0===e.flag){clearInterval(e.innerTimer),clearTimeout(e.innerTimeOut);var t=document.getElementById("timer"),n=59;e.innerTimer=setInterval((function(){e.flag=1,t&&(t.innerHTML=String(n)),n-=1,console.log(n)}),1e3),e.innerTimeOut=setTimeout((function(){clearInterval(e.innerTimer),e.changeTeam(),t&&(t.innerHTML=String(60))}),1e4)}};for(var t=1;t<=2;t++)this.teams.push(new i("Team-"+t,this,t));this.playingTeam=this.teams[0],this.teams.forEach((function(e,t){var n=document.getElementById("tbody-team"+(t+1));e.players.forEach((function(t){var i=document.createElement("tr"),a=document.createElement("td");a.innerHTML=t.name,i.appendChild(a),null==n||n.appendChild(i);var r=document.createElement("td");r.setAttribute("id",e.name+"-"+t.name+"-1");var m=document.createElement("td");m.setAttribute("id",e.name+"-"+t.name+"-2");var s=document.createElement("td");s.setAttribute("id",e.name+"-"+t.name+"-3");var o=document.createElement("td");o.setAttribute("id",e.name+"-"+t.name+"-4");var l=document.createElement("td");l.setAttribute("id",e.name+"-"+t.name+"-5");var c=document.createElement("td");c.setAttribute("id",e.name+"-"+t.name+"-6");var d=document.createElement("td");d.setAttribute("id",e.name+"-"+t.name+"-total"),i.append(r,m,s,o,l,c,c,d)}))}))}return e.prototype.changeTeam=function(){console.log("I am here");var e=this.playingTeam.id-1;this.flag=0,this.myTimer(),0===e?(this.playingTeam=this.teams[e+1],document.getElementById("team1-hit").disabled=!0,document.getElementById("team2-hit").disabled=!1):1===e&&this.endGame()},e.prototype.scoreCheck=function(){this.teams[1].totalScore>this.teams[0].totalScore&&this.endGame()},e.prototype.endGame=function(){console.log("EndGame"),this.myTimerStopper(),document.getElementById("team1-hit").disabled=!0,document.getElementById("team2-hit").disabled=!0,document.getElementById("generate-result").disabled=!1},e.prototype.ShowScore=function(){this.teams.forEach((function(e){var t=document.getElementById("t"+e.id+"-score");t&&(t.innerHTML=String(e.totalScore)),e.players.forEach((function(t){var n=document.getElementById(e.name+"-"+t.name+"-total");n&&(n.innerHTML=String(t.score))}))}));var e=document.getElementById("winner");this.teams[0].totalScore>this.teams[1].totalScore?(e&&(e.innerHTML=this.teams[0].name),this.findMOM(this.teams[0])):(e&&(e.innerHTML=this.teams[1].name),this.findMOM(this.teams[1]))},e.prototype.findMOM=function(e){var t=e.players.map((function(e){return e.score})).sort((function(e,t){return t-e}))[0],n=e.players.filter((function(e){return e.score===t}))[0];document.getElementById("mom").innerHTML=n.name},e}());console.log(a),document.getElementById("team2-hit").disabled=!0,document.getElementById("generate-result").disabled=!0,null===(e=document.getElementById("team1-hit"))||void 0===e||e.addEventListener("click",(function(e){a.teams[0].currentPlayer.hit()})),null===(t=document.getElementById("team2-hit"))||void 0===t||t.addEventListener("click",(function(e){a.teams[1].currentPlayer.hit()})),document.getElementById("generate-result").addEventListener("click",(function(){a.ShowScore()}))})();
//# sourceMappingURL=main.js.map
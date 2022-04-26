import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

interface IPlayer{
  title: string;
  plays: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  currentlySymbolGame = "x"
  playerX: IPlayer = {
    title: "Player X",
    plays: []
  }
  playerO: IPlayer = {
    title: "Player O",
    plays: []
  }
  gameStatus = "stand by"

  showSymbolGame(blockElement: HTMLSpanElement, blockId: string){
    if(blockElement.textContent === "" && this.gameStatus !== "finished"){
      this.gameStatus = "on going"
      blockElement.textContent = this.currentlySymbolGame
      if(this.currentlySymbolGame === "x"){
        this.playerX.plays.push(blockId)
        this.victoryVerification(this.playerX)
      }else{
        this.playerO.plays.push(blockId)
        this.victoryVerification(this.playerO)      
      }
      this.changeSymbolGame()
    }
  }

  changeSymbolGame(){
    switch(this.currentlySymbolGame){
      case "x":
        this.currentlySymbolGame = "o";
        break;
      default:
        this.currentlySymbolGame = "x"
    }
  }

  victoryVerification(player: IPlayer){
    this.horizontalVerification(player)
    this.verticalVerification(player)
    this.digonalVerification(player)
  }

  horizontalVerification(player: IPlayer){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block2') !== -1 && player.plays.indexOf('block3') !== -1){
      this.finishTheGame()
    }
    if(player.plays.indexOf('block4') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block6') !== -1){
      this.finishTheGame()
    }
    if(player.plays.indexOf('block7') !== -1 && player.plays.indexOf('block8') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame()
    }
  }

  verticalVerification(player: IPlayer){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block4') !== -1 && player.plays.indexOf('block7') !== -1){
      this.finishTheGame()
    }
    if(player.plays.indexOf('block2') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block8') !== -1){
      this.finishTheGame()
    }
    if(player.plays.indexOf('block3') !== -1 && player.plays.indexOf('block6') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame()
    }
  }

  digonalVerification(player: IPlayer){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame()
    }
    if(player.plays.indexOf('block3') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block7') !== -1){
      this.finishTheGame()
    }
  }

  finishTheGame(){
    this.gameStatus = "finished"
  }
}

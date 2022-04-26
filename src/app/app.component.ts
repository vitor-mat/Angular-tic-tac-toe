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

  showSymbolGame(blockElement: HTMLSpanElement, blockId: string, finalMessage: HTMLSpanElement, restartBtn: HTMLButtonElement){
    if(blockElement.textContent === "" && this.gameStatus !== "finished"){
      this.gameStatus = "on going"
      blockElement.textContent = this.currentlySymbolGame
      if(this.currentlySymbolGame === "x"){
        this.playerX.plays.push(blockId)
        this.victoryVerification(this.playerX, finalMessage, restartBtn)
      }else{
        this.playerO.plays.push(blockId)
        this.victoryVerification(this.playerO, finalMessage, restartBtn)      
      }
      this.changeSymbolGame()
    }

    if(this.playerO.plays.length + this.playerX.plays.length === 9){
      finalMessage.textContent = `Drawn game`
      finalMessage.setAttribute("style", "display: block")
      restartBtn.setAttribute("style", "display: block")
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

  victoryVerification(player: IPlayer, finalMessage: HTMLSpanElement, restartBtn: HTMLButtonElement){
    this.horizontalVerification(player, finalMessage, restartBtn)
    this.verticalVerification(player, finalMessage, restartBtn)
    this.digonalVerification(player, finalMessage, restartBtn)
  }

  horizontalVerification(player: IPlayer, finalMessage: HTMLSpanElement, restartBtn: HTMLButtonElement){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block2') !== -1 && player.plays.indexOf('block3') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
    if(player.plays.indexOf('block4') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block6') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
    if(player.plays.indexOf('block7') !== -1 && player.plays.indexOf('block8') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
  }

  verticalVerification(player: IPlayer, finalMessage: HTMLSpanElement, restartBtn: HTMLButtonElement){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block4') !== -1 && player.plays.indexOf('block7') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
    if(player.plays.indexOf('block2') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block8') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
    if(player.plays.indexOf('block3') !== -1 && player.plays.indexOf('block6') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
  }

  digonalVerification(player: IPlayer, finalMessage: HTMLSpanElement, restartBtn: HTMLButtonElement){
    if(player.plays.indexOf('block1') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block9') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
    if(player.plays.indexOf('block3') !== -1 && player.plays.indexOf('block5') !== -1 && player.plays.indexOf('block7') !== -1){
      this.finishTheGame(finalMessage, player, restartBtn)
    }
  }

  finishTheGame(finalMessage: HTMLSpanElement, player: IPlayer, restartBtn: HTMLButtonElement){
    this.gameStatus = "finished"
    finalMessage.textContent = `${player.title} win!`
    finalMessage.setAttribute("style", "display: block")
    restartBtn.setAttribute("style", "display: block")
  }

  restartGame(){
    window.location.reload();
  }
}

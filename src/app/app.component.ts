import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  currentlySymbolGame = "x"

  showSymbolGame(blockElement: HTMLSpanElement){
    if(blockElement.textContent === ""){
      blockElement.textContent = this.currentlySymbolGame
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
}

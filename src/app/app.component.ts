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
    blockElement.textContent = this.currentlySymbolGame

    this.changeSymbolGame()
  }

  changeSymbolGame(){
    switch(this.currentlySymbolGame){
      case "x":
        this.currentlySymbolGame = "0";
        break;
      default:
        this.currentlySymbolGame = "x"
    }
  }
}

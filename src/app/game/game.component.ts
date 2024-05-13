import { transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  numberOfCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];

  pickCardAnimation = false;
  game: Game | undefined // stric Class Initialization disable in tsconfig.json: "compilerOptions": {"strictPropertyInitialization": false,...}
  currentCard: string | undefined = '';

  constructor() {

  }

  ngOnInit(): void {
    this.newGame();
  }


  newGame() {
    this.game = new Game();
    console.log(this.game);
  }


  pickCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game?.stack.pop();
      console.log(this.currentCard);
      this.pickCardAnimation = true;
      this.game?.playedCards.push(this.currentCard);
    }

    setTimeout(() => {
      this.pickCardAnimation = false;
    }, 1500);
  }
}

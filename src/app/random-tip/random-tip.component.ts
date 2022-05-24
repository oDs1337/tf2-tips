import { Character } from './../character';
import { CharacterState } from './../tips.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { characterNames } from '../database/characterNames';


@Component({
  selector: 'app-random-tip',
  templateUrl: './random-tip.component.html',
  styleUrls: ['./random-tip.component.css']
})
export class RandomTipComponent implements OnInit {

  randomlyGeneratedTip?: string;

  currentCharacter?: Character;

  constructor(private store: Store<{character: CharacterState}>) {
    this.store.select(state => state.character).subscribe((character) => {
      this.currentCharacter = character;
      this.randomlyGeneratedTip = character.tips[this.generateRandomNumber(character.tips.length)];
    })
   }

  ngOnInit(): void {
    this.getRandomCharacter();
  }

  getRandomCharacter(): void{
    this.store.dispatch({ type: characterNames[this.generateRandomNumber(characterNames.length)] });
  }

  generateRandomNumber(arrayMaxLength: number): number{
    return Math.floor(Math.random() * (arrayMaxLength));
  }

  getAnotherCharacterTip(): void{
    if(this.currentCharacter?.name) {
      this.store.dispatch({ type: this.currentCharacter.name });
    };
  }

}

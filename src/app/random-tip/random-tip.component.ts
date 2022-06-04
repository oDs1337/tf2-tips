import { selectCharacter } from './../tips.selector';
import { characterNames } from './../database/characterNames';
import { generateTip } from './../tips.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Character } from './../character';
import { CharacterState } from './../tips.reducer';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { characters } from '../database/characterNames';


@Component({
  selector: 'app-random-tip',
  templateUrl: './random-tip.component.html',
  styleUrls: ['./random-tip.component.css']
})
export class RandomTipComponent implements OnInit {

  randomlyGeneratedTip?: string;

  currentCharacter?: Character;
  characterNames = Object.values(characters);

  constructor(private store: Store<{character: CharacterState}>) {
    this.store.select(selectCharacter).subscribe((character) => {
      this.currentCharacter = character;
      this.randomlyGeneratedTip = character.tips[this.generateRandomNumber(character.tips.length)];
    })
   }

  ngOnInit(): void {
    this.store.dispatch(generateTip({name: this.characterNames[this.generateRandomNumber(this.characterNames.length)]}));
    // this.getRandomCharacter();
    this.test();
  }

  // getRandomCharacter(): void{
  //   this.store.dispatch({ type: this.characterNames[this.generateRandomNumber(this.characterNames.length)] });
  // }

  generateRandomNumber(arrayMaxLength: number): number{
    return Math.floor(Math.random() * (arrayMaxLength));
  }

  // getAnotherCharacterTip(): void{
  //   if(this.currentCharacter?.name) {
  //     this.store.dispatch({ type: this.currentCharacter.name });
  //   };
  // }

  test(): void{
    console.log(this.currentCharacter);
    if(this.currentCharacter?.name){
      this.store.dispatch(generateTip({name: this.currentCharacter.name}));

    }
  }

}

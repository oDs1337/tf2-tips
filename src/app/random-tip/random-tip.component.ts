import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { characterNames } from '../database/characterNames';
import { Character } from '../character';

@Component({
  selector: 'app-random-tip',
  templateUrl: './random-tip.component.html',
  styleUrls: ['./random-tip.component.css']
})
export class RandomTipComponent implements OnInit {

  test=false;

  tip$?: Observable<string>;

  currentCharacter?: any

  constructor(private store: Store<Character>) {
    this.store.select('tip').subscribe(tip => {
      this.currentCharacter = tip;
    })
   }

  ngOnInit(): void {
    this.getRandomTip();
  }

  getRandomTip(): void{
    this.store.dispatch({ type: characterNames[this.generateRandomNumber()] });
  }

  generateRandomNumber(): number{
    const min = Math.ceil(0);
    const max = Math.floor(characterNames.length);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getAnotherCharacterTip(){
    this.store.dispatch({ type: this.currentCharacter.name });
  }

}

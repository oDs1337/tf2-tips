import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AppState } from '../AppState';
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
    const min = Math.ceil(0);
    const max = Math.floor(characterNames.length);
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    this.store.dispatch({ type: characterNames[randomNumber] });
  }

  getAnotherCharacterTip(name: string){
    this.store.dispatch({ type: name });
  }

}

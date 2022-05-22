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

  tip$?: Observable<string>;

  currentCharacter: any;

  constructor(private store: Store<Character>) {
    this.store.select('tip').subscribe(tip => {
      this.currentCharacter = tip;
    })

    this.tip$ = this.store.select('tip');
   }

  ngOnInit(): void {
  }

  test2(){
    console.log(this.currentCharacter);
  }

}

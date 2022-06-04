import { generateTip } from './../tips.actions';
import { CharacterState } from './../tips.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { characterNames, characters } from '../database/characterNames';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  characterNames = Object.values(characters);

  constructor(private store: Store<CharacterState>) {}

  ngOnInit(): void {
  }

  dispatchTip(character: characterNames): void{
    this.store.dispatch(generateTip({name: character}))
  }

}

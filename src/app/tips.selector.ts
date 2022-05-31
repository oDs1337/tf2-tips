import { CharacterState } from './tips.reducer';
import { Character } from './character';
import { createSelector } from "@ngrx/store";

export interface AppState {
  tips: CharacterState;
}


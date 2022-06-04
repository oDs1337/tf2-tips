import { CharacterState } from './tips.reducer';
import { Character } from './character';
import { createSelector } from "@ngrx/store";

export interface AppState {
  character: CharacterState;
}

export const selectCharacter = (state: AppState) => state.character;

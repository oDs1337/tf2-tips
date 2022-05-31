import { Character } from './character';
import { createAction, props } from "@ngrx/store";

export const generateScoutTip = createAction('[Generate Tip] Scout', props<Character>());
export const generateSoldierTip = createAction('[Generate Tip] Scout', props<Character>());

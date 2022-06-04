import { characters } from './database/characterNames';
import { Character } from './character';
import { createAction, props } from "@ngrx/store";

export const generateTip = createAction('[Generate Tip] Random Tip', props<{name: typeof characters[keyof typeof characters]}>());


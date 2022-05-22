import { tipsPL } from './database/tipsPL';
import { tipsEN } from './database/tipsEN';
import { Action } from "@ngrx/store";

export function tipsReducer(state: string = '', action: Action){
  console.log(action.type, state);

  const min = Math.ceil(0);
  const maxEN = Math.floor(tipsEN.length);
  const maxPL = Math.floor(tipsPL.length);

  switch (action.type) {
    case 'ENGLISH':
      return state = tipsEN[Math.floor(Math.random() * (maxEN - min)) + min];

    case 'POLISH':
      return state = tipsPL[Math.floor(Math.random() * (maxPL - min)) + min];

    default:
      return state;
  }
}

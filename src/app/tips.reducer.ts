import { Action } from "@ngrx/store";

export function tipsReducer(state: string = '', action: Action){
  console.log(action.type, state);

  switch (action.type) {
    case 'ENGLISH':
      return state = 'English';

    case 'POLISH':
      return state = 'Polish';

    default:
      return state;
  }
}

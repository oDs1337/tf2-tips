import { Action } from "@ngrx/store";

export function tipsReducer(state: string = '', action: Action){
  console.log(action.type, state);

  switch (action.type) {
    case 'Scout':
      return state = 'Scout';

    case 'Soldier':
      return state = 'Soldier';

    case 'Pyro':
      return state = 'Pyro';

    case 'Demoman':
      return state = 'Demoman';

    case 'Heavy':
      return state = 'Heavy';

    case 'Engineer':
      return state = 'Engineer';

    case 'Medic':
      return state = 'Medic';

    case 'Sniper':
      return state = 'Sniper';

    case 'Spy':
      return state = 'Spy';

    default:
      return state;
  }
}

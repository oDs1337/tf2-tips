import { scoutTips } from './database/scout-mock';
import { Action } from "@ngrx/store";

export function tipsReducer(state: string = 'Choose class', action: Action){
  console.log(action.type, state);

  function generateRandomNumber(arrayLength: number): number{
    const min = Math.ceil(0);
    const max = Math.floor(arrayLength);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  switch (action.type) {
    case 'Scout':
      return state = scoutTips[generateRandomNumber(scoutTips.length)];

    case 'Soldier':
      return state = tips[0];

    case 'Pyro':
      return state = tips[0];

    case 'Demoman':
      return state = tips[0];

    case 'Heavy':
      return state = tips[0];

    case 'Engineer':
      return state = tips[0];

    case 'Medic':
      return state = tips[0];

    case 'Sniper':
      return state = tips[0];

    case 'Spy':
      return state = tips[0];

    default:
      return state;
  }

}


